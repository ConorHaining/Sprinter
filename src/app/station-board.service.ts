import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BoardItem } from './station-board/BoardItem';
import { BusType } from './station-board/BusType';

@Injectable({
  providedIn: 'root'
})
export class StationBoardService {

  constructor() { }

  getLoadingBoard(): BoardItem[] {
    const board = [
      new BoardItem('Scotrail', 'Aberdeen', '1N', '14:56', '14:56'),
      new BoardItem('Scotrail', 'Edinburgh', '4', '15:13', '15:13'),
      new BoardItem('London North Eastern Railway', 'London Kings Cross', '4', '15:23', null),
      new BoardItem('Scotrail', 'Leuchers', '4', '15:12'),
      new BoardItem('Scotrail', 'Leuchers', '4', '15:12', '15:14'),
      new BoardItem('Scotrail', 'Leuchers', '4', '15:12'),
      new BoardItem('Scotrail', 'Glasgow Queen Street', '4', '15:12'),
      new BoardItem('Caledonian Sleeper', 'London Euston', '4', '15:12', '15:13'),
    ];

    board[3].busType = BusType.REPLACEMENT;

    for (let i = board.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [board[i], board[j]] = [board[j], board[i]];
    }

    return board;
  }

}
