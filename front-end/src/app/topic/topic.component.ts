import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { TopicService } from './topic.service';
import { PostSubmitComponent } from './post-submit/post-submit.component';
@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  
  logged=false;
  
  topic:{id:number}=null;
  
  constructor(private route:ActivatedRoute, 
              private topicService:TopicService, 
              private router:Router) { 

    router.events
          .subscribe((val) => {
            this.logged=!!localStorage.getItem('currentUser');
          });
  }
  onsave(text){
    this.topicService.addResposta({topico:this.topic.id, resposta:text}).subscribe((d)=>console.log(d));
    this.loadRespostas();
  }
  ngOnInit() {
    this.loadRespostas();
  }

  loadRespostas(){
    this.topicService.getTopic(this.route.snapshot.params['id'])
      .subscribe(
        (data)=>{this.topic=data[0];
          console.log(data);
        }
        );
  }


}
