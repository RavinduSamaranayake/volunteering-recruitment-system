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
  authenticateUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers});
     
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
}
