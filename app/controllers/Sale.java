package controllers;

import play.*;
import play.data.validation.Required;
import play.mvc.*;

import java.util.*;

import org.apache.commons.codec.digest.DigestUtils;

import com.sun.mail.handlers.message_rfc822;

public class Sale extends Controller{
    //all sales
	public static void index() {
        render();
    }
	public static void newSales() {
        render();
    }
	public static void clientSales() {
        render();
    }
	public static void serviceSales() {
        render();
    }
	public static void saveServiceSale() {
        serviceSales();
    }
}