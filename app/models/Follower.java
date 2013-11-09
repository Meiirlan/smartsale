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
	public Item item;
	public boolean ok;
	@OneToMany(mappedBy="follower", cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	public Set<Statistic> statistics;
}
