package models;

import java.io.Serializable;
import java.util.*;

import javax.persistence.*;

import play.data.validation.Email;
import play.data.validation.MaxSize;
import play.data.validation.MinSize;
import play.data.validation.Required;
import play.data.validation.Unique;
import play.db.jpa.JPABase;
import play.db.jpa.Model;


@Entity
@Table(name = "City")
public class City extends Model implements Serializable{
	public String city;
	@OneToMany(mappedBy="city", cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	public Set<Client> clients;
	@OneToMany(mappedBy="city", cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	public Set<UserShop> userShops;
	
	public static City getCity(String store) {
		return find("byCity", store).first();
	}
	
	public static List<City> getAllCity() {
		return  City.findAll();
	}
	
	public String toString() {
		return city;
	}
}
