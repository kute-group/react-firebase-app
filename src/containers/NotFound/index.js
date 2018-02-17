import React, { Component } from 'react';
import PropTypes from 'prop-types';
const { MainPage } = global.COMPONENTS.layouts;

class NotFound extends Component {
    render() {
        return (
            <MainPage>
               <div className="not-found main-block">
                    <h2>
                        <span>404</span><br/>
                        Page not found
                    </h2>
               </div>
            </MainPage>
        );
    }
}

NotFound.propTypes = {

};

export default NotFound;