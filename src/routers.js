import * as pages from './containers';
const ROUTES = [
    {
        path: '/',
        component: pages.Silk,
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

    {
        path: '/silk',
        component: pages.Silk,
        
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
        path: '/admin/article',
        component: pages.AdArticle,
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