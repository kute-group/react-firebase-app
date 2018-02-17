//import external libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import internal libs
const { layouts: { MainPage }, SEO } = global.COMPONENTS;

class Article extends Component {
    render() {
        console.log(this.props,'props');
        return (
            <MainPage>
                <SEO url="post" />
                <div className="post main-block">
                    
                    <div className="header-block">
                        <span>My blog</span>
                        <h2>Contact me</h2>
                    </div>
                    {JSON.stringify(this.props)}
                </div>
            </MainPage>
        );
    }
}

Article.propTypes = {

};

export default Article;