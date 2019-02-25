import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyPageComponent } from './journey-page.component';

describe('JourneyPageComponent', () => {
  let component: JourneyPageComponent;
  let fixture: ComponentFixture<JourneyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
