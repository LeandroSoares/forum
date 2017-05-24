import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostModel } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {
  @Input() post: PostModel;
  @Output() edit = new EventEmitter<any>();
  isOwner=true;
  
  isFavorite=false;
  totalFavorites=9;
  date;
  isEditing=false;
  textEdit="";
  constructor() {
  	this.date = new Date().getTime();
   }

  ngOnInit() {
  	this.textEdit=this.post.mensagem;
  }
  deletePost(){
  	this.edit.emit({method:'delete',id:this.post.id});
  }
  putPost(){
  	this.edit.emit({method:'put',post:new PostModel(this.post.id,this.post.autor,this.textEdit)});
  	this.isEditing=false;
  }
}	
