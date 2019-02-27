import { Component, OnInit } from '@angular/core';
import { JourneySearchModel } from '../../models/JourneySearchModel';

@Component({
  selector: 'app-journey-search',
  templateUrl: './journey-search.component.html',
  styleUrls: ['./journey-search.component.css']
})
export class JourneySearchComponent implements OnInit {

  search: JourneySearchModel = new JourneySearchModel('', this.constructCurrentTime(), this.constructCurrentDate());

  constructor() { }

  ngOnInit() {
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

}
