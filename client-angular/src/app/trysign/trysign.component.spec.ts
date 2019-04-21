import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrysignComponent } from './trysign.component';

describe('TrysignComponent', () => {
  let component: TrysignComponent;
  let fixture: ComponentFixture<TrysignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrysignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrysignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
