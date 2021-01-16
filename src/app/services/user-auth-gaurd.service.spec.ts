import { TestBed } from '@angular/core/testing';

import { UserAuthGaurdService } from './user-auth-gaurd.service';

describe('UserAuthGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserAuthGaurdService = TestBed.get(UserAuthGaurdService);
    expect(service).toBeTruthy();
  });
});
