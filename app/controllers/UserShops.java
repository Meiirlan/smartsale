package controllers;

import play.mvc.With;
 
@With(Secure.class)
@Check("isAdmin")
public class UserShops extends CRUD {
    
}