package controllers;

import play.*;
import play.cache.Cache;
import play.data.validation.Required;
import play.db.jpa.Blob;
import play.libs.MimeTypes;
import play.mvc.*;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.*;

import models.Client;
import models.Picture;
import models.UserShop;

import org.apache.commons.codec.digest.DigestUtils;

import com.sun.mail.handlers.message_rfc822;

public class Sale extends Controller {
	@Before
	static void setConnectedUser() {
		if (Security.isConnected()) {
			String user = session.get("user");
			if (user.equals("client")) {
				Client client = Cache.get(session.getId() + "client",
						Client.class);
				if (client == null) {
					client = Client.getUserByEmail(session.get("email"));
					Cache.set(session.getId() + "client", client, "30mn");
				}
				renderArgs.put("client", client);
			} else if (user.equals("userShop")) {
				UserShop userShop = Cache.get(session.getId() + "userShop",
						UserShop.class);
				if (userShop == null) {
					userShop = UserShop
							.getUserShopByEmail(session.get("email"));
					Cache.set(session.getId() + "userShop", userShop, "30mn");
				}
				renderArgs.put("userShop", userShop);
			}
		}
	}

	public static void index(String category) {
		if (category == null || category.equals("")) {
			category = "all";
		}
		List<models.Sale> sales = models.Sale.findAll();
		render(category, sales);
	}

	public static void newSales() {
		render();
	}

	public static void clientSales() {
		render();
	}

	public static void serviceSales() {
		UserShop userShop = Cache.get(session.getId() + "userShop",
				UserShop.class);

		List<models.Sale> sales = models.Sale.getSalesByService(userShop);
		render(sales);
	}
	public static void mySale(){
		render();
	}
	public static void saveServiceSale(String startDate, String startHour,
			String endDate, String endHour, File photo,File photo1
			,File photo2,File photo3, boolean male,
			boolean female, boolean boy, boolean girl, boolean baby,
			String content) {
		System.out.println(startDate);
		System.out.println(startHour);
		System.out.println(endDate);
		System.out.println(endHour);
		System.out.println(male);
		System.out.println(female);
		System.out.println(boy);
		System.out.println(girl);
		System.out.println(baby);
		System.out.println(content);
		Date dateStart = new Date();
		Date dateFinish = new Date();
		UserShop userShop = Cache.get(session.getId() + "userShop",
				UserShop.class);

		models.Sale sale = new models.Sale(male, female, boy, girl, baby,
				dateStart, content, dateFinish, userShop);

		System.out.println(photo + " -----------------");
		if (photo != null) {
			try {
				sale.mainPhoto = new Blob();
				sale.mainPhoto.set(new FileInputStream(photo),
						MimeTypes.getContentType(photo.getName()));
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			}
		}
		if (photo1 != null) {
			try {
				sale.photo1 = new Blob();
				sale.photo1.set(new FileInputStream(photo1),
						MimeTypes.getContentType(photo1.getName()));
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			}
		}
		if (photo2 != null) {
			try {
				sale.photo2 = new Blob();
				sale.photo2.set(new FileInputStream(photo2),
						MimeTypes.getContentType(photo2.getName()));
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			}
		}
		if (photo3 != null) {
			try {
				sale.photo3 = new Blob();
				sale.photo3.set(new FileInputStream(photo3),
						MimeTypes.getContentType(photo3.getName()));
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			}
		}
		sale.save();
		serviceSales();
	}

	public static void salePhoto(long id) {
		final models.Sale sale = models.Sale.findById(id);
		notFoundIfNull(sale);
		if (sale.mainPhoto != null) {
			response.setContentTypeIfNotSet(sale.mainPhoto.type());
			renderBinary(sale.mainPhoto.get());
		}
	}
}