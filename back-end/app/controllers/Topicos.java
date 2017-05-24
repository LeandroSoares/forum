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
public class Topicos extends Controller {

    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */


    //public Result register(String name , String email , String pass) {
    public Result getTopic(Long id) {
        //Buscando Todos os Usuarios
        // List<Topico> topicos = Topico.find
        //                     .fetch("autor")
        //                     .fetch("respostas")
        //                     .where().eq("id",id)
        //                     .findList();
        // return ok(Json.toJson(topicos));
        // 
         List<Topico> topicos = Topico.find
                            .fetch("autor")
                            .fetch("respostas")
                            .where().eq("id",id)
                            .findList();
        List<Map> topicosFiltrados = new ArrayList<>();

        for(Topico topic : topicos){
            Map<String, Object> topicoF = new HashMap<>();            
            topicoF.put("id",topic.id);
            topicoF.put("titulo",topic.titulo);
            topicoF.put("autor",this.parseAutor(topic.autor));
            topicosFiltrados.add(topicoF);
             List<Map> resps = this.parseRespostas(topic.respostas);
            
            topicoF.put("respostas",resps);
        }

        return ok(Json.toJson(topicosFiltrados));
    }

    private  List<Map> parseRespostas(List<Resposta> respostas ){
         List<Map> resps = new ArrayList<>();
        for(Resposta resposta:respostas){
            Map<String, Object> resp = new HashMap<>(); 
            resp.put("id",resposta.id); 
            resp.put("mensagem",resposta.mensagem);
            resp.put("autor",this.parseAutor(resposta.autor));
            resps.add(resp);
        }
        return resps;
    }

    private Map<String, Object> parseAutor(Usuario autor){
        Map<String, Object> resp = new HashMap<>(); 
        resp.put("id",autor.id); 
        resp.put("nome",autor.nome);
        return resp;
    }


    public Result createTopic() {
        DynamicForm dynamicForm = Form.form().bindFromRequest();
        Map<String,String> resp = new HashMap<>();
        try{
            Topico topico = new Topico();
            topico.titulo = dynamicForm.get("titulo");
            topico.autor = Usuario.find.byId(Long.parseLong(dynamicForm.get("userid")));
            topico.save();
            resp.put("code","200");
            resp.put("message.topico","Topico registrado com sucesso");
            Resposta resposta = new Resposta();
            resposta.mensagem = dynamicForm.get("titulo");
            resposta.topico = topico;
            resposta.autor = Usuario.find.byId(Long.parseLong(dynamicForm.get("userid")));
            resposta.data = new Date();
            resp.put("message","Topico registrado com sucesso");
            }catch(Exception e){
            resp.put("code","500");
            resp.put("message",e.getMessage());
        }
        //Retornando JSON
        return ok(Json.toJson(resp));
    }

public Result addReply() {
        DynamicForm dynamicForm = Form.form().bindFromRequest();
        Map<String,String> resp = new HashMap<>();
        try{
            Resposta resposta = new Resposta();
            resposta.mensagem = dynamicForm.get("resposta");
            resposta.topico = Topico.find.byId(Long.parseLong(dynamicForm.get("topico")));
            resposta.autor = Usuario.find.byId(Long.parseLong(dynamicForm.get("userid")));
            resposta.data = new Date();
            resposta.save();
            resp.put("message","Resposta registrado com sucesso");
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
        List<Map> topicosFiltrados = new ArrayList<>();

        for(Topico topic : topicos){
            Map<String, Object> topicoF = new HashMap<>();            
            topicoF.put("id",topic.id);
            topicoF.put("titulo",topic.titulo);
            topicoF.put("autor",topic.autor);
            topicosFiltrados.add(topicoF);
        }


        return ok(Json.toJson(topicosFiltrados));
    }
    
}


