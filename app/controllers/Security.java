package controllers;

import models.Client;

public class Security extends Secure.Security {

	static boolean check(String profile) {
		System.out.println("check");
		if (Security.isConnected()) {
			Client user = Client.getUserByEmail(connected());
			if (user != null && "isAdmin".equals(profile)) {
				return user.isAdmin;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

}