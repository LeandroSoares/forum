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
                resp.put("code","200");
                resp.put("message","Usuário logado com sucesso");    
            }else{
                resp.put("code","500");
                resp.put("message","Usuário ou senha incorretos");
            }
        }catch(Exception e){
            resp.put("code","500");
            resp.put("message",e.getMessage());
        }
        //Retornando JSON
        //Http.Cookie("usuario.logado", Long.toString(usuarios.get(0).id),3600,"",null,false,false);
        session("usuario.logado", Long.toString(usuarios.get(0).id));
        return ok(Json.toJson(resp));
    }
    public Result logout() {
        Map<String,String> resp = new HashMap<>();
        session().clear();
        resp.put("code","200");
        resp.put("message","Usuário deslogado com sucesso");    
        return ok(Json.toJson(resp));
    }

    public Result logado() {        
        Map<String,String> resp = new HashMap<>();
        resp.put("code","200");
        resp.put("usuario",session("usuario.logado"));    
        return ok(Json.toJson(resp));
    }

}



