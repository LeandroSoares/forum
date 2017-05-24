import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response , Request, RequestMethod} from '@angular/http';

import { User } from './user.model';
 
const APIPATH='http://localhost:9000/';
const registerUrl = APIPATH + "usuario/register";
const loginUrl = APIPATH + "usuario/login";
const logoutUrl = APIPATH + "usuario/logout";

@Injectable()
export class UserService {

    constructor(private http: Http) { }
 
    register(user: User) {
        return this.http.post(registerUrl, user)
        .map((response: Response) => response.json());
    }
    
    login(logindata:{ email:string, pass:string }){

        return this.http.post(loginUrl, logindata);
    }

    logout() {
        this.http.get(logoutUrl);
    }
}