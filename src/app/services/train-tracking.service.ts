import { Injectable } from '@angular/core';
import { When } from '../models/When';

@Injectable({
  providedIn: 'root'
})
export class TrainTrackingService {

  constructor() { }

  private key = 'TrackedJourneys'

  trackNewJourney(uid: string, when: When) {
    const trackedJourneysStorage = localStorage.getItem(this.key);
    const newJourney = {
      uid,
      when
    };
    let journeys;

    if(trackedJourneysStorage) {
      journeys = JSON.parse(trackedJourneysStorage);
    } else {
      journeys = [];
    }
    journeys.push(newJourney);

    localStorage.setItem('TrackedJourneys', JSON.stringify(journeys));
  }

  getTrackedJourneys() {
    const trackedJourneysStorage = localStorage.getItem(this.key);
    let journeys;

    if(trackedJourneysStorage) {
      journeys = JSON.parse(trackedJourneysStorage);
    } else {
      journeys = [];
    }

    return journeys;
  }
}
