import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrganizationComponent } from './add-organization.component';
import { PageHeaderComponent } from '../../../shared';

describe('AddOrganizationComponent', () => {
  let component: AddOrganizationComponent;
  let fixture: ComponentFixture<AddOrganizationComponent>;

  // create new instance of FormBuilder
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrganizationComponent, PageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //invalid whe the form is invalid
  it('form invalid when empty', () => {
    expect(component.myForm.valid).toBeFalsy();
  });

  //name should be initially invalid
  it('name field validity', () => {
    let name = component.form.controls['name']
    expect(name.valid).toBeFalsy();

    let errors = {};
    errors = name.errors;
    expect(errors['required']).toBeTruthy();
  });

  //email should be initially invalid
  it('email field validity', () => {
    let email = component.form.controls['email']
    expect(email.valid).toBeFalsy();

    let errors = {};
    errors = name.errors;
    expect(errors['required']).toBeTruthy();
    expect(errors['email']).toBeTruthy();
  });

  //regNo should be initially invalid
  it('regNo field validity', () => {
    let regNo = component.form.controls['regNo']
    expect(regNo.valid).toBeFalsy();

    let errors = {};
    errors = name.errors;
    expect(errors['required']).toBeTruthy();
    expect(errors['minLength']).toBeTruthy();
  });

  //contact should be initially invalid
  it('contact field validity', () => {
    let contact = component.form.controls['contact']
    expect(contact.valid).toBeFalsy();

    let errors = {};
    errors = name.errors;
    expect(errors['required']).toBeTruthy();
    expect(errors['min']).toBeTruthy();
    expect(errors['max']).toBeTruthy();
  });
});
