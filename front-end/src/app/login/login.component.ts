import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
import { AlertService } from '../alert/alert.service';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {

  	model: {email:string,pass:string} = {email:"",pass:""};
	loading = false;
    returnUrl: string;
 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
		private authService: AuthService,
        private alertService: AlertService) { }
 
    ngOnInit() {
        // reset login status
        this.userService.logout();
        this.authService.logout();
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
 
    login() {
        this.loading = true;
		this.userService.login(this.model)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
					this.authService.authenticate(this.model.email);
                },
                error => {
                    this.alertService.error("Erro de login...");
                    this.loading = false;
                });
    }

}
