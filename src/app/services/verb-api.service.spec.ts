import { TestBed } from '@angular/core/testing';

import { VerbApiService } from './verb-api.service';

describe('VerbApiService', () => {
  let service: VerbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
