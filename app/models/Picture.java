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
@Table(name = "Files")
public class Picture extends Model implements Serializable{
	public Blob file;
//	@ManyToOne
//	public Sale sale;
}
