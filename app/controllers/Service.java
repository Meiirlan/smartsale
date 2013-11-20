package controllers;

import play.*;
import play.data.validation.Required;
import play.mvc.*;

import java.util.*;

import models.Category;
import models.UserShop;

import org.apache.commons.codec.digest.DigestUtils;

import com.sun.mail.handlers.message_rfc822;

public class Service extends Controller{
    
	public static void index(String category) {
		if(category==null||category.equals("")){
			category = "all";
		}
		List<UserShop> userShops = UserShop.getUserShops(category);
//		System.out.println(userShops.size());
//		for(int i=0;i<userShops.size();i++){
////			userShops.get(i).categories = Category.findAll();
//			UserShop userShop = UserShop.findById(userShops.get(i).id);
//			List<Category> c = Category.findAll();
//			for(int j=0;j<c.size();j++){
//				userShop.categories.add(c.get(j));
//			}
//			System.out.println(userShop.categories);
//			userShop.save();
//		}
        render(category,userShops);
    }
}