import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaccountstatusComponent } from './createaccountstatus.component';

describe('CreateaccountstatusComponent', () => {
  let component: CreateaccountstatusComponent;
  let fixture: ComponentFixture<CreateaccountstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateaccountstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateaccountstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
