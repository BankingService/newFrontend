import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedCustomerDetailsComponent } from './blocked-customer-details.component';

describe('BlockedCustomerDetailsComponent', () => {
  let component: BlockedCustomerDetailsComponent;
  let fixture: ComponentFixture<BlockedCustomerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedCustomerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
