package controllers;

import play.*;
import play.data.validation.Required;
import play.mvc.*;

import java.util.*;

import notifiers.Mails;

import org.apache.commons.codec.digest.DigestUtils;

import com.sun.mail.handlers.message_rfc822;

import models.*;

public class Application extends Controller {

    public static void index() {
        render();
    }
    public static void signup() {    	
    	render();
    }
    public static void signupStore() {    	
    	render();
    }
    public static void profile() {    	
    	render();
    }
    public static void clientFollowers() {    	
    	render();
    }
    public static void myQuestions() {    	
    	render();
    }
    public static void save(Long id,
    		@Required(message="Email is required") String email, 
    		String firstName, 
    		String lastName, 
    		@Required(message="Password is required") String pwd, 
    		@Required(message="Password confirmation is required") String cpwd) throws Throwable {
    	
    	System.out.println(email);
    	System.out.println(firstName);
    	System.out.println(lastName);
    	System.out.println(pwd);
    	System.out.println(cpwd);
    	
    	if(!pwd.equals(cpwd)){
    		flash.keep("url");
            flash.error("passwords are not equal");
            params.flash();
            signup();
    	}
    	Client client = Client.getUserByEmail(email);
    	if(client!=null){
        	flash.keep("url");
            flash.error("email already exists");
            params.flash();
            signup();
    	}

        
    	validation.valid(client);
        if(validation.hasErrors()){
        	render("Application/signup.html",client);
        }
        pwd = DigestUtils.md5Hex(pwd);
        client = new Client(email,pwd,firstName,lastName);
        String address = email;
        Mails.verifyUser(email, address);    	
        // Save
        client.save();
        Secure.login();  
    }
    public static void saveStore(Long id,
    		@Required(message="Email is required") String email, 
    		@Required(message="Phone is required") String phone, 
    		@Required(message="City is required") String store, 
    		@Required(message="City is required") String address, 
    		@Required(message="Password is required") String pwd, 
    		@Required(message="Password confirmation is required") String cpwd) throws Throwable {
    	
    	System.out.println(email);
    	System.out.println(phone);
    	System.out.println(store);
    	System.out.println(address);
    	System.out.println(pwd);
    	System.out.println(cpwd);
    	
    	
    	if(validation.hasErrors()) {
    		flash.error("error");
    		params.flash(); // add http parameters to the flash scope
            validation.keep(); // keep the errors for the next request            
            signupStore();
        }
    	System.out.println("2");
    	
    	if(!pwd.equals(cpwd)){
            flash.error("passwords are not equal");
            params.flash();
            validation.keep(); // keep the errors for the next request        
            signupStore();
    	}
    	System.out.println("3");
    	UserShop userShop = UserShop.getUserShopByEmail(email);
    	if(userShop!=null){
            flash.error("email already exists");
            params.flash();
            validation.keep(); // keep the errors for the next request        
            signupStore();
    	}
    	System.out.println("4");

        
    	validation.valid(userShop);
        if(validation.hasErrors()){
        	render("Application/signupStore.html",userShop);
        }
        System.out.println("5");
        pwd = DigestUtils.md5Hex(pwd);
        City city = City.getCity(store);
        System.out.println(city);
        if(city!=null){
        	userShop = new UserShop(email,pwd,city,address,phone);
        }else{
        	render("Application/signupStore.html",userShop);
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
    	render();
    }
    public static void sendFeedback(String firstName,String question,
    		String phone,String email,String content) {
    	if(question.equals("quest")){
    		question = "Вопрос";
    	}else if(question.equals("quest")){
    		question = "Отзыв об скидке";
    	}else if(question.equals("new_func")){
    		question = "Предложение";
    	}else if(question.equals("problem_cupon")){
    		question = "Проблема с регистрацией скидки";
    	}else if(question.equals("problem_action")){
    		question = "Проблема с участием в скидке";
    	}else if(question.equals("mailer")){
    		question = "Вопрос по рассылке";
    	}else{
    		question = "Другое";
    	}
    	System.out.println(firstName);
    	System.out.println(question);
    	System.out.println(phone);
    	System.out.println(email);
    	System.out.println(content);
    	Mails.feedBack(firstName,question,phone,email,content);    
    	feedback();
//    	index();
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
    	
    	ArrayList<Client> clients = (ArrayList<Client>)Client.getnotActiveUsersl();
    	
    	for(int i=0;i<clients.size();i++){
    		if(address.equals(clients.get(i).user_email)){
//    			clients.get(i).isActive = true;
    			clients.get(i).save();
    			render(address);
    			break;
    		}
    	}
//    	render("errors/404.html");
    }
}