import { Component, OnInit } from '@angular/core';
import { Topic } from '../topic/topic.model';
import { TopicService } from '../topic/topic.service';
@Component({
  selector: 'app-topic-edit',
  templateUrl: './topic-edit.component.html',
  styleUrls: ['./topic-edit.component.less']
})
export class TopicEditComponent implements OnInit {
	topic={titulo:"", descricao:""};
	constructor(private topicService : TopicService) { }

	ngOnInit() {
	}
	salvar(){
		this.topicService.create(this.topic).subscribe((data=>{
			console.log(data); 
		}));
	}

}
