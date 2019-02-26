import { Component, OnInit } from '@angular/core';
import { Schedule } from './Schedule';
import { LocationRecords } from "./LocationRecords";

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {

  schedule: Schedule;

  constructor() { }

  ngOnInit() {
    this.schedule = new Schedule();
    this.schedule.locations = [
      new LocationRecords('Aberdeen', '3', null, '1916', null, '1916', true),
      new LocationRecords('Stonehaven', '', '1931', '1935', '1931', '1935', true),
      new LocationRecords('Montrose', '1', '1954', '1955', '1953', '1954', true),
      new LocationRecords('Arbroath', '1', '2009', '2010', '2008', '2010', true),
      new LocationRecords('Carnoustie', '1', '2016', '2017', '2017', '2023', true),
      new LocationRecords('Dundee', '1', '2028', '2030', '2035', '2037', false),
      new LocationRecords('Leuchars', '1', '2041', '2042', '2048', '2050', false),
      new LocationRecords('Haymarket', '1', '2129', '2130', '2136', '2137', false),
      new LocationRecords('Edinburgh', '1', '2136', null, '2141', null, false),
    ];
  }

}
