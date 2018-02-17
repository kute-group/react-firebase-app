//import external libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

//import external libs
const { layouts:{MainPage}, SEO } = global.COMPONENTS;

class About extends Component {
    render() {
        return (
            <MainPage>
                <SEO url="about" />
                <div className="about main-block">
                    <div className="avatar">
                        <figure>
                            <img src="http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-1/images/me.jpg" alt="1" />
                            <div className="links">
                                <a href="">
                                    <FontAwesome
                                        name='facebook'
                                        size='3x'
                                    />
                                </a>
                                <a href="">
                                    <FontAwesome
                                        name='youtube'
                                        size='3x'
                                    />
                                </a>
                                <a href="">
                                    <FontAwesome
                                        name='google'
                                        size='3x'
                                    />
                                </a>
                                <a href="">
                                    <FontAwesome
                                        name='apple'
                                        size='3x'
                                    />
                                </a>
                            </div>
                        </figure>
                    </div>
                    <div className="infomation">
                        <div className="title-name">
                            <span>Know about me</span>
                            <h2>About Me</h2>
                        </div>
                        <div className="contact-block">
                            <div className="item">
                                <FontAwesome
                                    name='user'
                                    size='3x'
                                />
                                <div className="contact-info">
                                    <h4>Name:</h4>
                                    <p>Steve Luong</p>
                                </div>
                            </div>
                            <div className="item">
                                <FontAwesome name='envelope' size='3x' />
                                <div className="contact-info">
                                    <h4>Email:</h4>
                                    <p>luonghop.lc@gmail.com</p>
                                </div>
                            </div>
                            <div className="item">
                                <FontAwesome name='phone' size='3x' />
                                <div className="contact-info">
                                    <h4>Phone:</h4>
                                    <p>01632 434 165</p>
                                </div>
                            </div>
                            <div className="item">
                                <FontAwesome name='calendar' size='3x' />
                                <div className="contact-info">
                                    <h4>Date of Birth:</h4>
                                    <p>27 Febuary 1993</p>
                                </div>
                            </div>
                            <div className="item">
                                <FontAwesome name='map' size='3x' />
                                <div className="contact-info">
                                    <h4>Address:</h4>
                                    <p>225 Quan Hoa, Cau Giay, Ha Noi</p>
                                </div>
                            </div>
                            <div className="item">
                                <FontAwesome name='address-card' size='3x' />
                                <div className="contact-info">
                                    <h4>Nationality:</h4>
                                    <p>Viet Nam</p>
                                </div>
                            </div>
                        </div>
                        <div className="description">
                            <p>
                                I have more than 4 years of experience in the field of E Learning/Web Development. Specialized in Adobe web & graphic designing tools and also in otheta tools. Professional in Corporate branding, Graphic designing, Web Designing, visualization, GUI, graphics & animations for e-learning, illustrations, web icons, flash web banner, flash intro animations, logos, brochures, posters etc.
                                </p> <p>
                                Creative Solution Provider as a Freelance Graphic Artist and a Dedicated, Team worker to Induce the Creative Juice among the colleagues with a View to deliver the Best and New in the business.
</p>
                        </div>
                    </div>
                </div>
            </MainPage>
        );
    }
}

About.propTypes = {

};

export default About;