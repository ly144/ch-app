import { TestBed, inject } from '@angular/core/testing';

import { ApeService } from './ape.service';

describe('ApeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApeService]
    });
  });

  it('should be created', inject([ApeService], (service: ApeService) => {
    expect(service).toBeTruthy();
  }));
});
