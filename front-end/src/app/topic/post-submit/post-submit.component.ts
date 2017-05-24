import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-post-submit',
  templateUrl: './post-submit.component.html',
  styleUrls: ['./post-submit.component.css']
})
export class PostSubmitComponent implements OnInit {
  
  @Output("save") savecall:EventEmitter<string> = new EventEmitter<string>();
  
  postData={owner:"Me",text:""};
  
  constructor(private postService: PostService) { }
  
  ngOnInit() {}

  save(postData){
    this.savecall.emit(postData.text);
  	this.postData={owner:"Me",text:""};
  }
}
