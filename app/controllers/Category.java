package controllers;

import play.*;
import play.cache.Cache;
import play.data.validation.Required;
import play.mvc.*;
import sun.print.resources.serviceui;

import java.util.*;

import models.Client;
import models.UserShop;

import org.apache.commons.codec.digest.DigestUtils;

import com.sun.mail.handlers.message_rfc822;

public class Category extends Controller{
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
	
	public static void index(String category,String sortBy,String subCategory) {
		if(category==null||category.equals("")){
			category = "all";
		}
		if(sortBy==null||sortBy.equals("")){
			sortBy = "popular";
		}
		models.Category  myCategory = models.Category.getCategoryRusName(subCategory);
		if(myCategory!=null){
			subCategory = myCategory.nameRus;
		}else{
			subCategory = "all";
		}
		List<models.Sale> sales = models.Sale.findAll();
		List<models.Category> categories = models.Category.getSubcategories(category);
        render(sales,category,sortBy,subCategory,categories);
    }
	public static void serviceCategory() {	
		List<models.Category> categories = models.Category.findAll();		
		render(categories);
	}
	public static void saveServiceCategory(long serviceId,String[] category){
		System.out.println(Arrays.toString(category));
		int length = category.length;
		UserShop userShop = UserShop.findById(serviceId);
		System.out.println(serviceId);
		List<models.Category> categories = new ArrayList<models.Category>();
		for(int i=0;i<length;i++){
			models.Category c = models.Category.getCategoryByName(category[i]);
			categories.add(c);
		}
		userShop.categories = categories;
		userShop.save();
		Cache.safeReplace(session.getId() + "userShop", userShop, "30mn");
		
		serviceCategory();
	}
}