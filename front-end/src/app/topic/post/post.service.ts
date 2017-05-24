import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { PostModel } from './post.model';

@Injectable()
export class PostService {

 posts = [];
 
constructor(private http: Http) {}
	favorite(id:number){
		// return this.http.post()
	}
	getPost(id:number=null):Promise<PostModel[]>{
	    if(id!=null){
			const filtered = this.posts.filter(topic=>topic.id==id);
			if(filtered.length>0)
				return Promise.resolve(filtered);
	    }

	    return Promise.resolve(this.posts);

	    // this.http.get("").map((response)=>{const data=response.json();return data;})
	}
  setPost(topico:number,mensagem:string): any {
  	console.log('post setPost:',topico,mensagem);
   		return this.http.post("http://localhost:9000/resposta/create",{topico:topico,mensagem:mensagem}).map((response: Response) => response.json());
   }
   deletePost(id:number){
	   	for(let i=this.posts.length-1; i>=0; i--) {
	    	if( this.posts[i].id == id) this.posts.splice(i,1);
		}
   }
   putPost(post:PostModel){
   	console.log(post)
	   for(let i=this.posts.length-1; i>=0; i--) {
	    	if( this.posts[i].id == post.id) {
	    		this.posts[i].mensagem=post.mensagem;
	    	}
		}
    }
}
