import { LatLng } from "./LatLng";

export class Station {
    crs: string;
    name: string;

    location: LatLng;
    distance?: number;
}