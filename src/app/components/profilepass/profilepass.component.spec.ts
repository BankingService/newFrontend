import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilepassComponent } from './profilepass.component';

describe('ProfilepassComponent', () => {
  let component: ProfilepassComponent;
  let fixture: ComponentFixture<ProfilepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
