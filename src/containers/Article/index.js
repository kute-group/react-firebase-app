//import external libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import internal libs
const { MainPage } = global.COMPONENTS.layouts;

class Article extends Component {
    render() {
        console.log(this.props,'props');
        return (
            <MainPage>
                {JSON.stringify(this.props)}
                hello Article PAGE
            </MainPage>
        );
    }
}

Article.propTypes = {

};

export default Article;