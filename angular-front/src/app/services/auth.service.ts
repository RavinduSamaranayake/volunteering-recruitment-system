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
    //post the user data to the server in json object and the authenticate function which is in server check the username and password in server
    return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers});
     
  }
  
  //store user data in local storage
  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user)); //local storage can store only styings. can't store json objects 
    this.authToken = token;                             //see this local storage in application console in chrome
    this.user = user;
  }
  
  //get data to profile page
  getProfile() {
    let headers = new HttpHeaders();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('users/profile', {headers: headers})
       
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }


 
  logout(){
    
    this.authToken = null;
    this.user = null;
    localStorage.clear(); //clear storagedata
  }
}
