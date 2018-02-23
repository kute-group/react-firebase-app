//import external libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

//import external libs
const { layouts: { MainPage }, SEO } = global.COMPONENTS;
const { images } = global.THEMES;
console.log(images, 'images');

class About extends Component {
    render() {
        return (
            <MainPage>
                <SEO url="about" />
                <div className="about main-block">
                    <div className="avatar">
                        <figure>
                            <img
                                src={images.default.avatar}
                                className="image-loading"
                                alt="avatar"
                            />
                            <div className="links">
                                <a target="_blank" href="https://www.facebook.com/steve.luong.5">
                                    <FontAwesome
                                        name='facebook'
                                        size='3x'
                                    />
                                </a>
                                <a target="_blank" href="https://www.youtube.com/channel/UCZQv-jc3EmDjxfZq5SEwuQQ">
                                    <FontAwesome
                                        name='youtube'
                                        size='3x'
                                    />
                                </a>
                                <a target="_blank" href="https://www.topcv.vn/xem-cv/f5a04956d682fe06145f3f4f73715afc">
                                    <FontAwesome
                                        name='laptop'
                                        size='3x'
                                    />
                                </a>
                                {/* <a href="">
                                    <FontAwesome
                                        name='apple'
                                        size='3x'
                                    />
                                </a> */}
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
                                I have more than 4 years of experience in the field of Web, Native/Hybird application Development. Now, I am working for FPT Software that is part of FPT Corporation. I am a full stack developer and familar with Agile/Scrum. With Front-End position, I have experience in ReactJs, AngularJs, VueJs; with Back-End: NodeJs, ExpressJs, FeathersJs, Python; with AWS DevOps Engineer: use almost all of the main services of the AWS stack (like EC2, S3, RDS,
VPC, IAM, ELB, Cloud watch, Route 53, Lamda and Cloud Formation) focused on high
availability, fault tolerance environment. I’m friendly with Infrastructure as code.</p><p> My favourite quote:
                            Running a marathon is far more
                            mental than physical. A person’s ability
                            to run a marathon—or do anything
                            hard—is more a reflection of their level
                            of confidence than their actual ability
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