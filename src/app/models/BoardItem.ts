import { BusType } from './BusType';

export class BoardItem {
  constructor(
    uid?: string,
    operator?: string,
    location?: string,
    platform?: string,
  ) {
    this.uid = uid;
    this.operator = operator;
    this.location = location;
    this.platform = platform;
  }

  uid: string;
  operator: string;
  platform: string;
  category: string;
  destination: string;
  origin: string;
  location: string;

  isCancelled: boolean;

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
      return this.actualArrival.substring(0, 5);
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
    if (this.category === 'BR' || this.category === 'BS') {
      return true;
    }
    return false;
  }

  get suplementaryInfo(): string{
    let category: string;
    switch(this.category) {
      case 'XX':
        category = 'Express Passenger Service';
        break;
      case 'OO':
        category = 'Ordinary Passenger Service';
        break;
      case 'OU':
        category = 'Unadvertised Ordinary Passenger';
        break;
      case 'XZ':
        category = 'Domestic Sleeper';
        break;
      case 'BR':
        category = 'Bus Replacement Service';
        break;
      case 'BS':
        category = 'Scheduled Bus Service';
        break;
      case 'SS':
        category = 'Scheduled Ship Service';
        break;
    }
    return category;
  }
}
