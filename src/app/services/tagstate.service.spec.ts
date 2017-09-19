import { TestBed, inject } from '@angular/core/testing';

import { TagstateService } from './tagstate.service';

describe('TagstateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagstateService]
    });
  });

  it('should be created', inject([TagstateService], (service: TagstateService) => {
    expect(service).toBeTruthy();
  }));
});
