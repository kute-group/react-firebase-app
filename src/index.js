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
                        <Switch store ={store}>
                            <Route path='/' component = {pages.Home} exact={true}/>
                            <Route path='/about' component = {pages.About} />
                            <Route path='/article/:ID' component = {pages.Article} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
            , document.getElementById('root'));
    }

}
new App();


