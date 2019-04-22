import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubDashbordComponent } from './club-dashbord.component';

describe('ClubDashbordComponent', () => {
  let component: ClubDashbordComponent;
  let fixture: ComponentFixture<ClubDashbordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubDashbordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
