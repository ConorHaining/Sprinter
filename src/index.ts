import './components/journey-search'
import {Router} from '@vaadin/router';

const outlet = document.getElementsByTagName('main')[0];
const router = new Router(outlet, {});
router.setRoutes([
    {path: '/', component: 'journey-search'},
]);
