import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from './topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
topic:{id:number};
  constructor(private route:ActivatedRoute, private topicService:TopicService) { }
  
  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    
    this.topic=this.topicService.getTopic(this.route.snapshot.params['id']);
    console.log(this.topic);
  }


}
