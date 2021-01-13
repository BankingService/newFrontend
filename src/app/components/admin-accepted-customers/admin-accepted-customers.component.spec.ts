import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAcceptedCustomersComponent } from './admin-accepted-customers.component';

describe('AdminAcceptedCustomersComponent', () => {
  let component: AdminAcceptedCustomersComponent;
  let fixture: ComponentFixture<AdminAcceptedCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAcceptedCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAcceptedCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
