import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventsComponent } from './edit-events.component';

describe('EditEventsComponent', () => {
  let component: EditEventsComponent;
  let fixture: ComponentFixture<EditEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
