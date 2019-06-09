import { Component, OnInit, AfterViewInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../myservices/auth.service';
import {OrganizationService} from '../../myservices/organization.service';
import { MatTableDataSource, throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import {EventService} from '../../myservices/event.service';
import { MessageService } from 'src/app/myservices/message.service';
import {Message } from '../../myservices/message';

@Component({
  selector: 'app-adminhomepg',
  templateUrl: './adminhomepg.component.html',
  styleUrls: [
  './adminhomepg.component.scss',
  'css/linearicons.css',
  'css/font-awesome.min.css',
  'css/bootstrap.css',
  'css/magnific-popup.css',
  'css/nice-select.css',
  'css/hexagons.min.css',
  'css/animate.min.css',
  'css/owl.carousel.css',
  'css/main.css'
]
})
export class AdminhomepgComponent implements OnInit {


  displayedColumns = [
    'name',
    'email',
    'contact',
    'address',
    'regNo',
    'options',
    'about'
  ];

  organizations: Organization[] = [];
  messages: Message[] = [];
  message: Message;
  name: string;
  email: string;
  phone: string;
  organization: string;
  massage: string;

  // tslint:disable-next-line:max-line-length
  constructor(public router: Router , private authService: AuthService, private organizationService: OrganizationService,
     private messageservice: MessageService , private eventservice: EventService) {


    // Create Events
    let organizationInstance: Organization;


    this.organizationService.getAllOrganizations().subscribe(data => {
      const entries = Object.entries(data);
      entries.forEach(instance => {
        organizationInstance = {
          name: instance[1].name,
          email: instance[1].email,
          contact: instance[1].contact,
          address: instance[1].address,
          regNo: instance[1].regNo,
          id: instance[1]._id,
          about: instance[1].about
        };
     this.organizations.push(organizationInstance);


      });
      return this.organizations;
    });
    // Assign the data to the data source for the table to rende

  }
  addMessage() {
    const newMessage = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      organization: this.organization,
      message: this.massage,

    };
    this.messageservice.addMessage(newMessage).subscribe(message: Message => {
      this.messages.push(message);
    });
  }
  // tslint:disable-next-line:use-life-cycle-interface
 ngOnInit() {

 }

}


export interface Organization {
  name: string;
  email: string;
  contact: string;
  address: string;
  regNo: string;
  id: string;
  about: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  type: string;
  attendees: string;
  rating: string;
  image: string;
  organization: string;
}

export interface Message {
  name: string;
  email: string;
  phone: string;
  organization: string;
  message: string;
}




