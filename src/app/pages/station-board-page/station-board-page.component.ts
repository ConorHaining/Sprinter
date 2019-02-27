import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-station-board-page',
  templateUrl: './station-board-page.component.html',
  styleUrls: ['./station-board-page.component.css']
})
export class StationBoardPageComponent implements OnInit {

  loading: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onLoading(event){
    this.loading = event;
  }

}
