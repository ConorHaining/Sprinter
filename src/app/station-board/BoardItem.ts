import { BusType } from './BusType';

export class BoardItem {
    constructor(
        public operator: string,
        public location: string,
        public platform: string,
        public publicTime: string,
        public predictedTime: string = null, 
        public cancelled: boolean = false,
    ) {}

    get isLate(){
        return this.publicTime != this.predictedTime && this.predictedTime;
    }

    get isBus(){
      return this.busType != null;
    }

    busType: BusType = null;
}
