import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { mimeType } from './mime-type.validator';
import { OrganizationService } from 'src/app/myservices/organization.service';
import {Organization} from './organization.model'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  imagepreview: string = '';
  organization:Organization
  modalRef: BsModalRef;

  constructor(private orgService:OrganizationService,
    private modalService: BsModalService,) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
       image: new FormControl(null, { validators: [Validators.required], asyncValidators: [mimeType] }),
      email: new FormControl(null, { validators: [Validators.required,Validators.email] }),
      contact: new FormControl(null, { validators: [Validators.required,Validators.minLength(10)] }),
      about: new FormControl(null, { validators: [Validators.required] }),
      address: new FormControl(null, { validators: [Validators.required] }),
  })

  this.orgService.getmyOrganization().subscribe(org=>{

    let Org: any = org;
     this.organization={
      id:Org._id,
      name:Org.name,
      email:Org.email,
      image:Org.image,
      contact:Org.contact,
      address:Org.address,
      about:Org.about,
     }

     console.log(this.organization)
    this.form.setValue({
      name: this.organization.name,
      about: this.organization.about,
       image: this.organization.image,
      contact:this.organization.contact,
      email: this.organization.email,
      address: this.organization.address,

    })
    this.imagepreview = (this.organization.image).toString();
  })

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

  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  OnSaveEvent() {
    console.log("fired");
    if (this.form.invalid) {
      return;
    }


      const orgUpdate: any = {
        name: this.form.value.name,
        image: this.form.value.image,
        email: this.form.value.email,
        address: this.form.value.address,
        about: this.form.value.about,
        contact: this.form.value.contact,
      }
      console.log(orgUpdate)
      this.orgService.updateMyOrganization(orgUpdate);
      // this.addalert("info", "you have successfully updated");
      //  this.form.reset();
      //  this.router.navigate(['/club/']);

       this.modalRef.hide()
       
       
    }

}
