import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService, 
             private flashMessage:NgFlashMessageService,
             private authService:AuthService,
             private router: Router
             ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // Required Fields
    if(!this.validateService.validateRegister(user)){
      // this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      this.flashMessage.showFlashMessage({
        // Array of messages each will be displayed in new line
        messages: ["Please fill in all fields"], 
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true, 
        // Time after which the flash disappears defaults to 2000ms
        timeout: 3000,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'danger'
      });
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.showFlashMessage({messages: ["not valid email"],  dismissible: true,timeout: 3000,type: 'danger' });
      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if(data){
         
        this.flashMessage.showFlashMessage({messages: ["You are now registered and can log in"],  dismissible: true,timeout: 3000,type:'success' });
        this.router.navigate(['/login']);
      } else {
        
        this.flashMessage.showFlashMessage({messages: ["Some thing went wrong"],  dismissible: true,timeout: 3000,type: 'danger' });
        this.router.navigate(['/register']);
      }
    });
  }

}
