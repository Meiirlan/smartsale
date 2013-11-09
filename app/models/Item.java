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
@Table(name = "Item")
public class Item extends Model implements Serializable{
	public String itemName;
	@OneToMany(mappedBy="item", cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	public Set<SaleProperty> saleProperties;
	@OneToMany(mappedBy="item", cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	public Set<Follower> followers;
}
