import { TestBed, inject } from '@angular/core/testing';

import { LoginRegisteredService } from './login-registered.service';

describe('LoginRegisteredService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginRegisteredService]
    });
  });

  it('should be created', inject([LoginRegisteredService], (service: LoginRegisteredService) => {
    expect(service).toBeTruthy();
  }));
});
