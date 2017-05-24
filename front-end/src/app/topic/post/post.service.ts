import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { PostModel } from './post.model';

@Injectable()
export class PostService {

  posts = [
  	new PostModel( 1, "Chico", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
  	new PostModel( 2, "Marcos", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
  	new PostModel( 3, "Jorge", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
  ];
constructor(private http: Http) {}
	getPost(id:number=null):Promise<PostModel[]>{
	    if(id!=null){
			const filtered = this.posts.filter(topic=>topic.id==id);
			if(filtered.length>0)
				return Promise.resolve(filtered);
	    }

	    return Promise.resolve(this.posts);

	    // this.http.get("").map((response)=>{const data=response.json();return data;})
	}
  setPost(post:{owner:string, text:string}): void{
   		let p :any = post;
   		p.id=this.posts.length;
   		this.posts.push(p);

   		console.log(this.posts);
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
	    		this.posts[i].text=post.text;
	    	}
		}
    }
}
