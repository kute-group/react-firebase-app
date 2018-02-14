//import external libs
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

//import internal libs
import './style.css';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <nav className="main-menu">
                    <div className="logo">
                        <NavLink exact to='/'><img src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/25551862_1514378232014017_8031161563457491441_n.jpg?oh=16f664cf34949bc3c0cf7910156fbd9e&oe=5ADD71FE" /></NavLink>
                    </div>
                    <ul className='menu'>
                        <li><NavLink exact to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/services'>Services</NavLink></li>
                        <li><NavLink to='/resume'>Resume</NavLink></li>
                        {/* <li><NavLink to='/skills'>Skills</NavLink></li> */}
                        {/* <li><NavLink to='/portfolio'>Portfolio</NavLink></li> */}
                        {/* <li><NavLink to='/calendar'>Calendar</NavLink></li> */}
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                        {/* <li><NavLink to='/page'>Page</NavLink></li> */}
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </nav>
                <div className='menu-footer'>
                    <ul>
                        <li><NavLink to='/'><i className="fa fa-facebook"></i></NavLink></li>
                        <li><NavLink to='/'><i className="fa fa-youtube"></i></NavLink></li>
                        <li><NavLink to='/'><i className="fa fa-google"></i></NavLink></li>
                        <li><NavLink to='/'><i className="fa fa-apple"></i></NavLink></li>
                    </ul>
                    <div className='copyright'>
                        <p>© Steve Luong <br /> all rights reserved</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;