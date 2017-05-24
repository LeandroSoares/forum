import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../alert/alert.service';

import { UserService } from '../user/user.service';
import { User } from '../user/user.model';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent {

    user: User = new User();
    loading = false;
 
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }
 
    register() {
        this.loading = true;
        this.userService.register(this.user).subscribe(
            data=>{
                this.alertService.success("Registrou");
                this.router.navigate(['/login']);
            },
            error=>{
                this.alertService.error("Erro na hora de registrar, tenten novamente.");
                this.loading = false;
            });
        
    }

}
