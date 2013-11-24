package notifiers;

import play.*;
import play.mvc.*;

import java.util.*;

import org.apache.commons.mail.*;

import models.Client;

;

public class Mails extends Mailer {
	public static String projectName = "Smart Sale";
//	public static String projectSite = "http://localhost:9000";
	public static String projectSite = "http://smartsale.kz";

	public static void welcome() {
		setSubject("Welcome %s", "sultan");
		addRecipient("zh.sulta@gmail.com");
		setFrom("Me <me@me.com>");
		String username = "Alish";
		send(username);
	}

	public static void correctCourse(String email, String username) {
		setSubject("Notification: %s", projectName);
		String pName = projectName;
		String pSite = projectSite;
		addRecipient(email);
		setFrom("Me <me@me.com>");
		if (username != null && username.length() >= 0) {
			send(username, pName, pSite);
		} else {
			username = email;
			send(username, pName, pSite);
		}

	}

	public static void verifyUser(String email, String address) {
		setSubject("Notification: %s", projectName);
		String pName = projectName;
		addRecipient(email);
		setFrom("Me <me@me.com>");
		address = projectSite + "/Application/verify?address=" + email;
		send(email, pName, address);
		System.out.println("111111111");
	}

	// public static void welcome(User user) {
	// setSubject("Welcome %s", user.username);
	// addRecipient(user.email);
	// setFrom("Me <me@me.com>");
	// EmailAttachment attachment = new EmailAttachment();
	// attachment.setDescription("A pdf document");
	// attachment.setPath(Play.getFile("rules.pdf").getPath());
	// addAttachment(attachment);
	// send(user);
	// }

	public static void lostPassword(String email, String address) {
		setSubject("Notification: %s", projectName);
		addRecipient(email);
		setFrom("Me <me@me.com>");
		address = projectSite + "/Application/resetOldPwd?email=" + email;
		try {
			send(email, projectName, address, projectSite);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	public static void feedBack(String firstName, String question,
			String phone, String email, String content) {
		setSubject("Обратная связь : %s", projectName);
		addRecipient("zh.sulta@gmail.com");
		setFrom("SmartSale.kz <smartsalekz@gmail.com>");
		send(firstName,question,phone,email,content);
	}

}