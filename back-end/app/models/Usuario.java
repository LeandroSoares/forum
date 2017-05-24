package models;

import java.util.*;
import javax.persistence.*;

import com.avaje.ebean.Model;
import play.data.format.*;
import play.data.validation.*;
import models.*;

@Entity
public class Usuario extends Model {

    @Id
    @Constraints.Min(10)
    public Long id;

    @Constraints.Required
    public String nome;

    @Constraints.Required
    @Column(unique = true)
    public String email;

    @Constraints.Required
    public String senha;

    public static Finder<Long, Usuario> find = new Finder<Long,Usuario>(Usuario.class);
}