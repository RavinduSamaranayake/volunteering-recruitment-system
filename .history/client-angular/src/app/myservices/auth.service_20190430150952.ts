import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // post the user data to the server in json object
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers});
  }
  authenticateUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // tslint:disable-next-line:max-line-length
    // post the user data to the server in json object and the authenticate function which is in server check the username and password in server
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers});
  }
  // store user data in local storage
  storeUserData(token, user) {
    localStorage.setItem('id_token', token); // the data has to be a string.Convert a JavaScript object into a string with JSON.stringify().
    localStorage.setItem('user', JSON.stringify(user)); // local storage can store only styings. can't store json objects
    this.authToken = token;                             // see this local storage in application console in chrome
    this.user = user;
  }
  // get data to profile page
  getProfile() {
    let headers = new HttpHeaders();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('users/profile', {headers: headers});
  }

  // change profile
  changeProfile(user , userid) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // post the user data to the server in json object
    return this.http.put('http://localhost:3000/users/changepro/' + userid, user, {headers: headers});
  }

  // change profile
  changeProfi(user , userid) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // post the user data to the server in json object
    return this.http.put('http://localhost:3000/users/changepro/' + userid, user, {headers: headers});
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    // to check the user is login or not using token..
    const helper = new JwtHelperService();
    const isExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
    return !isExpired;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear(); // clear storagedata
  }

  refreshStore(user){
    localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(user));
  }
}
