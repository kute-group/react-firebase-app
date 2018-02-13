//import external libs
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

//import internal libs
import './config';
import store from './store';
import * as pages from './containers';
import registerServiceWorker from './registerServiceWorker';
import ROUTES  from "./routers";
registerServiceWorker();

class App {
    constructor() {
        this.init();
    }
    init() {
        ReactDOM.render(
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Switch store={store}>
                            {ROUTES.map(({ path, component, exact }, key) => (
                                <Route key={key} path={path} component={component} exact={exact} />
                            ))}
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
            , document.getElementById('root'));
    }

}
new App();


