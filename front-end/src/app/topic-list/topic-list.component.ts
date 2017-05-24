import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../topic/topic.model';
import { TopicService } from '../topic/topic.service';
import { TopicListItemComponent } from './topic-list-item/topic-list-item.component';
@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  topics=[];
  @Input() query="";

  constructor(private topicService:TopicService) { 
  	this.topicService.getAll().subscribe((data=>{
    	this.topics=data;
    }));
  }

  ngOnInit() {
   
  }

}
