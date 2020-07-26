import { TestBed } from '@angular/core/testing';

import { BasicRegistrationService } from './basic-registration.service';

describe('BasicRegistrationService', () => {
  let service: BasicRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
