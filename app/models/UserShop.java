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
	public String serviceName;
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
	public boolean isShopActive;//must be checked by moderator
	public boolean isActive;
	@OneToMany(mappedBy = "userShop", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	public Set<UserProperty> userProperties;	
	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
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
	public Date createDate;
	
	public UserShop(String email, String pwd2, City city2, String address2,
			String phone,String serviceName) {
		this.user_email = email;
		this.score = 0;
		isActive = false;
		this.pwd = pwd2;
		this.pwd1 = pwd2;
		this.city = city2;
		this.address = address2;
		this.phone = phone;
		this.serviceName = serviceName;
	}

	public static UserShop getUserShopByEmail(String email) {
		return find("byUser_email", email ).first();
	}
	public static UserShop connect(String email, String pwd) {
		return find("byUser_emailAndPwd", email, pwd).first();
	}
	public static List<UserShop> getUserShops(String sortBy) {
		if(sortBy.equals("all")){
			return find("order by score desc").fetch();
		}else if(sortBy.equals("new")){
			return find("order by createDate,score desc").fetch();
		}
		List<UserShop> userShops =  find("order by score desc").fetch();
		int length = userShops.size();
		System.out.println("length = "+length);
		List<UserShop> result = new ArrayList<UserShop>();
		for(int i=0;i<length;i++){
			int s = userShops.get(i).categories.size();
			for(int j=0;j<s;j++){
				if(userShops.get(i).categories.get(j).name.equals(sortBy)){
					result.add(userShops.get(i));
					break;
				}
			}
		}
		return result;
	}
	public String toString(){
		return this.serviceName;
	}
}
