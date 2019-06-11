import '@appnest/web-router';

import { JourneySearch } from './components/journey-search';
import './components/station-picker'

import './services/StationInfo'

customElements.whenDefined("router-slot").then(async () => {
    const routerSlot = document.querySelector("router-slot");
    await routerSlot.add([
      {
        path: "/",
        component: JourneySearch
      },
      {
        path: "**",
        redirectTo: "home"
      }
    ]);
});
