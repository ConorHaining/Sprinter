import { BusType } from './BusType';

export class BoardItem {
    constructor(
        public location: string,
        public platform: string,
        public publicArrival: string,
        public operator: string,
        public cancelled: boolean = false,
        public predictedArrival?: string,
    ) {}

    get isLate(){
        return this.publicArrival != this.predictedArrival && this.predictedArrival;
    }

    get isBus(){
      return this.busType != null;
    }

    busType: BusType = null;
}
