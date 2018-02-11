//import external libs
import React, { Component } from 'react';

//import internal libs
import Header from '../Header';
import Footer from '../Footer';
import './style.css';

class Main extends Component {
    render() {
        return (
            <div className='wrap'>
                <Header/>
                <div className='main'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main;