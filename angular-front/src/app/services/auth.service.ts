import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

 


@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:HttpClient) { }

  registerUser(user){
    let headers= new HttpHeaders();
    headers.append('Content-Type','application/json');
    //post the user data to the server in json object 
    return this.http.post('http://localhost:3000/users/register', user,{headers: headers});
      
  }
}
