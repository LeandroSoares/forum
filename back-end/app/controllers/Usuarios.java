package controllers;

import play.mvc.*;
import play.libs.Json;
import play.data.DynamicForm;   //Para pegar GET/POST
import play.data.Form;          //Para pegar GET/POST

import java.util.*;

import javax.persistence.*;

import models.Usuario;
import com.avaje.ebean.*;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import play.api.mvc.Cookie;
import play.api.mvc.DiscardingCookie;
import play.api.http.HeaderNames;
import play.mvc.Http.Response;
import play.mvc.Http.Context;
import play.mvc.Http.Request;
import play.mvc.Http.Session;
import play.mvc.Result;
import play.mvc.Security;
import play.mvc.*;


/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class Usuarios extends Controller {

    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */


    //public Result register(String name , String email , String pass) {
    public Result register() {
        //Pegando os parametros enviados
        DynamicForm dynamicForm = Form.form().bindFromRequest();

        //Salvando um novo usuario
        Map<String,String> resp = new HashMap<>();
        try {
            Usuario usuario = new Usuario();
            usuario.nome = dynamicForm.get("name");
            usuario.email = dynamicForm.get("email");
            usuario.senha = dynamicForm.get("pass");
            usuario.save();
            resp.put("code","200");
            resp.put("message","Usuário registrado com sucesso");
        }catch(Exception e){
            resp.put("code","500");
            resp.put("message",e.getMessage());
        }
        //Retornando JSON
        return ok(Json.toJson(resp));
    }
    //public Result login(String email, String pass) {
    public Result login() {
        //Pegando os parametros enviados
        DynamicForm dynamicForm = Form.form().bindFromRequest();

        //Salvando um novo usuario
        Map<String,String> resp = new HashMap<>();
        List<Usuario> usuarios = null;
        try {
            usuarios = Usuario.find.where()
            .eq("email", dynamicForm.get("email"))
            .eq("senha", dynamicForm.get("pass"))
            .findList();
            if (usuarios.size() == 1) {
                //session().clear();
                session("usuario.logado", Long.toString(usuarios.get(0).id));
                System.out.println(session("usuario.logado"));
                //response().setCookie("usuario.logado", Long.toString(usuarios.get(0).id));
                response().setCookie(Http.Cookie.builder("usuario.logado", Long.toString(usuarios.get(0).id)).withSecure(ctx().request().secure()).build());
                resp.put("code","200");
                resp.put("message","Usuário logado com sucesso");    
                resp.put("userlogado", Long.toString(usuarios.get(0).id));
            }else{
                resp.put("code","500");
                resp.put("message","Usuário ou senha incorretos");
            }
        }catch(Exception e){
            resp.put("code","500");
            resp.put("message",e.getMessage());
        }
        //Retornando JSON        
        return ok(Json.toJson(resp));
    }
    public Result logout() {
        Map<String,String> resp = new HashMap<>();
        session().clear();
        response().discardCookie("usuario.logado");
        resp.put("code","200");
        resp.put("message","Usuário deslogado com sucesso");    
        return ok(Json.toJson(resp));
    }


    public Result logado() {        
        resp.put("code","200");
        resp.put("usuario",session().get("usuario.logado"));
        return ok(Json.toJson(resp));
    }

}



