import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TopicService {
  topics = [
    {id:1, name:"Carros", description:"Conselhos para quem gosta de carros"},
    {id:2, name:"Bicicletas", description:"Conselhos para quem gosta de Bicicletas"},
    {id:3, name:"Barcos", description:"Para quem gosta de Barcos"}
  ];
  constructor(private http: Http) {}
  
  getTopic(id:number):any{
    
    return this.http.get("http://localhost:9000/topico/"+id).map((response: Response) => response.json());
  }
  getAll():any{
    return this.http.get("http://localhost:9000/topicos").map((response: Response) => response.json());

  }
  
  create(topic:{titulo:string, descricao:string}):any{
    let data = JSON.parse(localStorage.getItem('currentUser'));
    
    let datacreate={titulo:topic.titulo, descricao:topic.descricao, userid:data.id};
    console.log(datacreate);
    return this.http.post("http://localhost:9000/topico/create",datacreate).map((response: Response) => response.json());
  } 

  addResposta(resp:{topico:any,resposta:any}):any{
     return this.http.post("http://localhost:9000/topico/addresposta",resp).map((response: Response) => response.json());
  }
}
