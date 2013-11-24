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
	public String name;
	public String nameRus;
	@ManyToOne
	public Category parent;
	@OneToMany(mappedBy = "parent")
	public List<Category> categories;
	@OneToMany(mappedBy = "category")
	public List<Follower> followers;
	@ManyToMany(mappedBy = "categories",cascade = CascadeType.ALL)
    public List<UserShop> userShops;
	
	public String toString() {
		return nameRus;
	}
	public static Category getCategoryByParent(String parent) {
		return Category.find("byName", parent).first();
	}
	public static Category getCategoryByName(String name) {
		return Category.find("byName", name).first();
	}
	public static List<Category> getSubcategories(String parentName) {
		if(parentName.equals("all")){
			return Category.findAll();
		}
		Category parent = Category.getCategoryByParent(parentName);
		return Category.find("byParent", parent).fetch();	
	}
	public static Category getCategoryRusName(String name) {
		return Category.find("byName", name).first();
	}
}
