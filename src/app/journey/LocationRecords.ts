import { DateTime, Interval } from 'luxon';

export class LocationRecords {
  constructor(
    public location: string,
    public platform: string,
    public publicArrival: string,
    public publicDeparture: string,
    public predictedArrival: string,
    public predictedDeparture: string,
    public calledAt: boolean = false,
  ) {}

  get status() {
    if (this.publicDeparture && this.predictedDeparture){
      const publicDeparture = DateTime.fromObject({
        hour: parseInt(this.publicDeparture.substring(0, 2)),
        minute: parseInt(this.publicDeparture.substring(2, 4))
      });

      const predictedDeparture = DateTime.fromObject({
        hour: parseInt(this.predictedDeparture.substring(0, 2)),
        minute: parseInt(this.predictedDeparture.substring(2, 4))
      });

      let difference;
      let status;

      if(publicDeparture > predictedDeparture) {
        difference = Interval.fromDateTimes(predictedDeparture, publicDeparture);
        status = `${difference.length('minutes')}m Early`;
      } else if (publicDeparture < predictedDeparture){
        difference = Interval.fromDateTimes(publicDeparture, predictedDeparture);
        status = `${difference.length('minutes')}m Late`;
      } else {
        status = 'On Time';
      }

      return status;
    }
  }

  get isLate() {
    if (this.publicDeparture && this.predictedDeparture){
      const publicDeparture = DateTime.fromObject({
        hour: parseInt(this.publicDeparture.substring(0, 2)),
        minute: parseInt(this.publicDeparture.substring(2, 4))
      });

      const predictedDeparture = DateTime.fromObject({
        hour: parseInt(this.predictedDeparture.substring(0, 2)),
        minute: parseInt(this.predictedDeparture.substring(2, 4))
      });

      let status;

      if(publicDeparture > predictedDeparture) {
        status = false;
      } else if (publicDeparture < predictedDeparture){
        status = true;
      }

      return status;
    }
  }

  get isEarly() {
    if (this.isLate === false){
      return true;
    }
  }

}
