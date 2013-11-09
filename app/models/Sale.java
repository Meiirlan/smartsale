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
@Table(name = "Sale")
public class Sale extends Model implements Serializable{
	public boolean male;
	public boolean female;
	public boolean boy;
	public boolean girl;
	public Date dateStart;
	public Date dateFinish;
	@OneToMany(mappedBy="sale", cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	public Set<SaleProperty> saleProperties;
	@ManyToOne
	public UserShop userShop;
}
