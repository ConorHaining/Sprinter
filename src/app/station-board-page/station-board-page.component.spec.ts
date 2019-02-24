import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationBoardPageComponent } from './station-board-page.component';

describe('StationBoardPageComponent', () => {
  let component: StationBoardPageComponent;
  let fixture: ComponentFixture<StationBoardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationBoardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationBoardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
