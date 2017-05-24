import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from './topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
topic:{id:number}=null;
  constructor(private route:ActivatedRoute, private topicService:TopicService) { }
  
  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.topicService.getTopic(this.route.snapshot.params['id'])
    	.subscribe(
    		(data)=>{this.topic=data[0];
          console.log(data);
        }
    		);
    
  }


}
