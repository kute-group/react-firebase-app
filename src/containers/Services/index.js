//import external libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from'react-fontawesome';

//import external libs
const { layouts: { MainPage }, SEO } = global.COMPONENTS;

class Services extends Component {
    render() {
        return (
            <MainPage>
                <SEO url="services" />
                <div className="services main-block">
                    <div className="list-services">
                        <div className="title-name">
                            <span>What I can Do Better</span>
                            <h2>Services</h2>
                        </div>
                        <div className="services-block">
                            <div className="item">
                                <FontAwesome
                                    name='user'
                                    size='3x'
                                />
                                <div className="services-info">
                                    <h4>Development:</h4>
                                    <p>You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures) as you notice that the idea of this exercise is to hypnotize yourself to be aware of two..</p>
                                </div>
                            </div>
                            <div className="item">
                                <FontAwesome
                                    name='user'
                                    size='3x'
                                />
                                <div className="services-info">
                                    <h4>Development:</h4>
                                    <p>You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures) as you notice that the idea of this exercise is to hypnotize yourself to be aware of two..</p>
                                </div>
                            </div>
                            <div className="item">
                                <FontAwesome
                                    name='user'
                                    size='3x'
                                />
                                <div className="services-info">
                                    <h4>Development:</h4>
                                    <p>You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures) as you notice that the idea of this exercise is to hypnotize yourself to be aware of two..</p>
                                </div>
                            </div>
                            <div className="item">
                                <FontAwesome
                                    name='user'
                                    size='3x'
                                />
                                <div className="services-info">
                                    <h4>Development:</h4>
                                    <p>You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures) as you notice that the idea of this exercise is to hypnotize yourself to be aware of two..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainPage>
        );
    }
}

Services.propTypes = {

};

export default Services;