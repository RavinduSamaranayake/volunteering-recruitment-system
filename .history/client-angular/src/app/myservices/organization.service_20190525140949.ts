import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  // this is use to share the selected event data pass to the viewdata component via event service
  // $eventdetails = new EventEmitter(); // this is like value saving varible
  // eventId: String;
  // slctevent: any;

  constructor(private http: HttpClient) {}

  addOrganization(org) {
    return this.http.post('http://localhost:3000/organizations/addorganization', org);
  }

  getAllOrganizations() {
    // let headers = new HttpHeaders();
    return this.http.get('http://localhost:3000/organizations/getallorganizations');
  }

  getAllOrganizationsCount() {
    // let headers = new HttpHeaders();
    return this.http.get('http://localhost:3000/organizations/organizationcount');
  }

  getOrganizationById(id: string) {
    // let headers = new HttpHeaders();
    return this.http.get('http://localhost:3000/organizations/getorganizationbyid/' + id);
  }

  getOrganizationEvents(id: string) {
    // let headers = new HttpHeaders();
    return this.http.get('http://localhost:3000/events/selecteventbyorg/' + id);
  }

  editAccessOrganization(org: any) {
    return this.http.put('http://localhost:3000/organizations/editaccess/', org);
  }

  // // after the user select a event.......................

  // setEvent(sevent) {
  //   this.slctevent = sevent;
  //   this.$eventdetails.emit(this.slctevent); // save the event value in this variable
  // }

  // addSelectEvent(event) {
  //   let headers = new HttpHeaders();
  //   headers.append("Content-Type", "application/json");
  //   // post the user data to the server in json object
  //   return this.http.post("http://localhost:3000/events/addselected", event, {
  //     headers: headers
  //   });
  // }

  // getAllSelectEvent(userid) {
  //   // let headers = new HttpHeaders();
  //   return this.http.get(
  //     "http://localhost:3000/events/allselectevents/" + userid
  //   );
  // }

  // getAllUpcommingEvent(userid) {
  //   // let headers = new HttpHeaders();
  //   return this.http.get(
  //     "http://localhost:3000/events/allselect/upcomming/" + userid
  //   );
  // }

  // getAllEventHistory(userid) {
  //   // let headers = new HttpHeaders();
  //   return this.http.get(
  //     "http://localhost:3000/events/allselect/history/" + userid
  //   );
  // }
}
