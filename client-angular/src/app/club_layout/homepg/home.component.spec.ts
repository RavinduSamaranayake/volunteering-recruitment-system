import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepgComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomepgComponent;
  let fixture: ComponentFixture<HomepgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
