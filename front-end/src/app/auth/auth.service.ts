import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthService {
    
    private loggedIn: Subject<boolean> = new Subject<boolean>();
    
    constructor() { 
        this.loggedIn.next(false);
    }
    
    authenticate(id,email) {

        localStorage.setItem('currentUser', JSON.stringify({email:email,id:id}));
        this.loggedIn.next(!!localStorage.getItem('currentUser'));
    }
    getUserid(){
        let data = JSON.parse(localStorage.getItem('currentUser'));
        return data.userid;
    }
    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }
    checkLogged(){
        console.log(!!localStorage.getItem('currentUser'));
        this.loggedIn.next(!!localStorage.getItem('currentUser'));
    }
    logout() {
        localStorage.removeItem('currentUser');
        this.loggedIn.next(!!localStorage.getItem('currentUser'));
    }
}