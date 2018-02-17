//import external libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

//import external libs
const { layouts: { MainPage }, SEO } = global.COMPONENTS;
const items = [
    {
        title: 'UI/UX Design',
        icon: 'laptop',
        description: 'Become aware of the temperature, the sights, the sounds and enjoy walking along the path of your life. Make it sensory rich and get comfortable with the idea. Imagine the feeling of your feet walking along the path and the sound',
        link: '#',
    },
    {
        title: 'Clean Code',
        icon: 'code',
        description: 'Become aware of the temperature, the sights, the sounds and enjoy walking along the path of your life. Make it sensory rich and get comfortable with the idea. Imagine the feeling of your feet walking along the path and the sound',
        link: '#',
    },
    {
        title: 'Hosting/Domain',
        icon: 'cloud',
        description: 'Become aware of the temperature, the sights, the sounds and enjoy walking along the path of your life. Make it sensory rich and get comfortable with the idea. Imagine the feeling of your feet walking along the path and the sound',
        link: '#',
    },
    {
        title: 'Consult',
        icon: 'flag',
        description: 'Become aware of the temperature, the sights, the sounds and enjoy walking along the path of your life. Make it sensory rich and get comfortable with the idea. Imagine the feeling of your feet walking along the path and the sound',
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
                            {item.description}
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