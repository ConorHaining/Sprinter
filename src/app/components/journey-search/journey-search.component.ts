import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JourneySearchModel } from '../../models/JourneySearchModel';
import { StationsService } from 'src/app/services/stations.service';
import { Station } from 'src/app/models/Station';
import { When } from 'src/app/models/When';

@Component({
  selector: 'app-journey-search',
  templateUrl: './journey-search.component.html',
  styleUrls: ['./journey-search.component.css']
})
export class JourneySearchComponent implements OnInit {

  search: JourneySearchModel = new JourneySearchModel(
                                new Station(null, null, null),
                                new When()
                                );

  possibleStations: Station[] = [];
  tabNum: number = 0;

  constructor(private station: StationsService, private router: Router) {}

  ngOnInit() { }

  onKeyUp(event){
    const value = event.target.value;
    this.search.station.name = value;
    this.tabNum =  0;
    if (value.length > 2){
      this.possibleStations = this.station.findByNameOrCrs(value);
    } else {
      this.possibleStations = [];
    }
  }

  onStationSelect(event){
    const station = event.target.getAttribute('data-station');
    this.search.station = Station.fromJSON(station);
    this.possibleStations = [];
  }

  onSearch() {

    if(this.search.station.crs) {
      console.info(`${this.search.when.dateString} | ${When.currentDateString} | ${this.search.when.dateString === When.currentDateString}`)
      console.info(`${this.search.when.timeString} | ${When.currentTimeString} | ${this.search.when.timeString === When.currentTimeString}`)
      if(this.search.when.dateString === When.currentDateString && this.search.when.timeString === When.currentTimeString) {
        this.router.navigate(['/station', this.search.station.crs, 'departures']);
      } else {
        console.info(this.search.when);
        this.router.navigate(['/station',
                          this.search.station.crs,
                          'departures',
                          this.search.when.year,
                          this.search.when.month,
                          this.search.when.date,
                          this.search.when.timeStringURL]);
      }

    } else {
      console.error('Invalid input');
    }
  }

  onKeyDown(event){
    if (event.keyCode === 38 || event.keyCode == 40) {

      switch (event.keyCode){
        case 38:
          this.tabNum--;
          this.tabNum = Math.max(0, this.tabNum);
          break;
        case 40:
          this.tabNum++;
          this.tabNum = Math.min(this.possibleStations.length, this.tabNum);
          break;
      }

      if (this.tabNum > 0){
        let listItem = document.querySelector('#autocomplete ul').children.item(this.tabNum - 1) as HTMLElement;
        listItem.focus();
      } else {
        const input = document.querySelector('input#station') as HTMLElement;
        input.focus();
      }

    } else if(event.keyCode === 13) {
      let listItem = document.querySelector('#autocomplete ul').children.item(this.tabNum - 1) as HTMLElement;
      const station = listItem.getAttribute('data-station');
      this.search.station = Station.fromJSON(station);
      this.possibleStations = [];
    } else {
      const input = document.querySelector('input#station') as HTMLElement;
      input.focus();
    }

  }

}
