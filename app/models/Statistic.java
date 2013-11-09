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
@Table(name = "Statistics")
public class Statistic extends Model implements Serializable{
	@ManyToOne
	public Follower follower;
	public Date startFollowDate;
	public Date finishFollowDate;
}
