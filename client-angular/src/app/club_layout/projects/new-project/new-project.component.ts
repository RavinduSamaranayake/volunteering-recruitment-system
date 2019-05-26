import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { EventService } from 'src/app/myservices/event.service';
import { mimeType } from "./mime-type.validator";
import { AuthService } from 'src/app/myservices/auth.service';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Event } from '../events.model';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  form: FormGroup;
  isValid: boolean;
  imagepreview: string = '';
  mytime: Date = new Date("2015-03-25T03:30:00Z");
  private mode = 'create'
  private eventId: string;
  Event: Event;
  bsValue = new Date();
  id: any
  minDate: Date;
  modalRef: BsModalRef;
  alerts: any[] = [{
  }];

  constructor(private eventService: EventService,
    private authservice: AuthService,
    public route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService,
  ) {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
      image: new FormControl(null, { validators: [Validators.required], asyncValidators: [mimeType] }),
      date: new FormControl(new Date(), { validators: [Validators.required] }),
      type: new FormControl(null, { validators: [Validators.required] }),
      description: new FormControl(null, { validators: [Validators.required] }),

      // image:new FormControl(null,{validators:[Validators.required],asyncValidators:[mimeType]})
    })
    const data = localStorage.getItem('user');
    const value = JSON.parse(data);
    this.id = value.id
    // console.log(this.id);

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('eventId')) {
        this.mode = 'edit';
        console.log(this.mode);

        this.eventId = paramMap.get('eventId');
        console.log(paramMap.get('eventId'))
        // this.isLoading = true;
        this.eventService.getEventByID(this.eventId).subscribe(eventData => {
          // this.isLoading = false;
          console.log(eventData);
          let event: any = eventData;
          this.Event = {
            id: event._id,
            title: event.title,
            description: event.description,
            image: event.image,
            date: event.date,
            time: event.time,
            type: event.type,
            organization: event.organization
          };
          console.log(this.Event);
          this.imagepreview = (this.Event.image).toString();

          this.form.setValue({
            title: this.Event.title,
            description: this.Event.description,
            image: this.Event.image,
            date: this.Event.date,
            type: this.Event.type,

          }



          );


        });
      } else {
        this.mode = 'create';
        this.eventId = null;
      }
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  onImagepicked(event: any) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get('image').updateValueAndValidity();
    console.log(this.form.get('image'));
    const reader = new FileReader();
    reader.onload = () => {
      this.imagepreview = reader.result as string;

    };
    reader.readAsDataURL(file)
  }

  // adding alert 
  addalert(type, msg): void {
    this.alerts.push({
      type: type,
      msg: msg,
      timeout: 3000
    });
  }


  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  OnSaveEvent() {
    console.log("fired");
    if (this.form.invalid) {
      return;
    }




    console.log((this.mytime).toLocaleTimeString().replace(/:\d{2}\s/, ' '));

    if (this.mode == 'create') {
      const event: any = {
        title: this.form.value.title,
        image: this.form.value.image,
        date: (this.form.value.date).toISOString(),
        time: (this.mytime).toLocaleTimeString(),
        type: this.form.value.type,
        attendees: null,
        rating: null,
        organization: this.id,
        description: this.form.value.description
      }
      this.eventService.addEvent(event)
      this.addalert("success", "you have successfully added an event");
      this.form.reset();
    }
    if (this.mode == 'edit') {
      let id = this.eventId;

      const eventupdate: any = {
        title: this.form.value.title,
        image: this.form.value.image,
        date: (this.form.value.date).substring(0, 10),
        time: (this.mytime).toLocaleTimeString(),
        type: this.form.value.type,
        attendees: null,
        rating: null,
        organization: this.id,
        description: this.form.value.description
      }
      console.log(eventupdate)
      this.eventService.updateEvent(id, eventupdate);
      this.addalert("info", "you have successfully updated");
      //  this.form.reset();
      //  this.router.navigate(['/club/']);

    }

    this.modalRef.hide()
  }






}
