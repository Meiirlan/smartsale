package controllers;

import play.*;
import play.data.validation.Required;
import play.mvc.*;

import java.util.*;

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
    	
    	  	
    	Secure.login();    	
    }
}