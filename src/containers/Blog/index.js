//import external libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Scrollbars } from 'react-custom-scrollbars';
import { NavLink } from 'react-router-dom';

//import external libs
const { layouts: { MainPage }, SEO } = global.COMPONENTS;
const items = [
    {
        title: 'Are You Famous Or Focused',
        category: 'Health',
        image: 'http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-1/images/blog/01.jpg',
        description: 'Become aware walking along the path of your life. Make it sensory rich and get comfortable with the idea. Imagine the feeling of your feet walking along the path and the sound',
        link: '/article/care-health',
    },
    {
        title: 'Are You Famous Or Focused',
        category: 'Health',
        image: 'http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-1/images/blog/01.jpg',
        description: 'Become aware walking along the path of your life. Make it sensory rich and get comfortable with the idea. Imagine the feeling of your feet walking along the path and the sound',
        link: '/article/care-health',
    },
    {
        title: 'Are You Famous Or Focused',
        category: 'Health',
        image: 'http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-1/images/blog/01.jpg',
        description: 'Become aware walking along the path of your life. Make it sensory rich and get comfortable with the idea. Imagine the feeling of your feet walking along the path and the sound',
        link: '/article/care-health',
    },
    {
        title: 'Are You Famous Or Focused',
        category: 'Health',
        image: 'http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-1/images/blog/01.jpg',
        description: 'Become aware walking along the path of your life. Make it sensory rich and get comfortable with the idea. Imagine the feeling of your feet walking along the path and the sound',
        link: '/article/care-health',
    },
    {
        title: 'Are You Famous Or Focused',
        category: 'Health',
        image: 'http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-1/images/blog/01.jpg',
        description: 'Become aware walking along the path of your life. Make it sensory rich and get comfortable with the idea. Imagine the feeling of your feet walking along the path and the sound',
        link: '/article/care-health',
    },
    {
        title: 'Are You Famous Or Focused',
        category: 'Health',
        image: 'http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-1/images/blog/01.jpg',
        description: 'Become aware walking along the path of your life. Make it sensory rich and get comfortable with the idea. Imagine the feeling of your feet walking along the path and the sound',
        link: '/article/care-health',
    },
    {
        title: 'Are You Famous Or Focused',
        category: 'Health',
        image: 'http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-1/images/blog/01.jpg',
        description: 'Become aware walking along the path of your life. Make it sensory rich and get comfortable with the idea. Imagine the feeling of your feet walking along the path and the sound',
        link: '/article/care-health',
    },
    {
        title: 'Are You Famous Or Focused',
        category: 'Health',
        image: 'http://themes.potenzaglobalsolutions.com/html/sam-martin/it/layout-1/images/blog/01.jpg',
        description: 'Become aware walking along the path of your life. Make it sensory rich and get comfortable with the idea. Imagine the feeling of your feet walking along the path and the sound',
        link: '/article/care-health',
    },
    
];
export const trackLightStyle = {
    background: '#e9e9e9',
    position: 'absolute',
    width: '4px',
    right: '2px',
    bottom: '2px',
    top: '2px',
  };
  
  export const thumbLightStyle = {
    position: 'relative',
    display: 'block',
    width: '100%',
    cursor: 'pointer',
    backgroundColor: '#a8a8a8',
    height: '30px',
    transform: 'translateY(0px)',
  };

class Blog extends Component {
    renderItem() {
        const listServives = items.map((item, index) => {
            return (
                <div className="item">
                    <img src={item.image} className="image"/>
                    <div className="post-info">
                        <h4>{item.title}</h4>
                        <p className="description">
                            {item.description}
                            <NavLink to={item.link}>
                                Read more...
                            </NavLink>
                        </p>
                    </div>
                </div>
            );
        })
        return (<div className="post-block">{listServives}</div>);
    }
    render() {
        const height = window.innerHeight -150;
        return (
            <MainPage>
                <SEO url="blog" />
                <div className="posts main-block">
                    <div className="list-posts">
                        <div className="header-block">
                            <span>My latest blog posts</span>
                            <h2>From the blog</h2>
                        </div>
                        <Scrollbars     
                            autoHide
                            autoHeight
                            autoHeightMin={height}
                            hideTracksWhenNotNeeded
                            renderTrackVertical={props => <div {...props} style={trackLightStyle} />}
                            renderThumbVertical={props => <div {...props} style={thumbLightStyle} />}
                        >
                            {this.renderItem()}
                        </Scrollbars>
                    </div>
                </div>
            </MainPage>
        );
    }
}

Blog.propTypes = {

};

export default Blog;