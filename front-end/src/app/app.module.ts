import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { FilterPipe } from './filters/filter.pipe';
import { ResumePipe } from './filters/resume.pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopicsComponent } from './topics/topics.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicComponent } from './topic/topic.component';

import { TopicService } from './topic/topic.service';
import { TopicListItemComponent } from './topic-list/topic-list-item/topic-list-item.component';

import { PostService } from './topic/post/post.service';
import { PostListComponent } from './topic/post-list/post-list.component';
import { PostComponent } from './topic/post/post.component';
import { PostSubmitComponent } from './topic/post-submit/post-submit.component';
import { AlertComponent } from './alert/alert.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertService } from './alert/alert.service';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { TopicEditComponent } from './topic-edit/topic-edit.component';

const appRoutes : Routes=[
	{ path: '', component: TopicsComponent },
	{ path: 'topic/:id', component: TopicComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'novotopico', component: TopicEditComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		TopicsComponent,
		TopicListComponent,
		TopicComponent,
		FilterPipe,
		ResumePipe,
		TopicListItemComponent,
		PostListComponent,
		PostComponent,
		PostSubmitComponent,
		AlertComponent,
		LoginComponent,
		RegisterComponent,
		TopicEditComponent
  	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(appRoutes)
	],
		providers: [TopicService, PostService, AlertService, AuthService, UserService],
		bootstrap: [AppComponent]
	})
export class AppModule { }
