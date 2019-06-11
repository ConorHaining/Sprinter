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

    findClosest(coordinates: LatLng, returnNumber: number = 8) {
        return this.stations.map(station => {
            const R = 6371; // Radius of the earth in km
            const location = station.location;

            const dLat = (location.latitude - coordinates.latitude) * (Math.PI / 180);
            const dLong = (location.longitude - coordinates.longitude) * (Math.PI / 180);

            const a = 
                Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(coordinates.latitude * (Math.PI / 180)) * Math.cos(location.latitude * (Math.PI / 180)) * 
                Math.sin(dLong/2) * Math.sin(dLong/2)
                ;
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
            const d = R * c; // Distance in km

            station.distance = Number(d.toFixed(2));

            return station;
        }).sort(this.sortByDistance)
        .slice(0, returnNumber);
    }

    getStationByCrs(crs: string) {
        return this.stations.find(station => {
            return station.crs === crs;
        });
    }

    findByNameOrCrs(name: string, returnNumber: number = 8) {
        return this.stations.filter(station => {
          return station.crs.toLowerCase().includes(name.toLowerCase()) || station.name.toLowerCase().includes(name.toLowerCase());
        }).sort((a, b) => {
          if(a.crs === name && b.crs !== name) {
            return -1;
          }
          if(b.crs === name && a.crs !== name) {
            return 1;
          }
          return 0;
        }).sort(this.sortByDistance)
        .slice(0, returnNumber);
    }

    private sortByDistance(a: Station, b: Station){
        return a.distance - b.distance;
    }

}