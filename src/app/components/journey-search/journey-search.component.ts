import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JourneySearchModel } from '../../models/JourneySearchModel';
import { StationsService } from 'src/app/services/stations.service';
import { Station } from 'src/app/models/Station';

@Component({
  selector: 'app-journey-search',
  templateUrl: './journey-search.component.html',
  styleUrls: ['./journey-search.component.css']
})
export class JourneySearchComponent implements OnInit {

  search: JourneySearchModel = new JourneySearchModel(
                                new Station(null, null, null),
                                this.constructCurrentTime(),
                                this.constructCurrentDate()
                                );

  possibleStations: Station[] = [];
  tabNum: number = 0;

  constructor(private station: StationsService, private router: Router) {}

  ngOnInit() {
    this.station.loadStations();
  }

  private constructCurrentTime() {
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');

    return `${hour}:${minute}`;
  }

  private constructCurrentDate() {
    const now = new Date();
    const date = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).padStart(4, '0');

    return `${year}-${month}-${date}`;
  }

  onKeyUp(event){
    const value = event.target.value;
    this.search.station.name = value;
    this.tabNum =  0;
    if (value.length > 2){
      this.possibleStations = this.station.findByName(value);
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
      console.log(this.search);
      this.router.navigate(['/station', this.search.station.crs, 'departures']);
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
