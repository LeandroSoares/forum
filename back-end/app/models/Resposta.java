package models;

import java.util.*;
import javax.persistence.*;

import com.avaje.ebean.Model;
import play.data.format.*;
import play.data.validation.*;
import models.*;

@Entity
public class Resposta extends Model {

    @Id
    @Constraints.Min(10)
    public Long id;

    @Constraints.Required
    public String mensagem;
    
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    public Topico topico;

    @Constraints.Required
    public Date data;

    @ManyToOne
    public Usuario autor;

    public static Finder<Long, Resposta> find = new Finder<Long,Resposta>(Resposta.class);
}