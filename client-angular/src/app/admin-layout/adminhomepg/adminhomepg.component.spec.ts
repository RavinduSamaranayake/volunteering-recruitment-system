import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminhomepgComponent } from './adminhomepg.component';

describe('AdminhomepgComponent', () => {
  let component: AdminhomepgComponent;
  let fixture: ComponentFixture<AdminhomepgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminhomepgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminhomepgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
