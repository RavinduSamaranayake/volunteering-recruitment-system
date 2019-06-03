import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { EventService } from 'src/app/myservices/event.service';

@Component({
  selector: 'app-club-dashbord',
  templateUrl: './club-dashbord.component.html',
  styleUrls: ['./club-dashbord.component.scss'],
  animations: [routerTransition()]

})
export class ClubDashbordComponent implements OnInit {
  public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    id:any;
    noOfEvents:any;
    events: any = [];
    eventsUnchanged: any = [];

    constructor(private eventservice:EventService) {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'First slide label',
                text:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() {
        const data = localStorage.getItem('user');
        const value = JSON.parse(data);
        this.id = value.id
        this.eventservice.getEventbyOrganization(this.id).subscribe(data => {
          this.eventsUnchanged = data;
          this.events = this.eventsUnchanged.map(item => ({
            _id: item._id,
            title: item.title,
            description: item.description,
            image: item.image,
            date: (item.date).substring(0, 10),
            time: (item.time).replace(/:\d{2}\s/, ' '),
            type: item.type,
            organization: item.organization
          }))
        this.noOfEvents=Object.keys(data).length;
    
        });
      
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}

