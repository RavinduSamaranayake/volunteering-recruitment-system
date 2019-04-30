import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import{ Event } from './event.model';

=======
import {HttpClient, HttpHeaders} from '@angular/common/http';
>>>>>>> bc1f72ce0858aabd831f5fd8c1f8b45d3acb3ff4

@Injectable({
  providedIn: 'root'
})
export class EventService {

<<<<<<< HEAD
  private event:Event[]=[];
  constructor(private http:HttpClient,private router:Router) { }

  addevent( title:string,
    content:string,
    date:string,
    time:string,
    imagePath:string,
    descrition:string,
){
    const eventData=new FormData();
    eventData.append("title",title);
    eventData.append("content",content);
    eventData.append("date",date);
    eventData.append("time",time);
    eventData.append("description",descrition);
    eventData.append("image",imagePath,title);
     this.http.post<{message:string,event:any}>('http://localhost:3000/api/events/newEvent',eventData)
         .subscribe((responseData)=>{
             this.router.navigate(["/club"])
         });

//  }
        }
      }
=======
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
}
>>>>>>> bc1f72ce0858aabd831f5fd8c1f8b45d3acb3ff4
