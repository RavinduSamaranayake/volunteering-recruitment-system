import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../myservices/auth.service';

@Component ({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
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
export class HomepgComponent implements OnInit {

  constructor(public router: Router , private authService:AuthService,) {}

  ngOnInit() {}

}
