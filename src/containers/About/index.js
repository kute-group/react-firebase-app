import React, { Component } from 'react';
import PropTypes from 'prop-types';
const { Main } = global.COMPONENTS.layouts;

class About extends Component {
    render() {
        return (
            <Main>
                hello about page
            </Main>
        );
    }
}

About.propTypes = {

};

export default About;