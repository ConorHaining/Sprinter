import Stations from '../assets/stations.json';
import { Station } from '../models/Station';
import { LatLng } from '../models/LatLng';

export class StationInfo {

    stations: Array<Station>;

    constructor(){
        this.stations = Stations.map(station => {
            station = Object.assign(new Station, station);
            station.location = Object.assign(new LatLng, station.location);
        
            return station;
        });
    }

}