import { LocationRecord } from './LocationRecord';
import { Station } from './Station';
export class Schedule{
  locations: LocationRecord[];
  operator: string;
  cancelled: boolean;
  cancelCode: string;
  cancelledAt: Station;

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
    return first.public_departure;
  }
}
