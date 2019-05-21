import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  // this is use to share the selected event data pass to the viewdata component via event service
  $eventdetails = new EventEmitter(); // this is like value saving varible
  eventId: String;
  slctevent: any;

  constructor(private http: HttpClient) {}


addEvent(event) {
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  const eventData=new FormData();
  eventData.append("title",event.title);
  eventData.append("description",event.description);
  eventData.append("date",event.date);
  eventData.append("time",event.time);
  eventData.append("type",event.type);
  eventData.append("rating",event.rating);
  eventData.append("attendees",event.attendees);
  eventData.append("organization",event.organization);
  eventData.append("image",event.image,event.title);
  // post the user data to the server in json object
  console.log(eventData);
  this.http.post<{message:string,event:any}>('http://localhost:3000/events/addevent',eventData,{headers: headers})
  .subscribe((responseData)=>{
    console.log(responseData)
      // this.router.navigate(["/"])
  });
  // return this.http.post('http://localhost:3000/events/addevent', event, {headers: headers});
}
getAllEvent() {
  // let headers = new HttpHeaders();
  return this.http.get('http://localhost:3000/events/allevents');
}





  setEvent(sevent) {
    this.slctevent = sevent;
    this.$eventdetails.emit(this.slctevent); // save the event value in this variable
  }

  addSelectEvent(event) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // post the user data to the server in json object
    return this.http.post('http://localhost:3000/events/addselected', event, {
      headers: headers
    });
  }

  getAllSelectEvent(userid) {
    // let headers = new HttpHeaders();
    return this.http.get(
      'http://localhost:3000/events/allselectevents/' + userid
    );
  }

  getAllUpcommingEvent(userid) {
    // let headers = new HttpHeaders();
    return this.http.get(
      'http://localhost:3000/events/allselect/upcomming/' + userid
    );
  }

  getAllEventHistory(userid) {
    // let headers = new HttpHeaders();
    return this.http.get(
      'http://localhost:3000/events/allselect/history/' + userid
    );
  }

  getEventByID(eventID){
    return this.http.get(
      'http://localhost:3000/events/geteventbyid/' + eventID
    );
  }

}

