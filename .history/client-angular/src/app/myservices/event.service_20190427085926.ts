import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }
}

addEvent() {
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