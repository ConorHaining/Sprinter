import { TestBed } from '@angular/core/testing';

import { JourneyFetchService } from './journey-fetch.service';

describe('JourneyFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JourneyFetchService = TestBed.get(JourneyFetchService);
    expect(service).toBeTruthy();
  });
});
