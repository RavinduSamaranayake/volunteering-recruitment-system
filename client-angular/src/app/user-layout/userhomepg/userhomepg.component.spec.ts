import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserhomepgComponent } from './userhomepg.component';

describe('UserhomepgComponent', () => {
  let component: UserhomepgComponent;
  let fixture: ComponentFixture<UserhomepgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserhomepgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserhomepgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
