import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { EventService } from 'src/app/myservices/event.service';
import {mimeType} from "./mime-type.validator";
import { AuthService } from 'src/app/myservices/auth.service';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';


@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  form: FormGroup;
  isValid: boolean;
  imagepreview:string='';
  mytime: Date | undefined = new Date();
  bsValue = new Date();
  id:any
  minDate: Date;
  alerts: any[] = [{
  }];

  constructor(private eventService:EventService,private authservice:AuthService) { 
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      image: new FormControl(null,{validators:[Validators.required],asyncValidators:[mimeType]}),
      date: new FormControl(new Date(), { validators: [Validators.required] }),
      type: new FormControl(null, { validators: [Validators.required] }),
      description: new FormControl(null, { validators: [Validators.required] }),
      
      // image:new FormControl(null,{validators:[Validators.required],asyncValidators:[mimeType]})
  })
  const data = localStorage.getItem('user');
  const value = JSON.parse(data); 
  this.id=value.id
  console.log(this.id);
  }
  

  onImagepicked(event:Event){
    const file=(event.target as HTMLInputElement).files[0];
    this.form.patchValue({image:file});
    this.form.get('image').updateValueAndValidity();

    const reader=new FileReader();
    reader.onload = () =>{
        this.imagepreview=reader.result as string;

    };
    reader.readAsDataURL(file)
}

// adding alert success
addSuccess(): void {
  this.alerts.push({
    type: 'success',
    msg: `You have successfully added an Event `,
    timeout: 3000
  });
}


onClosed(dismissedAlert: AlertComponent): void {
  this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
}

OnSaveEvent() {
  if (this.form.invalid) {
      return;
  }
  const event:any={
      title:this.form.value.title,
      image:this.form.value.image,
      date:(this.form.value.date).toLocaleDateString(),
      time:(this.mytime).toLocaleTimeString(),
      type:this.form.value.type,
      attendees:null,
      rating:null,
      organization:this.id,
      description:this.form.value.description
  }

  console.log(event);
        this.eventService.addEvent(event)
  this.addSuccess();
       this.form.reset();
       
  } 

 




}
