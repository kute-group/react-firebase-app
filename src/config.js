class Config {
    constructor() {
        global.PLATFROM = 'web'; // 'web' or 'mobile'
        global.DATABASE = 'firebase'; // 'firebase' or 'any thing else'
        global.REDUX = require('./redux');
        global.HELPERS = require('./helpers');
        global.THEMES = require('./themes');
        global.LANG = 'LANG_EN';
        global.LANGUAGES = require('./constants/languages');
        global.CONSTANTS = require('./constants/global');
        global.COMPONENTS = require('./components');
        // global.ROUTES = require('./routePath');
        global.CONFIG = {
            PATH: {
                API: process.env.REACT_APP_API || 'http://ec2-13-229-33-52.ap-southeast-1.compute.amazonaws.com:2018/',
                SERVER: process.env.REACT_APP_SERVER || 'http://ec2-13-229-33-52.ap-southeast-1.compute.amazonaws.com:2018/',
                CMS: process.env.REACT_CMS_SERVER || 'http://ec2-54-255-196-148.ap-southeast-1.compute.amazonaws.com:3020/',
            },
            FIREBASE: {
                apiKey: 'AIzaSyCZZGVdty7x_zgzsDcDsdnAYjAmGAqC23E',
                authDomain: 'luongbahop1993.firebaseapp.com',
                databaseURL: 'https://luongbahop1993.firebaseio.com',
                storageBucket: 'luongbahop1993.appspot.com',
            }
        };
    }
}

new Config();
