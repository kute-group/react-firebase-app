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
        description: 'We will take your customers on an amazing journey from the very first second of using your product. Our custom designs offer an alluring and straightforward path to learning more about your company and opting for your services.',
        link: '#',
    },
    {
        title: 'Front-end Development',
        icon: 'code',
        description: 'Looks great, loads fast, works with out a tiny hiccup – here is how your final product will look like. We create interfaces users can not help, but love. Each product is made with great care to make it look equally stunning on large desktop screens and mobile devices.',
        link: '#',
    },
    {
        title: 'DevOps',
        icon: 'cloud',
        description: 'we practice the agile approach to software development, allowing our compact teams to build enterprise-level, high-delivery products with fewer people involved and less hours billed. We offer our customers to experience the same benefits with our DevOps Advisory Service',
        link: '#',
    },
    {
        title: 'Technical Support',
        icon: 'flag',
        description: 'Your business is in the middle on an unexpected crisis. Perhaps there has been a reported security breach. Maybe your site has experienced a huge spike in traffic and suddenly went awol from an unexpected performance load. A payment form is not working, information is not rendered properly on your landing page.',
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