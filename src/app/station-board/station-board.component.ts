import { Component, OnInit } from '@angular/core';
import { BoardItem } from './BoardItem';
import { BusType } from './BusType';

@Component({
  selector: 'app-station-board',
  templateUrl: './station-board.component.html',
  styleUrls: ['./station-board.component.css']
})
export class StationBoardComponent implements OnInit {

  stationBoard: BoardItem[];

  constructor() { }

  ngOnInit() {

    this.stationBoard = [
      new BoardItem('Aberdeen', '4', '20:45', 'Scotrail'),
      new BoardItem('Arboarth', '4', '21:03', 'Scotrail'),
      new BoardItem('Edinburgh', '2', '21:05', 'Scotrail'),
      new BoardItem('Aberdeen', '4', '21:09', 'London North Eastern Railway', false, '21:45'),
      new BoardItem('Aberdeen', '4', '21:40', 'Cross Country', true),
      new BoardItem('Carnoustie', 'BUS', '21:40', 'Scotrail'),
      new BoardItem('Stonehaven', 'BUS', '21:40', 'Scotrail'),
      new BoardItem('An Island', 'BUS', '21:40', 'Scotrail'),
    ];

    this.stationBoard[5].busType = BusType.REPLACEMENT;
    this.stationBoard[6].busType = BusType.WTT;
    this.stationBoard[7].busType = BusType.SHIP;


  }

}
