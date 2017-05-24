import { Component, OnInit } from '@angular/core';
// import { TopicService } from '../topic.service';
@Component({
  selector: 'app-topic-edit',
  templateUrl: './topic-edit.component.html',
  styleUrls: ['./topic-edit.component.less']
})
export class TopicEditComponent implements OnInit {
	topic={name:"",description:""};
	// constructor(private topicService:TopicService) { }
	constructor() { }

	ngOnInit() {
	}
	salvar(){
		// this.topicService.create(this.topic).subscribe((data=>{console.log(data); }));
	}

}
