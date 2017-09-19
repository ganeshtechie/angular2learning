import { TestBed, inject } from '@angular/core/testing';

import { UsersearchService } from './usersearch.service';

describe('UsersearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersearchService]
    });
  });

  it('should be created', inject([UsersearchService], (service: UsersearchService) => {
    expect(service).toBeTruthy();
  }));
});
