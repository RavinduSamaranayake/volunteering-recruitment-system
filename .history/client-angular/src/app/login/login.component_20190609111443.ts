import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {AuthService} from '../myservices/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onLoggedin() {
    const user = {
      username: this.username,
      password: this.password,
    };



    if(this.username === 'admin'){
      this.router.navigate(['/dashboard']);
    } else

    this.authService.authenticateUser(user).subscribe(data => {
      console.log('.......................', data, '..........................');
      if (data['success']) {
        this.authService.storeUserData(data['token'], data['user']);
        this.router.navigate(['/userdashboard']);
        // alert('login sucess');
      } else if(!data['success']) {
        this.authService.authenticateOrg(user).subscribe(data => {
          console.log('.......................', data, '..........................');
          if (data['successOrg']) {
            this.authService.storeUserData(data['token'], data['organization']);
            this.router.navigate(['/club']);
            // alert('login sucess');
          } else { 
            this.router.navigate(['login']);
            alert('login fail , username or Organizationemail or password is incorrect');
          }
        });
      }
    });

}
}
