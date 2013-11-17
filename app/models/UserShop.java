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
@Table(name = "UserShop")
public class UserShop extends Model implements Serializable {
	@Email
	@Required
	@Unique
	public String user_email;
	@Required
	@MinSize(2)
	@MaxSize(30)
	public String pwd;
	@Required
	@MinSize(2)
	@MaxSize(30)
	public String pwd1;
	public String phone;
	public int score;
	public boolean isShopActive;
	public boolean isActive;
	@OneToMany(mappedBy = "userShop", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	public Set<UserProperty> userProperties;
	
	@ManyToMany(mappedBy = "userShops")
    public List<Category> categories;
    
	@OneToMany(mappedBy="userShop", cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	public Set<Sale> sales;
	@OneToMany(mappedBy="userShop", cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	public Set<Follower> followers;
	@ManyToOne
	public City city;
	public String address;
	public String firstName;
	public String lastName;
	public Blob photo;
	
	public UserShop(String email, String pwd2, City city2, String address2,
			String phone) {
		this.user_email = email;
		this.score = 0;
		isActive = false;
		this.pwd = pwd2;
		this.pwd1 = pwd2;
		this.city = city2;
		this.address = address2;
		this.phone = phone;
	}

	public static UserShop getUserShopByEmail(String email) {
		return find("byUser_email", email ).first();
	}
	public static UserShop connect(String email, String pwd) {
		return find("byUser_emailAndPwd", email, pwd).first();
	}
}
