import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BoardItem } from '../models/BoardItem';
import { BusType } from '../models/BusType';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { When } from '../models/When';
import { Station } from '../models/Station';


@Injectable({
  providedIn: 'root'
})
export class StationBoardService {

  constructor(private http: HttpClient) { }

  getLoadingBoard(): BoardItem[] {
    const board = [
      new BoardItem('U12345', 'SR', 'Aberdeen', '1N'),
      new BoardItem('U12345', 'SR', 'Edinburgh', '4'),
      new BoardItem('U12345', 'GR', 'London Kings Cross', '4'),
      new BoardItem('U12345', 'SR', 'Leuchers', '4'),
      new BoardItem('U12345', 'SR', 'Leuchers', '4'),
      new BoardItem('U12345', 'SR', 'Leuchers', '4'),
      new BoardItem('U12345', 'SR', 'Leuchers', '4'),
      new BoardItem('U12345', 'SR', 'Glasgow Queen Street', '4'),
      new BoardItem('U12345', 'CS', 'London Euston', '4'),
    ];


    for (let i = board.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [board[i], board[j]] = [board[j], board[i]];
    }

    return board;
  }

  getStationBoard(crs, direction, when: When = null): Observable<BoardItem[]> {
    let url;
    if (when.minute === undefined) {
      url = `${environment.apiHost}/station/${crs}/${direction}`;
    } else {
      console.log(when);
      url = `${environment.apiHost}/station/${crs}/${direction}/${when.year}/${when.month}/${when.date}/${when.timeStringURL}`;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-api-key': environment.apiKey
      })
    };

    return this.http.get(url, httpOptions)
      .pipe(
        map(result => {
          let board = Object.values(result).map(boardItem => {
            let newBoardItem;
            newBoardItem = Object.assign(new BoardItem(), boardItem);
            newBoardItem.location = (boardItem.origin) ?
                                    boardItem.origin :
                                    boardItem.destination;
            return newBoardItem;
          });
          return board;
      })
    );
  }

}
