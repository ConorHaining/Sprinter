import './components/journey-search'
import './components/station-picker'
import {Router} from '@vaadin/router';

const outlet = document.getElementsByTagName('main')[0];
const router = new Router(outlet, {});
router.setRoutes([
    {path: '/', component: 'journey-search'},
]);
