import { LocationRecord } from './LocationRecord';
export class Schedule{
  locations: LocationRecord[];
  operator: string;

  get origin(): string {
    const first = this.locations[0];
    return first.station.name;
  }

  get destination(): string {
    const last = this.locations[this.locations.length - 1];
    return last.station.name;
  }

  get departureTime(): string {
    const first = this.locations[0];
    return first.publicDeparture;
  }
}
