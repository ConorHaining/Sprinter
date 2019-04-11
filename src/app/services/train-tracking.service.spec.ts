import { TestBed } from '@angular/core/testing';

import { TrainTrackingService } from './train-tracking.service';

describe('TrainTrackingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainTrackingService = TestBed.get(TrainTrackingService);
    expect(service).toBeTruthy();
  });
});
