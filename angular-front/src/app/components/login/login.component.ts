import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage:NgFlashMessageService,
    
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      console.log(".......................",data,"..........................");
      if(data['success']){
        this.authService.storeUserData(data['token'], data['user']);
         
        this.flashMessage.showFlashMessage({messages: ["You are now logged in"],  dismissible: true,timeout: 5000,type:'success' });

        
        this.router.navigate(['dashboard']);
      } else {
        this.flashMessage.showFlashMessage({messages: [data['msg']],  dismissible: true,timeout: 5000,type:'danger' });
        this.router.navigate(['login']);
      }
    });
  }

}
