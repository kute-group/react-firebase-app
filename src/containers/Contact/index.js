//import external libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import GoogleMapReact from 'google-map-react';



//import external libs
const { layouts: { MainPage }, SEO } = global.COMPONENTS;
const { images } = global.THEMES;
const AnyReactComponent = ({ text }) => <div className="marker"> 
    <img src={images.default.marker} width="80" style={{marginTop:'-85px'}}/>
</div>;


class Contact extends Component {
    render() {
        const height = window.innerHeight -160;
        console.log(height);
        return (
            <MainPage>
                <SEO url="contact" />
                <div className="main-block">
                    <div className="map">
                        <div className="header-block">
                            <span>Get in touch</span>
                            <h2>Contact me</h2>
                        </div>
                        <div className="map-block" style={{height:`${height}px`}}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: '' }}
                                defaultCenter={{lat: 21.036867, lng: 105.803688}}
                                defaultZoom={15}
                                className="maps"
                            >
                                <AnyReactComponent
                                    lat={21.036867}
                                    lng={105.803688}
                                    text={''}
                                />
                            </GoogleMapReact>

                        </div>
                    </div>
                </div>
            </MainPage>
        );
    }
}

Contact.propTypes = {

};

export default Contact;