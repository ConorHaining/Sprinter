import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardItem } from './BoardItem';
import { BusType } from './BusType';

@Component({
  selector: 'app-station-board',
  templateUrl: './station-board.component.html',
  styleUrls: ['./station-board.component.css']
})
export class StationBoardComponent implements OnInit {

  stationBoard: BoardItem[] = [
    new BoardItem('Scotrail', 'Edinburgh', '1N', '14:57', '14:57'),
    new BoardItem('Scotrail', 'Edinburgh', '1N', '14:57', '14:57'),
    new BoardItem('Scotrail', 'Edinburgh', '1N', '14:57', '14:57'),
    new BoardItem('Scotrail', 'Edinburgh', '1N', '14:57', '14:57'),
    new BoardItem('Scotrail', 'Edinburgh', '1N', '14:57', '14:57'),
    new BoardItem('Scotrail', 'Edinburgh', '1N', '14:57', '14:57'),
  ];
  @Output() loading = new EventEmitter<boolean>();
  _loading: boolean;

  crs: string;
  direction: string;
  year: string;
  month: string;
  day: string;
  time: string;

  notion: string;

  constructor(private route:ActivatedRoute) { }

  private triggerLoading(isLoading: boolean){
    this.loading.emit(isLoading);
    this._loading = isLoading;

    this.stationBoard = [
      new BoardItem('Scotrail', 'Aberdeen', '1N', '14:56', '14:56'),
      new BoardItem('Scotrail', 'Edinburgh', '4', '15:13', '15:13'),
      new BoardItem('London North Eastern Railway', 'London Kings Cross', '4', '15:23', null),
      new BoardItem('Scotrail', 'Leuchers', '4', '15:12'),
      new BoardItem('Scotrail', 'Leuchers', '4', '15:12', '15:14'),
      new BoardItem('Scotrail', 'Leuchers', '4', '15:12'),
    ];

    this.stationBoard[3].busType = BusType.REPLACEMENT;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.crs = params['crs'];
      this.direction = params['direction'];
      if (this.direction == 'departures') {
        this.notion = 'to';
      } else if (this.direction == 'arrivals') {
        this.notion = 'from';
      }

      if (this.direction == 'departures') {
        this.triggerLoading(true);
        setTimeout(() => {
          this.triggerLoading(false);
          this.stationBoard = [
            new BoardItem('Scotrail', 'Edinburgh', '1N', '14:57', '14:57'),
            new BoardItem('Scotrail', 'Arbroath', '4', '15:12', '15:13'),
            new BoardItem('London North Eastern Railway', 'Aberdeen', '4', '15:23', null, true),
            new BoardItem('Scotrail', 'Carnoustie', '4', '15:12'),
            new BoardItem('Scotrail', 'Carnoustie', '4', '15:12'),
            new BoardItem('Scotrail', 'Carnoustie', '4', '15:12'),
            ];

            this.stationBoard[3].busType = BusType.REPLACEMENT;
            this.stationBoard[4].busType = BusType.WTT;
            this.stationBoard[5].busType = BusType.SHIP;
        }, 600);
      } else {
        this.triggerLoading(true);
        setTimeout(() => {
          this.triggerLoading(false);
          this.stationBoard = [
            new BoardItem('Scotrail', 'Aberdeen', '1N', '14:56', '14:56'),
            new BoardItem('Scotrail', 'Edinburgh', '4', '15:13', '15:13'),
            new BoardItem('London North Eastern Railway', 'London Kings Cross', '4', '15:23', null, true),
            new BoardItem('Scotrail', 'Leuchers', '4', '15:12'),
            new BoardItem('Scotrail', 'Leuchers', '4', '15:12'),
            new BoardItem('Scotrail', 'Leuchers', '4', '15:12'),
          ];

          this.stationBoard[3].busType = BusType.REPLACEMENT;
          this.stationBoard[4].busType = BusType.WTT;
          this.stationBoard[5].busType = BusType.SHIP;
        }, 6000);

      }

    });

  }

}
