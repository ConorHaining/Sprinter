import { Station } from './Station';
import { DateTime } from 'luxon';

export class LocationRecord {
  // tslint:disable: variable-name
  constructor(
    station?: Station,
    platform?: string,
    public_arrival?: string,
    public_departure?: string,
    actual_arrival?: string,
    actual_departure?: string,
    predicted_arrival?: string,
    predicted_departure?: string,
  ) {
    this.station = station;
    this.platform = platform;
    this.public_departure = public_departure;
    this.public_arrival = public_arrival;
    this.actual_departure = actual_departure;
    this.actual_arrival = actual_arrival;
    this.predicted_departure = predicted_departure;
    this.predicted_arrival = predicted_arrival;
  }

  station: Station;
  platform: string;

  public_departure: string;
  public_arrival: string;

  actual_departure: string;
  actual_arrival: string;

  predicted_departure: string;
  predicted_arrival: string;

  get realtimeArrival(): string {
    if(this.actual_arrival){
      return this.actual_arrival;
    } else if (this.predicted_arrival){
      return this.predicted_arrival;
    } else {
      return this.public_arrival;
    }
  }

  get realtimeDeparture(): string {
    if(this.actual_departure) {
      return this.actual_departure;
    } else if (this.predicted_departure){
      return this.predicted_departure;
    } else {
      return this.public_departure;
    }
  }

  private findRealtimeDiff(): number {
    const timetable = DateTime.fromISO(this.publicTime);
    const realtime = DateTime.fromISO(this.actualTime);

    return timetable.diff(realtime).as('minutes');
  }
  get isEarly(): boolean{
    const diff = this.findRealtimeDiff();

    return diff > 0;
  }

  get isLate(): boolean{
    const diff = this.findRealtimeDiff();

    return diff < 0;
  }

  get status(): string{
    const diff = this.findRealtimeDiff();
    if(this.isEarly){
      return `${diff}m early`;
    } else if(this.isLate) {
      return `${Math.abs(diff)}m late`;
    } else if (diff === 0) {
      return 'On Time';
    }
  }

  get publicTime() {
    if(this.public_arrival) {
      return this.public_arrival;
    } else if (this.public_departure) {
      return this.public_departure;
    } else {
      return undefined;
    }
  }

  get actualTime() {
    if(this.actual_arrival) {
      return this.actual_arrival;
    } else if (this.actual_departure) {
      return this.actual_departure;
    } else {
      return undefined;
    }
  }

  get routerTime() {
    return this.publicTime.substring(0, 2) + this.publicTime.substring(3, 5);
  }

}
