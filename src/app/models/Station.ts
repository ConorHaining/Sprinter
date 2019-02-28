import { LatLng } from './LatLng';
export class Station{
  constructor(
    public name: string,
    public crs: string,
    public location: LatLng
  ) {}

}
