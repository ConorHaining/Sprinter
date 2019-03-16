import { Station } from './Station';
import { DateTime } from 'luxon';

export class LocationRecord {
  constructor(
    station: Station,
    platform: string,
    publicArrival: string,
    publicDeparture: string,
    actualArrival: string,
    actualDeprature: string,
    predictedArrival: string,
    predictedDeparture: string,
  ) {
    this.station = station;
    this.platform = platform;
    this.publicDeparture = publicDeparture;
    this.publicArrival = publicArrival;
    this.actualDeparture = actualDeprature;
    this.actualArrival = actualArrival;
    this.predictedDeparture = predictedDeparture;
    this.predictedArrival = predictedArrival;
  }

  station: Station;
  platform: string;

  publicDeparture: string;
  publicArrival: string;

  actualDeparture: string;
  actualArrival: string;

  predictedDeparture: string;
  predictedArrival: string;

  get realtimeArrival(): string {
    if(this.actualArrival){
      return this.actualArrival;
    } else {
      return this.predictedArrival;
    }
  }

  get realtimeDeparture(): string {
    if(this.actualDeparture) {
      return this.actualDeparture;
    } else {
      return this.predictedDeparture;
    }
  }

  private findRealtimeDiff(): number {
    const timetable = DateTime.fromISO(this.publicDeparture);
    const realtime = DateTime.fromISO(this.realtimeDeparture);

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
    } else {
      return 'On Time';
    }
  }


}
