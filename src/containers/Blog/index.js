//import external libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import { Scrollbars } from 'react-custom-scrollbars';
import { NavLink } from 'react-router-dom';

//import external libs
const { layouts: { MainPage }, SEO } = global.COMPONENTS;
const { actions, types } = global.REDUX;
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
//=== map state ===
function mapStateToProps({ post }) {
  return { postStore: post }
}
class Blog extends Component {
  componentWillMount() {
      this.props.dispatch(
          actions.post.fetchPost()
      )
      this.setState({ loading: true });
  }
   string_to_slug (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}
    renderItem() {
         const {postStore} = this.props;
         if( postStore.list === null || postStore.list.length === 0) return false;
         console.log(postStore.list,'ddvvvv');
        const listServives = postStore.list.map((item, index) => {
            return (
                <div className="item" key={index}>
                    <img src='https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/35882174_191264301533138_1864950520196628480_n.jpg?_nc_cat=0&oh=d95f67f7197288ff26afba6403ab07ec&oe=5BB26089' className="image"/>
                    <div className="post-info">
                        <h4>{item.title}</h4>
                        <p className="description">
                            {item.description}
                            <NavLink to={`/article/${this.string_to_slug(item.title)}`}>
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
        const {postStore} = this.props;
        console.log(postStore,'dd');
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

export default connect(mapStateToProps)(Blog);