import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Schedule } from '../models/Schedule';
import { LocationRecord } from '../models/LocationRecord';
import { Station } from '../models/Station';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JourneyFetchService {

  constructor(private http: HttpClient) { }

  getLoadingJourney(): Schedule{
    const schedule = new Schedule();
    schedule.locations = [
      new LocationRecord(new Station('Aberdeen', null, null), '3', null, '19:16', null, '19:16', null, null),
      new LocationRecord(new Station('Stonehaven', null, null), '', '19:31', '19:35', '19:31', '19:35', null, null),
      new LocationRecord(new Station('Montrose', null, null), '1', '19:54', '19:55', '19:53', '19:54', null, null),
      new LocationRecord(new Station('Arbroath', null, null), '1', '20:09', '20:10', '20:08', '20:10', null, null),
      new LocationRecord(new Station('Carnoustie', null, null), '1', '20:16', '20:17', '20:17', '20:23', null, null),
      new LocationRecord(new Station('Dundee', null, null), '1', '20:28', '20:30', null, null, '20:35', '20:37', ),
      new LocationRecord(new Station('Leuchars', null, null), '1', '20:41', '20:42', null, null, '20:48', '20:50', ),
      new LocationRecord(new Station('Haymarket', null, null), '1', '21:29', '21:30', null, null, '21:36', '21:37', ),
      new LocationRecord(new Station('Edinburgh', null, null), '1', '21:36', null, null, null, '21:41', null, ),
    ];

    return schedule;
  }

  getJourney(uid: string, year: string, month: string, day: string) : Observable<Schedule> {
    const url = `${environment.apiHost}/train/${uid}/${year}/${month}/${day}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    return this.http.get<Schedule>(url, httpOptions);
  }
}
