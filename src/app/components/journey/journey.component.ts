import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Schedule } from '../../models/Schedule';
import { JourneyFetchService } from '../../services/journey-fetch.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {

  schedule: Schedule;
  @Output() loading = new EventEmitter<boolean>();
  _loading: boolean;
  uid: string;
  year: string;
  month: string;
  day: string;

  constructor(
    private route: ActivatedRoute,
    private journeyService: JourneyFetchService
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.triggerLoading(true);
      this.uid = params['uid'];
      this.year = params['year'];
      this.month = params['month'];
      this.day = params['day'];

      this.journeyService.getJourney(this.uid, this.year, this.month, this.day)
        .subscribe(
          (schedule: Schedule) => {
            this.triggerLoading(false);
            console.log(schedule);
            this.schedule = schedule as Schedule;
          },
          (err) => {
            console.error(err);
          }
        );
    });
  }

  private triggerLoading(isLoading: boolean){
    this.loading.emit(isLoading);
    this._loading = isLoading;
    this.schedule = this.journeyService.getLoadingJourney() as Schedule;
  }

}
