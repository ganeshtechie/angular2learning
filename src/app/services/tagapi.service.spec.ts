import { TestBed, inject } from '@angular/core/testing';

import { TagapiService } from './tagapi.service';

describe('TagapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagapiService]
    });
  });

  it('should be created', inject([TagapiService], (service: TagapiService) => {
    expect(service).toBeTruthy();
  }));
});
