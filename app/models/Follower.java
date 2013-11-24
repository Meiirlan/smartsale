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
@Table(name = "Follower")
public class Follower extends Model implements Serializable{
	@ManyToOne
	public Client client;
	@ManyToOne
	public UserShop userShop;
	@ManyToOne
	public Category category;
//	@ManyToOne
//	public Item item;
	public boolean ok;
	@OneToMany(mappedBy="follower", cascade=CascadeType.ALL,fetch = FetchType.LAZY)
	public Set<Statistic> statistics;
	
	public Follower(Client client, UserShop userShop, Category category,
			boolean ok, Set<Statistic> statistics) {
		this.client = client;
		this.userShop = userShop;
		this.category = category;
		this.statistics = statistics;
	}
	
	public Follower(Client client, UserShop userShop, boolean ok) {
		this.client = client;
		this.userShop = userShop;
		this.ok = ok;
	}

	public static Follower getFollowerByUserShop(Client client,UserShop userShop) {
		return Follower.find("byClientAndUserShop", client,userShop).first();
	}

	public static List<Follower> getFollowersByClient(Client client) {
		return Follower.find("byClient", client).fetch();
	}
}
