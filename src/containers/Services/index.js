//import external libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

//import external libs
const { layouts: { MainPage }, SEO } = global.COMPONENTS;
const items = [
    {
        title: 'Website Development',
        icon: 'laptop',
        description: 'I am a freelancer at UpWorks.com, this is the best place to find online job. I am willing to join projects that use Wordpress, PHP, ReactJs, AngularJs. I have a solid knowledge about HTML/CSS/JAVASCRIPT. I also get jobs from VietNamese, If you are have an idea that need a website, let\'s contact me',
        link: '#',
    },
    {
        title: 'Mobile Development',
        icon: 'mobile',
        description: 'I have experience in hybird web app development. I use Ionic, React Native in my mobile projects. With the platforms, I can build IOS, Android apps very quickly. Preogessive web app also is my favirous platform to build mobile app that use wb technology.',
        link: '#',
    },
    {
        title: 'Hosting/Domain',
        icon: 'cloud',
        description: 'If you have a website and need hosting and domain to push that web go global. I suggest for you some cheap and quality plans. I also help you to maintaince your website and help your site live 24/7',
        link: '#',
    },
    {
        title: 'Trainning',
        icon: 'flag',
        description: 'If you are student or someone that have interested in building your own website or mobile app. Please contact me, I have strong experience in trainning at a IT center. In my jobs, I ussually train my new coworkers by all my heart.',
        link: '#',
    }
]

class Services extends Component {
    renderItem() {
        const listServives = items.map((item, index) => {
            return (
                <div className="item">
                    <FontAwesome
                        name={item.icon}
                        size='5x'
                    />
                    <div className="services-info">
                        <h4>{item.title}</h4>
                        <p className="description">
                            <span>{item.description}</span>
                            <a href="#">
                                Read more...
                                <FontAwesome
                                    name='arrow-circle-right'
                                />
                            </a>
                        </p>
                    </div>
                </div>
            );
        })
        return (<div className="services-block">{listServives}</div>);
    }
    render() {
        return (
            <MainPage>
                <SEO url="services" />
                <div className="services main-block">
                    <div className="list-services">
                        <div className="header-block">
                            <span>What I can Do Better</span>
                            <h2>Services</h2>
                        </div>
                        {this.renderItem()}
                    </div>
                </div>
            </MainPage>
        );
    }
}

Services.propTypes = {

};

export default Services;