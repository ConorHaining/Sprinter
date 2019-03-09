import { BusType } from './BusType';

export class BoardItem {
  constructor(
    uid: string,
    operator: string,
    location: string,
    platform: string,
  ) {
    this.uid = uid;
    this.operator = operator;
    this.location = location;
    this.platform = platform;
  }

  uid: string;
  operator: string;
  platform: string;

  destination: string;
  origin: string;
  location: string;

  publicDeparture: string;
  publicArrival: string;
  get publicTime() {
    if(this.publicArrival) {
      return this.publicArrival.substring(0, 5)
    } else if (this.publicDeparture) {
      return this.publicDeparture.substring(0, 5);
    } else {
      return undefined;
    }
  }

  actualDeparture: string;
  actualArrival: string;
  get actualTime() {
    if(this.actualArrival) {
      return this.actualArrival.substring(0, 5)
    } else if (this.actualDeparture) {
      return this.actualDeparture.substring(0, 5);
    } else {
      return undefined;
    }
  }

  predictedDeparture: string;
  predictedArrival: string;
  get predictedTime() {
    if(this.predictedDeparture === undefined && this.predictedArrival === undefined) {
      return undefined;
    } else {
      return (this.predictedDeparture) ? this.predictedDeparture : this.predictedArrival;
    }
  }

  isCancelled: boolean = false;

  get isLate() {
    if((this.predictedTime === undefined && this.actualTime === undefined)){
      return false;
    } else if(this.predictedTime == this.publicTime || this.actualTime == this.publicTime) {
      return false;
    } else if (this.predictedTime != this.publicTime || this.actualTime != this.publicTime) {
      return true;
    }
  }

  get isBus() {
    return false;
  }
}
