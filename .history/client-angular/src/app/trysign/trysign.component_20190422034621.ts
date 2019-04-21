import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../myservices/validate.service';
import { AuthService } from '../myservices/auth.service';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-trysign',
  templateUrl: './trysign.component.html',
  styleUrls: ['./trysign.component.scss'],
  animations: [routerTransition()]
})
export class TrysignComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;
  rpassword: String;

  constructor(
      private validateService: ValidateService, 
      private authService: AuthService,
      private router: Router
  ) {}

  ngOnInit() {}

  onRegisterSubmit() {
      const user = {
        name: this.name,
        email: this.email,
        username: this.username,
        password: this.password,
        rpassword: this.rpassword
      };

  console.log('...user..is..',user.name); 
       // Required Fields
   if (!this.validateService.validateRegister(user)){
      console.log('...invalid user....');
      return false;
    }
    // Validate Email
    if (!this.validateService.validateEmail(user.email)){
      console.log('...invalid email....');
      return false;
    }
    // Register user with server
    // call the auth service and pass the user to registerUser function
    // get the responce json object from server using subscribe method. the data isa responce json
    this.authService.registerUser(user).subscribe(data => {
      console.log('...............', data['msg'], '.........', data, '..........'); // check the responce json 
      if (data['success']) { // check the responce json value's success key and navigate login page
        this.router.navigate(['']);
        console.log('...registration sucess....');
      } else {
        this.router.navigate(['signup']);
        console.log('...registration fail....');
      }
    });

  }

}


