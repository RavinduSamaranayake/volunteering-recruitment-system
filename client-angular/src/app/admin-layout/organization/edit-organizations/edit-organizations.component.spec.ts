import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditOrganizationsComponent } from './edit-organizations.component';

describe('EditOrganizationComponent', () => {
  let component: EditOrganizationsComponent;
  let fixture: ComponentFixture<EditOrganizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrganizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
