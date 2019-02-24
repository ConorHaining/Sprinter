import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneySearchComponent } from './journey-search.component';
import { FormsModule } from '@angular/forms';

describe('JourneySearchComponent', () => {
  let component: JourneySearchComponent;
  let fixture: ComponentFixture<JourneySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ JourneySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Initialisation Values', () => {
    Date.prototype.getDate = () => {return 23  ;}
    Date.prototype.getMonth = () => {return 1;}
    Date.prototype.getFullYear = () => {return 2019;}
    Date.prototype.getHours = () => {return 12;}
    Date.prototype.getMinutes = () => {return 0;}
  
    beforeEach(() => {
      fixture = TestBed.createComponent(JourneySearchComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should correctly set default time input value', () => {
      expect(fixture.componentInstance.search.time).toBe('12:00');
    });

    it('should correctly set default date input value', () => {
      expect(fixture.componentInstance.search.date).toBe('2019-02-23');
    });

  });
});