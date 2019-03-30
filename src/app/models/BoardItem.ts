import { BusType } from './BusType';

export class BoardItem {
  // tslint:disable: variable-name
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
  destination: string;
  origin: string;
  location: string;
  category: string;
  isCancelled: boolean;

  public_arrival: string;
  public_departure: string;
  get publicTime() {
    if(this.public_arrival) {
      return this.public_arrival.substring(0, 5)
    } else if (this.public_departure) {
      return this.public_departure.substring(0, 5);
    } else {
      return undefined;
    }
  }

  actual_arrival: string;
  actual_departure: string;
  get actualTime() {
    if(this.actual_arrival) {
      return this.actual_arrival.substring(0, 5);
    } else if (this.actual_departure) {
      return this.actual_departure.substring(0, 5);
    } else {
      return undefined;
    }
  }

  predicted_departure: string;
  predicted_arrival: string;
  get predictedTime() {
    if(this.predicted_departure === undefined && this.predicted_arrival === undefined) {
      return undefined;
    } else {
      return (this.predicted_departure) ? this.predicted_departure : this.predicted_arrival;
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
    if (this.categoryDescription === 'BR' || this.categoryDescription === 'BS') {
      return true;
    }
    return false;
  }

  get suplementaryInfo(): string{
    if (this.actualTime) {
      if(this.actual_arrival) {
        return `Arrived at ${this.actualTime}`;
      } else if (this.actual_departure) {
        return `Departed at ${this.actualTime}`;
      }
    } else if (this.isLate) {
      return `Expected at ${this.predictedTime}`;
    } else {
      return this.categoryDescription;
    }
  }

  get categoryDescription(): string{
    let category;
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
