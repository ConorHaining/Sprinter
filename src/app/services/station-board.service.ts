import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BoardItem } from '../models/BoardItem';
import { BusType } from '../models/BusType';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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
      new BoardItem('U12345', 'SR', 'Glasgow Queen Street', '4'),
      new BoardItem('U12345', 'CS', 'London Euston', '4'),
    ];


    for (let i = board.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [board[i], board[j]] = [board[j], board[i]];
    }

    return board;
  }

  getStationBoard(crs, direction): Observable<BoardItem[]> {
    const url = `${environment.apiHost}/station/${crs}/${direction}`;
    console.log(environment);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-api-key': environment.apiKey
      })
    };

    return this.http.get(url, httpOptions)
      .pipe(
        map(res => {
          const resArray = Object.entries(res) as unknown as BoardItem[];
          const newBoard: BoardItem[] = resArray.map(item => {
            item = item[1];
            const uid = item.uid;
            const operator = item.operator;
            const location = (item.destination) ? item.destination : item.origin;
            const platform = item.platform;

            let newBoard = new BoardItem(uid, operator, location, platform);

            if(item.destination) {
              newBoard.predictedDeparture = item['predicted_departure'];
              newBoard.publicDeparture = item['public_departure'];
              newBoard.actualDeparture = item['actual_departure'];
            } else if (item.origin) {
              newBoard.predictedArrival = item['predicted_arrival'];
              newBoard.publicArrival = item['public_arrival'];
              newBoard.actualArrival = item['actual_arrival'];
            }

            console.log(item);
            console.log(newBoard);

            return newBoard;
          });

          return newBoard;
      })
    );
  }

}
