//import external libs
import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';

//import internal libs
import './style.css';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>header block</h1>
                <ul className='menu'>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='about'>About</NavLink></li>
                    <li><NavLink to='/article/1'>News 1</NavLink></li>
                    <li><NavLink to='/article/2'>News 2</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Header;