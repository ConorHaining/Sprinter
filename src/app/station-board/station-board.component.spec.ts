import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationBoardComponent } from './station-board.component';

describe('StationBoardComponent', () => {
  let component: StationBoardComponent;
  let fixture: ComponentFixture<StationBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
