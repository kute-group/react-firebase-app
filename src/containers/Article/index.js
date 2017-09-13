//import external libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import internal libs
const { Main } = global.COMPONENTS.layouts;

class Article extends Component {
    render() {
        console.log(this.props,'props');
        return (
            <Main>
                {JSON.stringify(this.props)}
                hello Article PAGE
            </Main>
        );
    }
}

Article.propTypes = {

};

export default Article;