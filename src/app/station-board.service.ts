import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BoardItem } from './station-board/BoardItem';
import { BusType } from './station-board/BusType';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationBoardService {

  constructor(private http: HttpClient) { }

  getLoadingBoard(): BoardItem[] {
    const board = [
      new BoardItem('U12345', 'Scotrail', 'Aberdeen', '1N', '14:56', '14:56'),
      new BoardItem('U12345', 'Scotrail', 'Edinburgh', '4', '15:13', '15:13'),
      new BoardItem('U12345', 'London North Eastern Railway', 'London Kings Cross', '4', '15:23', null),
      new BoardItem('U12345', 'Scotrail', 'Leuchers', '4', '15:12'),
      new BoardItem('U12345', 'Scotrail', 'Leuchers', '4', '15:12', '15:14'),
      new BoardItem('U12345', 'Scotrail', 'Leuchers', '4', '15:12'),
      new BoardItem('U12345', 'Scotrail', 'Glasgow Queen Street', '4', '15:12'),
      new BoardItem('U12345', 'Caledonian Sleeper', 'London Euston', '4', '15:12', '15:13'),
    ];

    board[3].busType = BusType.REPLACEMENT;

    for (let i = board.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [board[i], board[j]] = [board[j], board[i]];
    }

    return board;
  }

  getStationBoard(crs, direction): Observable<BoardItem[]> {
    const url = `${environment}/station/${crs}/${direction}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    return this.http.get(url, httpOptions);
  }

}
