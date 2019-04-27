import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

addEvent(event) {
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  // post the user data to the server in json object
  return this.http.post('http://localhost:3000/events/addevent', event, {headers: headers});
}
getAllEvent() {
  let headers = new HttpHeaders();
  return this.http.post('http://localhost:3000/users/authenticate', {headers: headers});
}
}