import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    // tslint:disable-next-line:max-line-length
    if (user.firstname === undefined || user.lastname === undefined || user.email === undefined || user.username === undefined || user.password === undefined || user.age === undefined || user.address === undefined) {
      alert('All the required fields are required');
      return false;
    } else if (user.password !== user.rpassword) {
      alert('passwords are mismatch');
      return false;
    } else {
      return true;
    }
  }
  validateEmail(email) {
    // tslint:disable-next-line:max-line-length
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validateProfile(user) {
    // tslint:disable-next-line:max-line-length
    if (user.firstname === '' || user.lastname === '' || user.email === '' || user.username === ''  || user.age === '' || user.address === '') {
      alert('All the required fields are required');
      return false;
    } else {
      return true;
    }
  }
  validatePassword(user) {
    // tslint:disable-next-line:max-line-length
    if (user.password === '') {
      alert('Please enter your current password');
      return false;
    } else if (user.newpaswrd.length < 8) {
      alert('Password lenth must be atleast 8 characters');
      return false;

    } else if (user.newpaswrd !== user.connewpaswrd) {
      alert('You new ');
      return false;

    } else {
      return true;
    }
  }
 }

