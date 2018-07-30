import { TestBed, inject } from '@angular/core/testing';

import { BackstageService } from './backstage.service';

describe('BackstageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackstageService]
    });
  });

  it('should be created', inject([BackstageService], (service: BackstageService) => {
    expect(service).toBeTruthy();
  }));
});
