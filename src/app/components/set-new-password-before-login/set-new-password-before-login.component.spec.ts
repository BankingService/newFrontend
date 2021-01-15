import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetNewPasswordBeforeLoginComponent } from './set-new-password-before-login.component';

describe('SetNewPasswordBeforeLoginComponent', () => {
  let component: SetNewPasswordBeforeLoginComponent;
  let fixture: ComponentFixture<SetNewPasswordBeforeLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetNewPasswordBeforeLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetNewPasswordBeforeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
