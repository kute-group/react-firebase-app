import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
    render() {
        console.log(this.props,'props');
        return (
            <div>
                {JSON.stringify(this.props)}
                hello Article PAGE
            </div>
        );
    }
}

Article.propTypes = {

};

export default Article;