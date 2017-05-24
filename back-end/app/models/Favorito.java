package models;

import java.util.*;
import javax.persistence.*;

import com.avaje.ebean.Model;
import play.data.format.*;
import play.data.validation.*;
import models.*;

@Entity
public class Favorito extends Model {

    @Id
    @Constraints.Min(10)
    public Long id;

    @ManyToOne
    public Resposta resposta;
    
    @ManyToOne
    public Usuario usuario;

    public static Finder<Long, Favorito> find = new Finder<Long,Favorito>(Favorito.class);
}