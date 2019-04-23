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

    if (this.username === 'admin' && this.password === 'admin') {
     console.log('.............user name password match..........');
     // this.authService.storeUserData('admin_token', 'admin_details');
     this.router.navigate(['/admin/dashboard']);
    }
    else if (this.username === 'club') {
      //the user is club
      this.authService.authenticateUser(user).subscribe(data => {
        console.log('.......................', data, '..........................');
        if (data['success']) {
          this.authService.storeUserData(data['token'], data['user']);
          console.log('.......................suc.........................');
          this.router.navigate(['/club/clubdashboard']);
          // alert('login sucess');
        } else {
          this.router.navigate(['login']);
          alert('login fail , username or password is incorrect');
        }
      });
    } else {

    this.authService.authenticateUser(user).subscribe(data => {
      console.log('.......................', data, '..........................');
      if (data['success']) {
        this.authService.storeUserData(data['token'], data['user']);
        this.router.navigate(['/user/userdashboard']);
        // alert('login sucess');
      } else {
        this.router.navigate(['login']);
        alert('login fail , username or password is incorrect');
      }
    });
  }
}
}
