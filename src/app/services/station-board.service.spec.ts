import { TestBed } from '@angular/core/testing';

import { StationBoardService } from './station-board.service';

describe('StationBoardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StationBoardService = TestBed.get(StationBoardService);
    expect(service).toBeTruthy();
  });
});
