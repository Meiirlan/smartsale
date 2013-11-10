package controllers;

import play.*;
import play.data.validation.Required;
import play.mvc.*;

import java.util.*;

import notifiers.Mails;

import org.apache.commons.codec.digest.DigestUtils;

import models.*;

public class Application extends Controller {

    public static void index() {
        render();
    }
    public static void signup() {    	
    	render();
    }
    public static void save(Long id,
    		@Required(message="Email is required") String email, 
    		@Required(message="Password is required") String pwd, 
    		@Required(message="Password confirmation is required") String cpwd) throws Throwable {
    	
    	System.out.println(email);
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
        client = new Client(email,pwd);
        String address = email;
        Mails.verifyUser(email, address);    	
        // Save
        client.save();
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