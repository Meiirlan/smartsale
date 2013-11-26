package controllers;

import play.*;
import play.cache.Cache;
import play.data.validation.Required;
import play.db.jpa.Blob;
import play.libs.MimeTypes;
import play.mvc.*;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.io.File;

import notifiers.Mails;

import org.apache.commons.codec.digest.DigestUtils;

import com.sun.mail.handlers.message_rfc822;

import models.*;

public class Application extends Controller {
	@Before
	static void setConnectedUser() {
		if (Security.isConnected()) {
			String user = session.get("user");
			if(user.equals("client")){
				Client client = Cache.get(session.getId() + "client", Client.class);
				if (client == null) {
					client = Client.getUserByEmail(session.get("email"));
					Cache.set(session.getId() + "client", client, "30mn");
				}
				renderArgs.put("client", client);	
			}else if(user.equals("userShop")){
				UserShop userShop = Cache.get(session.getId() + "userShop", UserShop.class);
				if (userShop == null) {
					userShop = UserShop.getUserShopByEmail(session.get("email"));
					Cache.set(session.getId() + "userShop", userShop, "30mn");
				}
				renderArgs.put("userShop", userShop);
			}
		}
	}
	
	public static void index() {
		render();
	}

	public static void signup() {
		render();
	}

	public static void signupStore() {
		List<City> cities = City.getAllCity();
		render(cities);
	}

	public static void clientProfile() {
		render("Application/profile.html");
	}
	public static void serviceProfile() {
		render();
	}
	
	public static void editProfile() {
		List<City> cities = City.getAllCity();
		render(cities);
	}
	public static void editServiceProfile() {
		List<City> cities = City.getAllCity();
		render(cities);
	}
	public static void userPhoto(long id) {
		final Client client = Client.findById(id);
		notFoundIfNull(client);
		System.out.println(client.photo + "---------------");
		if (client.photo != null) {
			response.setContentTypeIfNotSet(client.photo.type());
			renderBinary(client.photo.get());
		}
	}
		
	public static void saveProfile(String email, String firstName,
			String lastName, File photo, String gender, String phone,
			String birthday, String city) throws FileNotFoundException {
		System.out.println(photo + "q22222222222222");
		Client client = Client.getUserByEmail(email);
		client.user_email = email;
		client.firstName = firstName;
		client.lastName = lastName;
		client.phone = phone;
		client.gender = gender;
		if (birthday != null) {
			SimpleDateFormat dateFormat = new SimpleDateFormat("dd-mm-yyyy");
			Date convertedDate = null;
			try {
				convertedDate = dateFormat.parse(birthday);
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			client.birthday = convertedDate;
		}
		City clientCity = City.getCity(city);
		client.city = clientCity;
		// client.photo = new Picture();
		if (photo != null) {
			client.photo = new Blob();
			client.photo.set(new FileInputStream(photo),
					MimeTypes.getContentType(photo.getName()));
		}
		Cache.safeReplace(session.getId() + "client", client, "30mn");
		client.save();
		clientProfile();
	}
	
	public static void saveServiceProfile(String email, String firstName,
			String lastName, File photo, String phone, String address, String serviceName,
			 String city) throws FileNotFoundException {
		System.out.println(photo + "q22222222222222");
		UserShop userShop = UserShop.getUserShopByEmail(email);
		userShop.user_email = email;
		userShop.firstName = firstName;
		userShop.lastName = lastName;
		userShop.phone = phone;
		userShop.address = address;
		userShop.serviceName = serviceName;
		
		City clientCity = City.getCity(city);
		userShop.city = clientCity;
		// client.photo = new Picture();
		if (photo != null) {
			userShop.photo = new Blob();
			userShop.photo.set(new FileInputStream(photo),
					MimeTypes.getContentType(photo.getName()));
		}
		Cache.safeReplace(session.getId() + "userShop", userShop, "30mn");
		userShop.save();
		serviceProfile();
	}
	
	public static void clientFollowers() {
		render();
	}

	public static void serviceFollowers() {
		render();
	}
	
	public static void clientQuestions() {
		render();
	}
	public static void save(Long id,
			@Required(message = "Email is required") String email,
			String firstName, String lastName,
			@Required(message = "Password is required") String pwd,
			@Required(message = "Password confirmation is required") String cpwd)
			throws Throwable {
		String emailreg = "^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";
		
		Boolean b = email.matches(emailreg);
		if(!b){
			flash.keep("url");
			flash.error("Неправильный адрес");
			params.flash();
			signup();
		}
		System.out.println(email);
		System.out.println(firstName);
		System.out.println(lastName);
		System.out.println(pwd);
		System.out.println(cpwd);

		if (!pwd.equals(cpwd)) {
			flash.keep("url");
			flash.error("Пароли не совпадают");
			params.flash();
			signup();
		}
		Client client = Client.getUserByEmail(email);
		if (client != null) {
			flash.keep("url");
			flash.error("Пользователь с такой почтой уже существует");
			params.flash();
			signup();
		}

		validation.valid(client);
		if (validation.hasErrors()) {
			render("Application/signup.html", client);
		}
		pwd = DigestUtils.md5Hex(pwd);
		client = new Client(email, pwd, firstName, lastName);
		String address = email;
		Mails.verifyUser(email, address);
		// Save
		client.save();
		Secure.login();
	}

	public static void saveStore(Long id,
			@Required(message = "Email is required") String email,
			@Required(message = "Phone is required") String phone,
			@Required(message = "City is required") String city,
			@Required(message = "City is required") String address,
			@Required(message = "Password is required") String pwd,
			File photo,String serviceName,
			@Required(message = "Password confirmation is required") String cpwd)
			throws Throwable {

		System.out.println(email);
		System.out.println(phone);
		System.out.println(city);
		System.out.println(address);
		System.out.println(serviceName);

		if (validation.hasErrors()) {
			flash.error("Пожалуйста заполните поля с *");
			params.flash(); // add http parameters to the flash scope
			validation.keep(); // keep the errors for the next request
			signupStore();
		}
		System.out.println("2");

		if (!pwd.equals(cpwd)) {
			flash.error("Пароли не совпадают");
			params.flash();
			validation.keep(); // keep the errors for the next request
			signupStore();
		}
		System.out.println("3");
		UserShop userShop = UserShop.getUserShopByEmail(email);
		if (userShop != null) {
			flash.error("Пользователь с такой почтой уже существует");
			params.flash();
			validation.keep(); // keep the errors for the next request
			signupStore();
		}
		System.out.println("4");

		validation.valid(userShop);
		if (validation.hasErrors()) {
			render("Application/signupStore.html", userShop);
		}
		System.out.println("5");
		pwd = DigestUtils.md5Hex(pwd);
		City myCity = City.getCity(city);
		System.out.println(city);
		if (city != null) {
			userShop = new UserShop(email, pwd, myCity, address, phone,serviceName);
		} else {
			render("Application/signupStore.html", userShop);
		}
		if (photo != null) {
			userShop.photo = new Blob();
			userShop.photo.set(new FileInputStream(photo),
					MimeTypes.getContentType(photo.getName()));
		}
		
		System.out.println("6");
		String destinationAddress = email;
		Mails.verifyUser(email, destinationAddress);
		// Save
		userShop.save();
		Secure.login();
	}

	public static void recover() {
		render();
	}

	public static void feedback() {
		Client client = Cache.get(session.getId() + "client", Client.class);
		if(client!=null){
			render(client);
		}else{
			UserShop service = Cache.get(session.getId() + "userShop", UserShop.class);
			render(service);
		}
	}

	public static void sendFeedback(String firstName, String question,
			String phone, String email, String content) {
		System.out.println(question);
		if (question.equals("quest")) {
			question = "Вопрос";
		} else if (question.equals("problem")) {
			question = "Отзыв об скидке";
		} else if (question.equals("new_func")) {
			question = "Предложение";
		} else if (question.equals("problem_cupon")) {
			question = "Проблема с регистрацией скидки";
		} else if (question.equals("problem_action")) {
			question = "Проблема с участием в скидке";
		} else if (question.equals("mailer")) {
			question = "Вопрос по рассылке";
		} else {
			question = "Другое";
		}
		System.out.println(firstName);
		System.out.println(question);
		System.out.println(phone);
		System.out.println(email);
		System.out.println(content);
		Mails.feedBack(firstName, question, phone, email, content);
		feedbackSuccess();
		// index();
	}
	public static void feedbackSuccess() {
		render();
	}
	public static void reset(String email) {
		String destinationAddress = email;
		Mails.lostPassword(email, destinationAddress);
		render(email);
	}

	public static void resetOldPwd(String email) {
		System.out.println(email);
		render(email);
	}

	public static void saveNewPwd(String email) throws Throwable {
		System.out.println(email);
		Secure.login();
	}

	public static void verify(String address) {

		ArrayList<Client> clients = (ArrayList<Client>) Client
				.getnotActiveUsersl();

		for (int i = 0; i < clients.size(); i++) {
			if (address.equals(clients.get(i).user_email)) {
				clients.get(i).isActive = true;
				clients.get(i).save();
				render(address);
				break;
			}
		}
		ArrayList<UserShop> userShops = (ArrayList<UserShop>) UserShop.getnotActiveUsers();

		for (int i = 0; i < userShops.size(); i++) {
			if (address.equals(userShops.get(i).user_email)) {
				userShops.get(i).isActive = true;
				userShops.get(i).save();
				render(address);
				break;
			}
		}
		render("errors/404.html");
	}

	public static void robots() {
		File file = play.Play.getFile("public/other/robots.txt");
		response.cacheFor("24h");
		renderBinary(file);
	}

	public static void offerta() {
		render();
	}

	public static void howDoesItWorks() {
		render();
	}

	public static void aboutUs() {
		render();
	}

	public static void workWithUs() {
		render();
	}

	public static void faqs() {
		render();
	}

	public static void ownBusiness() {
		render();
	}

}