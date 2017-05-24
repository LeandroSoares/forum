import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-topic-list-item]',
  templateUrl: './topic-list-item.component.html',
  styleUrls: ['./topic-list-item.component.css']
})
export class TopicListItemComponent implements OnInit {
@Input() topic;
  constructor() { }
  ngOnInit() {}
}
