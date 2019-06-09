import {Router} from '@vaadin/router';

const outlet = document.getElementsByTagName('main')[0];
const router = new Router(outlet);
router.setRoutes([
    {path: '/', component: 'x-home-view'},
    {path: '/users', component: 'x-user-list'},
    {path: '/users/:user', component: 'x-user-profile'},
]);

