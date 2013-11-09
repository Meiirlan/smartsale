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
@Table(name = "Client")
public class Client extends Model implements Serializable{
	@Email
	@Required
	@Unique
	public String user_email;
	@Required
	@MinSize(5)
	@MaxSize(20)
	public String pwd;
	@Required
	public String pwd1;
	public String gender;
	public String firstName;
	public String lastName;
	public String city;
    public boolean isAdmin;
    public boolean isActive;
    public Date birthdate;
	@OneToMany(mappedBy="client", cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	public Set<UserProperty> userProperties;
	@OneToMany(mappedBy="client", cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	public Set<Follower> followers;
}
