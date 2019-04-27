import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  form: FormGroup;
  imagepreview:string='';
  mytime: Date = new Date();

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)]}),
      content: new FormControl(null, { validators: [Validators.required] }),
      date: new FormControl(null, { validators: [Validators.required] }),
      type: new FormControl(null, { validators: [Validators.required] }),
      description: new FormControl(null, { validators: [Validators.required] }),
      // image:new FormControl(null,{validators:[Validators.required],asyncValidators:[mimeType]})
  })
  }

  onImagepicked(event:Event){
    const file=(event.target as HTMLInputElement).files[0];
    // this.form.patchValue({image:file});
    // this.form.get('image').updateValueAndValidity();
    console.log(file);
    console.log(this.form); 
    const reader=new FileReader();
    reader.onload = () =>{
        this.imagepreview=reader.result as string;
        console.log(this.imagepreview);
    };
    reader.readAsDataURL(file)
}

}
