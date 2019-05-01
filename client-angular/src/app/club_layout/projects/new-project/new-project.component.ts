import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { EventService } from 'src/app/myservices/event.service';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

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

  constructor(private eventService:EventService) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)]}),
      image: new FormControl(null, { validators: [Validators.required] }),
      date: new FormControl(null, { validators: [Validators.required] }),
      time: new FormControl(new Date()),
      type: new FormControl(null, { validators: [Validators.required] }),
      description: new FormControl(null, { validators: [Validators.required] }),
      // image:new FormControl(null,{validators:[Validators.required],asyncValidators:[mimeType]})
  })

  this.mytime = void 0;
  }
  

  onImagepicked(event:Event){
    const file=(event.target as HTMLInputElement).files[0];
    // this.form.patchValue({image:file});
    // this.form.get('image').updateValueAndValidity();

    const reader=new FileReader();
    reader.onload = () =>{
        this.imagepreview=reader.result as string;

    };
    reader.readAsDataURL(file)
}

OnSaveEvent() {
  if (this.form.invalid) {
      return;
  }
  const event:any={
      id:null,
      title:this.form.value.title,
      image:this.form.value.image,
      date:this.form.value.date,
      time:(this.mytime).getTime(),
      type:this.form.value.type,
      description:this.form.value.description
  }

  console.log(event);
      // this.eventService.addEvent(event)

      // this.form.reset();
  } 

 




}
