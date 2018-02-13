import React, { Component } from 'react';
import PropTypes from 'prop-types';
const { MainPage } = global.COMPONENTS.layouts;

class NotFound extends Component {
    render() {
        return (
            <MainPage>
                hello NotFound
            </MainPage>
        );
    }
}

NotFound.propTypes = {

};

export default NotFound;