import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient ) { }


  addMessage(newMessage) {
    return this.http.post('http://localhost:3000/message/addmessage', newMessage);
  }

  getAllMessages() {
    return this.http.get('http://localhost:3000/message/messages');
  }
}
