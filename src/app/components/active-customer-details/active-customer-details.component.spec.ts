import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCustomerDetailsComponent } from './active-customer-details.component';

describe('ActiveCustomerDetailsComponent', () => {
  let component: ActiveCustomerDetailsComponent;
  let fixture: ComponentFixture<ActiveCustomerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveCustomerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
