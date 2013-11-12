package controllers;

import play.*;
import play.data.validation.Required;
import play.mvc.*;

import java.util.*;

import notifiers.Mails;

import org.apache.commons.codec.digest.DigestUtils;

import com.sun.mail.handlers.message_rfc822;

import models.*;

public class Shop extends Controller{
    
	public static void index() {
        render();
    }
}