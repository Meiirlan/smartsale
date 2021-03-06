package models;

import java.io.Serializable;
import java.util.*;

import javax.persistence.*;

import play.data.validation.Email;
import play.data.validation.MaxSize;
import play.data.validation.MinSize;
import play.data.validation.Required;
import play.data.validation.Unique;
import play.db.jpa.Blob;
import play.db.jpa.Model;

@Entity
@Table(name = "Client")
public class Client extends Model implements Serializable{
	@Email
	@Required
	@Unique
	public String user_email;
	@Required
	@MinSize(5)
	@MaxSize(40)
	public String pwd;
	@Required
	@MinSize(5)
	@MaxSize(40)
	public String pwd1;
	public String gender;
	public String firstName;
	public String lastName;
	public String phone;
	public boolean isAdmin;
	public boolean isActive;
	public Date birthday;
	@OneToMany(mappedBy = "client", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	public Set<UserProperty> userProperties;
	@OneToMany(mappedBy = "client", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	public Set<Follower> followers;
	@ManyToOne
	public City city;
//	@OneToOne(mappedBy="client", cascade=CascadeType.ALL,fetch = FetchType.LAZY)
	public Blob photo;

	public Client(String user_email, String pwd, String pwd1, String gender,
			String firstName, String lastName, boolean isAdmin,
			boolean isActive, Date birthday) {
		this.user_email = user_email;
		this.pwd = pwd;
		this.pwd1 = pwd1;
		this.gender = gender;
		this.firstName = firstName;
		this.lastName = lastName;
		this.isAdmin = isAdmin;
		this.isActive = isActive;
		this.birthday = birthday;
		this.photo = new Blob();
	}

	public Client(String email, String pwd2,String firstName,String lastName) {
		this.user_email = email;
		this.pwd = pwd2;
		this.pwd1 = pwd2;
		this.firstName = firstName;
		this.lastName = lastName;
		this.photo = new Blob();
	}

	public static Client getUserByEmail(String email) {
		return find("byUser_email", email).first();
	}

	public static Client connect(String email, String pwd) {
		return find("byUser_emailAndPwd", email, pwd).first();
	}
	public static boolean isUserActive(String email, String pwd) {
		if(find("byUser_emailAndPwdAndIsActive", email, pwd, true).first()){
			return true;
		}else{
			return false;
		}
	}

	public static List<Client> getnotActiveUsersl() {
		return Client.find("byIsActive", false).fetch();
	}

	public String toString() {
		return user_email;
	}
}
