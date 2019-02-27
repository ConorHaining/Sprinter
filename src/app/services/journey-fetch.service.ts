import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Schedule } from '../models/Schedule';
import { LocationRecords } from '../models/LocationRecords';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JourneyFetchService {

  constructor(private http: HttpClient) { }

  getLoadingJourney(): Schedule{
    let schedule = new Schedule();
    schedule.locations = [
      new LocationRecords('Aberdeen', '3', null, '1916', null, '1916', true),
      new LocationRecords('Stonehaven', '', '1931', '1935', '1931', '1935', true),
      new LocationRecords('Montrose', '1', '1954', '1955', '1953', '1954', true),
      new LocationRecords('Arbroath', '1', '2009', '2010', '2008', '2010', true),
      new LocationRecords('Carnoustie', '1', '2016', '2017', '2017', '2023', true),
      new LocationRecords('Dundee', '1', '2028', '2030', '2035', '2037', false),
      new LocationRecords('Leuchars', '1', '2041', '2042', '2048', '2050', false),
      new LocationRecords('Haymarket', '1', '2129', '2130', '2136', '2137', false),
      new LocationRecords('Edinburgh', '1', '2136', null, '2141', null, false),
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
