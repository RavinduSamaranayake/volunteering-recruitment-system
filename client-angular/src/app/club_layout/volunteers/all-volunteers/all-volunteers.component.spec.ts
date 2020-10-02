import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVolunteersComponent } from './all-volunteers.component';

describe('AllVolunteersComponent', () => {
  let component: AllVolunteersComponent;
  let fixture: ComponentFixture<AllVolunteersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllVolunteersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
