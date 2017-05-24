import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthService {
    
    constructor() { }
    
    private loggedIn: Subject<any> = new Subject<any>();
    
    authenticate(usermail) {
        localStorage.setItem('currentUser', JSON.stringify({email: usermail}));
        this.loggedIn.next(!!localStorage.getItem('currentUser'));
        console.log(this.loggedIn);
    }
    
    get isLogged(): any{
        return this.loggedIn.asObservable();
    }
    
    logout() {
        localStorage.removeItem('currentUser');
        this.loggedIn.next(!!localStorage.getItem('currentUser'));
        console.log(this.loggedIn);
    }
}