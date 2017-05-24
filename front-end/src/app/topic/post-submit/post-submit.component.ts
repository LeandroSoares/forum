import { Component, OnInit } from '@angular/core';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-post-submit',
  templateUrl: './post-submit.component.html',
  styleUrls: ['./post-submit.component.css']
})
export class PostSubmitComponent implements OnInit {

  constructor(private postService: PostService) { }
  postData={owner:"Me",text:""};
  ngOnInit() {
  }
  save(postData){
  	this.postService.setPost(postData);
  	this.postData={owner:"Me",text:""};
  }
}
