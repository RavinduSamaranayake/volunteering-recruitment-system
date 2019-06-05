import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentVolunteersComponent } from './current-volunteers.component';

describe('CurrentVolunteersComponent', () => {
  let component: CurrentVolunteersComponent;
  let fixture: ComponentFixture<CurrentVolunteersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentVolunteersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentVolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
