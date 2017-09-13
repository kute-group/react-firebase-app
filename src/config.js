class Config {
    constructor() {
        global.PLATFROM = 'web'; // 'web' or 'mobile'
        global.REDUX = require('./redux');
        // global.THEMES = require('./themes');
        // global.MODELS = require('./models');
        global.COMPONENTS = require('./components');
        // global.ROUTES = require('./routePath');

        global.CONFIG = {
            PATH: {
                API: process.env.REACT_APP_API || 'http://ec2-13-229-33-52.ap-southeast-1.compute.amazonaws.com:2018/',
                SERVER: process.env.REACT_APP_SERVER || 'http://ec2-13-229-33-52.ap-southeast-1.compute.amazonaws.com:2018/',
                CMS: process.env.REACT_CMS_SERVER || 'http://ec2-54-255-196-148.ap-southeast-1.compute.amazonaws.com:3020/',
            }
        };
    }
}

new Config();
