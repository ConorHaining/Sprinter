import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardItem } from '../../models/BoardItem';
import { StationBoardService } from '../../services/station-board.service';
import { StationsService } from 'src/app/services/stations.service';
import { Station } from 'src/app/models/Station';

import { environment } from 'src/environments/environment';
import { When } from 'src/app/models/When';

@Component({
  selector: 'app-station-board',
  templateUrl: './station-board.component.html',
  styleUrls: ['./station-board.component.css']
})
export class StationBoardComponent implements OnInit {

  stationBoard: BoardItem[] = [];
  @Output() loading = new EventEmitter<boolean>();
  _loading: boolean;

  station: Station = new Station('A station', 'ABC', null);

  crs: string;
  direction: string;

  when: When;

  notion: string;

  constructor(
    private route: ActivatedRoute,
    private board: StationBoardService,
    private stationService: StationsService
  ) { }

  private triggerLoading(isLoading: boolean){
    this.loading.emit(isLoading);
    this._loading = isLoading;

    this.stationBoard = this.board.getLoadingBoard();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.crs = params['crs'];
      this.direction = params['direction'];
      this.station = this.stationService.getByCrs(this.crs);
      if(params.time !== undefined){
        this.when = new When(params.year, params.month, params.day, params.time.substring(0, 2), params.time.substring(2, 4));
      } else {
        this.when = new When();
      }

      this.triggerLoading(true);

      if (this.direction === 'departures') {
        this.notion = 'to';
      } else if (this.direction === 'arrivals') {
        this.notion = 'from';
      }

      this.board.getStationBoard(this.crs, this.direction, this.when)
        .subscribe(
          (board: BoardItem[]) => {
            this.triggerLoading(false);
            console.log(board);
            this.stationBoard = board;
          },
          (err) => {
            console.error(err);
          });

      });

      }

}
