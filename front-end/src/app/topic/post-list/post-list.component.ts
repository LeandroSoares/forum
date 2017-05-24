import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { PostSubmitComponent } from '../post-submit/post-submit.component';
import { PostService } from '../post/post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
	posts=[];
	constructor(private postService: PostService) { }

	ngOnInit() {
		this.postService.getPost().then(posts => this.posts = posts);
	}
	onEdit(edit){
		switch (edit.method) {

			case "delete":
				this.postService.deletePost(edit.id);
				break;
			case "put":
				this.postService.putPost(edit.post);
				break;
			default:
				// code...
				break;
		}
		
	}
}
