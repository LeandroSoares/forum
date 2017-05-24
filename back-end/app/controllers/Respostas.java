package controllers;

import play.mvc.*;
import play.libs.Json;
import play.data.DynamicForm;   //Para pegar GET/POST
import play.data.Form;          //Para pegar GET/POST

import java.util.*;

import javax.persistence.*;

import models.*;
import com.avaje.ebean.*;
import java.text.SimpleDateFormat;
import java.text.ParseException;


/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class Respostas extends Controller {

    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */


    //public Result register(String name , String email , String pass) {
    public Result addReply(Long id) {
        DynamicForm dynamicForm = Form.form().bindFromRequest();
        Map<String,String> resp = new HashMap<>();
        try {
            Resposta resposta = new Resposta();
            Usuario usuario = Usuario.find.byId(Long.parseLong(session("usuario.logado")));
            Topico topico = Topico.find.byId(id);
            resposta.autor = usuario;
            resposta.topico = topico;
            resposta.mensagem = dynamicForm.get("mensagem");
            resposta.save();
            resp.put("code","200");
            resp.put("message","Usuário registrado com sucesso");
        }catch(Exception e){
            resp.put("code","500");
            resp.put("message",e.getMessage());
        }
        //Retornando JSON
        return ok(Json.toJson(resp));
    }

    public Result getAll() {
        //Buscando Todos os Usuarios
        List<Topico> topicos = Topico.find
                            .fetch("autor")
                            .findList();
        return ok(Json.toJson(topicos));
    }
    //public Result login(String email, String pass) {
    public Result login() {
        
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



