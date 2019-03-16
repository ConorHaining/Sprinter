import { LatLng } from './LatLng';
export class Station{

  static fromJSON(json: string) {
    let parsed: Station;
    parsed = JSON.parse(json);
    return parsed;
  }

  constructor(
    public name?: string,
    public crs?: string,
    public location?: LatLng
  ) {}

  toString() {
    return JSON.stringify(this);
  }


}
