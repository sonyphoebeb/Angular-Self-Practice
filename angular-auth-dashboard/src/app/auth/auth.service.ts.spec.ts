import { TestBed } from '@angular/core/testing';

import { AuthServiceTs } from './auth.service.ts';

describe('AuthServiceTs', () => {
  let service: AuthServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
