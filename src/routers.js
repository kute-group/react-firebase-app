import * as pages from './containers';
const ROUTES = [
    {
        path: '/',
        component: pages.Home,
        exact: true,
    },
    {
        path: '/about',
        component: pages.About,
    },
    {
        path: '/article/:ID',
        component: pages.Article,
    },
    {
        path: '*',
        component: pages.NotFound,
    },
];

export default ROUTES;