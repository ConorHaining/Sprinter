const { DateTime } = require('luxon');

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

  // get status() {
  //   let depart
  // }
}
