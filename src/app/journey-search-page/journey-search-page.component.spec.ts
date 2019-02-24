import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneySearchPageComponent } from './journey-search-page.component';

describe('JourneySearchPageComponent', () => {
  let component: JourneySearchPageComponent;
  let fixture: ComponentFixture<JourneySearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneySearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneySearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
