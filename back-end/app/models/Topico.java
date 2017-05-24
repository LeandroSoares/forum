package models;

import java.util.*;
import javax.persistence.*;

import com.avaje.ebean.Model;
import play.data.format.*;
import play.data.validation.*;
import models.*;

@Entity
public class Topico extends Model {

    @Id
    @Constraints.Min(10)
    public Long id;

    @Constraints.Required
    public String titulo;
    
    @ManyToOne
    public Usuario autor;

    @OneToMany
    public List<Resposta> respostas;

    public static Finder<Long, Topico> find = new Finder<Long,Topico>(Topico.class);
}