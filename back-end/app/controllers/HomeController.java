package controllers;

import play.mvc.*;
import play.libs.Json;

import java.util.*;

import javax.persistence.*;

import models.Usuario;
import com.avaje.ebean.*;
import java.text.SimpleDateFormat;
import java.text.ParseException;


/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class HomeController extends Controller {

    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */


    public Result index() {

        /*
        //Salvando um novo usuario
        Usuario usuario = new Usuario();
        usuario.nome = "Douglas";
        usuario.email = "douglas@ifsp.edu.br";
        usuario.senha = "teste123";
        usuario.save();
        //return ok(Json.toJson(usuario));
        */
        
        /*
        //Buscando Todos os Usuarios
        List<Usuario> usuarios = Usuario.find.all();
        return ok(Json.toJson(usuarios));
        */

        /*
        // Procurando um usuario pelo ID
        Usuario umusuario = Usuario.find.byId(1L);
        return ok(Json.toJson(umusuario));
        */
        
        /*
        // Deletar um usuario pelo ID
        Usuario.find.ref(1L).delete();
        */
        /*
        // Uma Busca mais Complexa :)
        List<Usuario> buscaUsuario = Usuario.find.where()
            .ilike("nome", "%doug%")
            .orderBy("id asc")
            .findPagedList(0, 25)
            .getList();
        return ok(Json.toJson(buscaUsuario));
        */

        return ok("Utilize o front-end");
        

    }

}



