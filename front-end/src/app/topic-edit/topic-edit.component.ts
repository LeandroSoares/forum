import { Component, OnInit } from '@angular/core';
import { Topic } from '../topic/topic.model';
import { TopicService } from '../topic/topic.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic-edit',
  templateUrl: './topic-edit.component.html',
  styleUrls: ['./topic-edit.component.less']
})
export class TopicEditComponent implements OnInit {
	topic={titulo:"", descricao:""};
	constructor(
		private route: ActivatedRoute,
        private router: Router,
		private topicService : TopicService) { }

	ngOnInit() {
		// this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}
	salvar(){
		this.topicService.create(this.topic).subscribe((data=>{
			console.log(data); 
			let id = data['topicid']||1;
			this.router.navigate(["/","topic",id]);
		}));
	}

}
