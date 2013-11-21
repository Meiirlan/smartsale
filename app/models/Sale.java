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
@Table(name = "Sale")
public class Sale extends Model implements Serializable {
	public boolean male;
	public boolean female;
	public boolean boy;
	public boolean girl;
	public boolean baby;
	public Date dateStart;
	public boolean isActive;
	public int score;
	@Lob
	public String text;
	public Date dateFinish;
	@OneToMany(mappedBy = "sale", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	public Set<SaleProperty> saleProperties;
	@ManyToOne
	public UserShop userShop;
	public Blob mainPhoto;
	public Blob photo1;
	public Blob photo2;
	public Blob photo3;
	
	public Sale(boolean male, boolean female, boolean boy, boolean girl,
			boolean baby, Date dateStart, String text, Date dateFinish,
			UserShop userShop) {
		this.male = male;
		this.female = female;
		this.boy = boy;
		this.girl = girl;
		this.baby = baby;
		this.dateStart = dateStart;
		this.text = text;
		this.dateFinish = dateFinish;
		this.userShop = userShop;
	}

	public static List<models.Sale> getSalesByService(UserShop userShop) {
		return Sale.find("byUserShop", userShop).fetch();
	}

}
