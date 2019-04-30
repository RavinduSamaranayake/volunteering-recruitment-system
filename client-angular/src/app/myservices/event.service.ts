import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import{ Event } from './event.model';


@Injectable({
  providedIn: 'root'
})
export class EventService {

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
