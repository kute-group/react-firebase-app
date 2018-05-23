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
        path: '/services',
        component: pages.Services,
    },
    {
        path: '/blog',
        component: pages.Blog,
    },
    {
        path: '/article/:ID',
        component: pages.Article,
    },
    {
        path: '/contact',
        component: pages.Contact,
    },
    // {
    //     path: '/auth/',
    //     component: pages.Login,
    // },
    {
        path: '/auth/login',
        component: pages.Login,
    },
    {
        path: '/auth/register',
        component: pages.Register,
    },
    {
        path: '/admin/home',
        component: pages.AdHome,
    },
    {
        path: '/admin/project',
        component: pages.AdProject,
    },
    {
        path: '*',
        component: pages.NotFound,
    },
];

export default ROUTES;