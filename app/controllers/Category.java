package controllers;

import play.*;
import play.data.validation.Required;
import play.mvc.*;

import java.util.*;

import org.apache.commons.codec.digest.DigestUtils;

import com.sun.mail.handlers.message_rfc822;

public class Category extends Controller{
    
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
		List<models.Category> categories = models.Category.getSubcategories(category);
        render(category,sortBy,subCategory,categories);
    }

}