import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  // this is use to share the selected event data pass to the viewdata component via event service
  $eventdetails = new EventEmitter(); // this is like value saving varible
  eventId: String;
  slctevent: any;

  constructor(private http: HttpClient) { }

addEvent(event) {
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  // post the user data to the server in json object
  return this.http.post('http://localhost:3000/events/addevent', event, {headers: headers});
}
getAllEvent() {
  // let headers = new HttpHeaders();
  return this.http.get('http://localhost:3000/events/allevents');
}

addSelectEvent(event) {
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  // post the user data to the server in json object
  return this.http.post('http://localhost:3000/events/addselectevent', event, {headers: headers});
}
getAllSelectEvent() {
  // let headers = new HttpHeaders();
  return this.http.get('http://localhost:3000/events/allselectevents');
}

setEvent(sevent) {
   this.slctevent = sevent;
   this.$eventdetails.emit(this.slctevent); // save the event value in this variable
}

getEvent() {
  return this.slctevent;
}

}
