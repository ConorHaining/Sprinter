import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Station } from '../models/Station';
import { LatLng } from '../models/LatLng';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  stations: Station[] = [];

  constructor(private http: HttpClient) {}

  loadStations() {
    if(this.stations.length === 0){
      this.http.get('assets/stations.json')
      .subscribe(stations => {
        Object.values(stations).forEach(station => {
          let s = new Station(
            station.name,
            station.crs,
            new LatLng(station.latlng.latitude, station.latlng.longitude)
            )
          this.stations.push(s);
        });
      });
    }
  }

  findByName(name: string): Station[]{
    let possibleStations: Station[] = [];
    possibleStations = this.stations.filter(station => {
      return station.name.toLowerCase().includes(name.toLowerCase());
    });

    return possibleStations.splice(0, 8);
  }

  getByCrs(crs: string): Station{
    let possibleStations: Station[] = [];
    possibleStations = this.stations.filter(station => {
      return station.crs.toLowerCase().includes(crs.toLowerCase());
    });

    return possibleStations.pop();
  }
}
