import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Station } from '../models/Station';
import { LatLng } from '../models/LatLng';
import StationJSON from '../../assets/stations.json';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  stations: Station[] = [];

  constructor(private http: HttpClient) {
    StationJSON.forEach(element => {
      let station = new Station(
            element.name,
            element.crs,
            new LatLng(
              element.location.latitude,
              element.location.longitude
            )
          );
      console.log(station.constructor.name);
      this.stations.push(station);
    });

    this.stations[0].toString();

    // .forEach(element => {
    //   let station = new Station(
    //     element.name,
    //     element.crs,
    //     new LatLng(
    //       element.location.latitude,
    //       element.location.longitude
    //     )
    //   );
    //   this.stations.push(station);
    // });
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
