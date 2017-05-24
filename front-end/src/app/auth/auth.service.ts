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
    
    authenticate(usermail) {
        localStorage.setItem('currentUser', JSON.stringify({email: usermail}));
        this.loggedIn.next(!!localStorage.getItem('currentUser'));
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