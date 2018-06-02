//import external libs
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

//import internal libs
import './style.scss';

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
                        {/* <li><NavLink to='/resume'>Resume</NavLink></li> */}
                        {/* <li><NavLink to='/skills'>Skills</NavLink></li> */}
                        {/* <li><NavLink to='/portfolio'>Portfolio</NavLink></li> */}
                        {/* <li><NavLink to='/calendar'>Calendar</NavLink></li> */}
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                        {/* <li><NavLink to='/page'>Page</NavLink></li> */}
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                        <li><NavLink to='/auth/login'>Login</NavLink></li>
                        <li><NavLink to='/admin/home'>Admin</NavLink></li>
                    </ul>
                </nav>
                <div className='menu-footer'>
                    <ul>
                        <li>
                            <a target="_blank" href="https://www.facebook.com/steve.luong.5">
                                <i className="fa fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.youtube.com/channel/UCZQv-jc3EmDjxfZq5SEwuQQ">
                                <i className="fa fa-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.topcv.vn/xem-cv/f5a04956d682fe06145f3f4f73715afc">
                                <i className="fa fa-laptop"></i>
                            </a>
                        </li>
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