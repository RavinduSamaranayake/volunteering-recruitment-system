import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-edit-volunteer',
  templateUrl: './edit-volunteer.component.html',
  styleUrls: ['./edit-volunteer.component.scss'],
  animations: [routerTransition()]
})
export class EditVolunteerComponent implements OnInit {
  volunteerId: String;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.volunteerId = this.route.snapshot.paramMap.get('id');
    console.log(this.volunteerId);
  }

}
