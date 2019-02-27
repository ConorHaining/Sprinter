import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Schedule } from './Schedule';
import { JourneyFetchService } from '../../services/journey-fetch.service';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {

  schedule: Schedule;
  @Output() loading = new EventEmitter<boolean>();
  _loading: boolean;

  constructor(private journeyService: JourneyFetchService) { }

  ngOnInit() {
    this.triggerLoading(true);
    setTimeout(() => this.triggerLoading(false), 3000);
    this.schedule = this.journeyService.getLoadingJourney();
  }

  private triggerLoading(isLoading: boolean){
    this.loading.emit(isLoading);
    this._loading = isLoading;
  }

}
