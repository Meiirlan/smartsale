package models;

import java.io.Serializable;
import java.util.*;

import javax.persistence.*;

import play.data.validation.Email;
import play.data.validation.MaxSize;
import play.data.validation.MinSize;
import play.data.validation.Required;
import play.data.validation.Unique;
import play.db.jpa.*;

@Entity
@Table(name = "Category")
public class Category extends Model implements Serializable{
	public int usluga_item;//usluga = 1;item = 2
	public String name;
	@ManyToOne
	public UserShop userShop;
}
