import { Component, OnInit } from '@angular/core';
import { Topic } from '../topic/topic.model';
import { AlertService } from '../alert/alert.service';
@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  
  query="";
  constructor(private alertserv: AlertService) { }

  ngOnInit() {}

}
