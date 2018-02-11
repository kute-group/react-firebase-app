//import external libs
import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';

//import internal libs
import './style.css';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className="logo">
                    <img src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/25551862_1514378232014017_8031161563457491441_n.jpg?oh=16f664cf34949bc3c0cf7910156fbd9e&oe=5ADD71FE"/>
                </div>
                <ul className='menu'>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='about'>About</NavLink></li>
                    <li><NavLink to='/article/12s'>Services</NavLink></li>
                    <li><NavLink to='/article/22'>Resume</NavLink></li>
                    <li><NavLink to='about1'>Skills</NavLink></li>
                    <li><NavLink to='/article/122'>Portfolio</NavLink></li>
                    <li><NavLink to='/article/2s2'>Calendar</NavLink></li>
                    <li><NavLink to='abou2t'>Blog</NavLink></li>
                    <li><NavLink to='/article/1ff'>Page</NavLink></li>
                    <li><NavLink to='/article/2f'>Contact</NavLink></li>
                </ul>
                <div className='menu-footer'>
                    <ul>
                        <li><NavLink to='/'><i className="fa fa-facebook"></i> 1</NavLink></li>
                        <li><NavLink to='about'><i className="fa fa-facebook"></i> 2</NavLink></li>
                    </ul>
                    <div className='copyright'>
                        <p>© Steve.Luong <br/> all rights reserved</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;