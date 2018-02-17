//import external libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

//import external libs
const { layouts: { MainPage }, SEO } = global.COMPONENTS;


class Contact extends Component {
    render() {
        return (
            <MainPage>
                <SEO url="contact" />
                <div className="main-block">
                    <div className="contact">
                        <div className="header-block">
                            <span>Get in touch</span>
                            <h2>Contact me</h2>
                        </div>
                        <div className="map-block"></div>
                    </div>
                </div>
            </MainPage>
        );
    }
}

Contact.propTypes = {

};

export default Contact;