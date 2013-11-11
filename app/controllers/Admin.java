package controllers;

import play.*;
import play.mvc.*;
 
import java.util.*;

import controllers.Secure.Security;
 
import models.*;

@With(Secure.class)
@Check("isAdmin")
public class Admin extends Controller {
    
    @Before
    static void setConnectedUser() {
        if(Security.isConnected()) {
            Client user = Client.getUserByEmail(Security.connected());
            renderArgs.put("email", user);
        }
    }
 
    public static void index() {
    	System.out.println("admin");
        Application.index();
    }
    
}