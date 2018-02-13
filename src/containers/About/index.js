import React, { Component } from 'react';
import PropTypes from 'prop-types';
const { MainPage } = global.COMPONENTS.layouts;

class About extends Component {
    render() {
        return (
            <MainPage>
                <div className="about">
                    <div className="avatar">
                        <figure>
                            <img src="http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-1/images/me.jpg" alt="1" />
                            <div className="links">
                                <a href="">s</a>
                                <a href="">s</a>
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
                                <span className="ti-user">s</span>
                                <div className="contact-info">
                                    <h4>Name:</h4>
                                    <p>Sam Martin</p>
                                </div>
                            </div>
                            <div className="item">
                                <span className="ti-user">s</span>
                                <div className="contact-info">
                                    <h4>Name:</h4>
                                    <p>Sam Martin</p>
                                </div>
                            </div>
                            <div className="item">
                                <span className="ti-user">s</span>
                                <div className="contact-info">
                                    <h4>Name:</h4>
                                    <p>Sam Martin</p>
                                </div>
                            </div>
                            <div className="item">
                                <span className="ti-user">s</span>
                                <div className="contact-info">
                                    <h4>Name:</h4>
                                    <p>Sam Martin</p>
                                </div>
                            </div>
                            <div className="item">
                                <span className="ti-user">s</span>
                                <div className="contact-info">
                                    <h4>Name:</h4>
                                    <p>Sam Martin</p>
                                </div>
                            </div>
                        </div>
                        <div className="description">
                            <p>
                                I have more than 9 years of experience in the field of Graphic/ E Learning/Web Designing. Specialized in Adobe web & graphic designing tools and also in otheta tools. Professional in Corporate branding, Graphic designing, Web Designing, visualization, GUI, graphics & animations for e-learning, illustrations, web icons, flash web banner, flash intro animations, logos, brochures, posters etc.
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