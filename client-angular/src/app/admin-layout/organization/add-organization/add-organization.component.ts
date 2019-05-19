import { Component } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { OrganizationService } from '../../../myservices/organization.service';

@Component({
  // tslint:disable-next-line: quotemark
  selector: "app-add-organization",
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss'],
  animations: [routerTransition()]
})
export class AddOrganizationComponent {
  myForm: FormGroup;

  public nameVal = '';
  public regNoVal = '';
  public emailVal = '';
  public contactVal = '';

  constructor(
    private fb: FormBuilder,
    private orgService: OrganizationService,
    private toastr: ToastrService
  ) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      regNo: ['', [Validators.required, Validators.minLength(6)]],
      contact: [
        '',
        [
          Validators.required,
          Validators.min(999999999),
          Validators.max(10000000000)
        ]
      ]
    });
  }

  get email() {
    return this.myForm.get('email');
  }

  get name() {
    return this.myForm.get('name');
  }
  get contact() {
    return this.myForm.get('contact');
  }
  get regNo() {
    return this.myForm.get('regNo');
  }

  onSubmit() {
    this.orgService.addOrganization(this.myForm.value).subscribe(
      response => {
        this.toastr.success('New organization added', 'Success');
      },
      error => {
        this.toastr.error('Please try again', 'Error');
      }
    );
  }
}
