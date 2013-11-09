package models;

import java.io.Serializable;
import java.util.*;

import javax.persistence.*;

import play.data.validation.Email;
import play.data.validation.MaxSize;
import play.data.validation.MinSize;
import play.data.validation.Required;
import play.data.validation.Unique;
import play.db.jpa.Model;

@Entity
@Table(name = "UserShop")
public class UserShop extends Model implements Serializable {
	@Email
	@Required
	@Unique
	public String user_email;
	@Required
	@MinSize(5)
	@MaxSize(30)
	public String pwd;
	@Required
	public String pwd1;
	public String phoneNumber;
	public String city;
	public boolean isActive;
	@OneToMany(mappedBy = "userShop", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	public Set<UserProperty> userProperties;
	@OneToMany(mappedBy = "userShop", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	public Set<Category> categories;
	@OneToMany(mappedBy="userShop", cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	public Set<Sale> sales;
	@OneToMany(mappedBy="userShop", cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	public Set<Follower> followers;
}
