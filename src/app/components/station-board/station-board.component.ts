import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardItem } from '../../models/BoardItem';
import { StationBoardService } from '../../services/station-board.service';

@Component({
  selector: 'app-station-board',
  templateUrl: './station-board.component.html',
  styleUrls: ['./station-board.component.css']
})
export class StationBoardComponent implements OnInit {

  stationBoard: BoardItem[] = [];
  @Output() loading = new EventEmitter<boolean>();
  _loading: boolean;

  crs: string;
  direction: string;
  year: string = '2019';
  month: string = '02';
  day: string = '25';
  time: string = '15:15';

  notion: string;

  constructor(private route:ActivatedRoute, private board:StationBoardService) { }

  private triggerLoading(isLoading: boolean){
    this.loading.emit(isLoading);
    this._loading = isLoading;

    this.stationBoard = this.board.getLoadingBoard();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.crs = params['crs'];
      this.direction = params['direction'];

      this.triggerLoading(true);
      setTimeout(() => this.triggerLoading(false), 3000);

      if (this.direction === 'departures') {
        this.notion = 'to';
      } else if (this.direction === 'arrivals') {
        this.notion = 'from';
      }

      this.board.getStationBoard(this.crs, this.direction)
        .subscribe(
          (board: BoardItem[]) => {
            console.log(board);
          },
          (err) => {
            console.error(err);
          });

    });

  }

}