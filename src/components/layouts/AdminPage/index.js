//import external libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import NotificationSystem from 'react-notification-system';
import { NavLink } from 'react-router-dom';
import 'react-placeholder/lib/reactPlaceholder.css';
//import internal libs
const LANG = global.LANGUAGES[global.LANG];
//=== map state ===
function mapStateToProps({  global, post }) {
    return { global, post };
}
class AdminPage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        const { global, post } = nextProps;
        // ACTION FOR GLOBAL
        if(global.action === 'SHOW_NOTI' && global.noti.level !=='') {
            console.log('hello');
            this.fireNotification(global.noti);
        }

    }
    fireNotification(noti) {
        if (!this.noti) {
            this.noti = this.refs.notificationSystem;
        }
        if (this.noti) {
            if (
                noti &&
                noti.message &&
                noti.message.indexOf('CLIENT-01') !== -1
            )
                return;
            this.noti.addNotification(noti);
        }
    }
    render() {
        return (
            <div className='wrap-admin theme-adminLTE skin-blue'>
                <header className="main-header clearfix">
                    <a className="logo">
                        <span className="logo-mini">KUTE</span>
                        <span className="logo-lg">
                            <b>Admin</b>KUTE
                        </span>
                    </a>
                    <nav className="nav-static-top">
                        <a className="sidebar-toggle">
                            <FontAwesome
                                className='icon-bar'
                                name='bars'
                            />
                        </a>
                        <div className="navbar-custom-menu pull-right">
                            <ul>
                                <li>
                                    <a href="#">
                                        <FontAwesome
                                            className='icÍon-bar'
                                            name='envelope'
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FontAwesome
                                            className='icon-bar'
                                            name='flag'
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FontAwesome
                                            className='icon-bar'
                                            name='bell'
                                        />
                                    </a>
                                </li>
                                <li className="user">
                                    <a href="#">
                                        <img className="user-image" src="https://adminlte.io/themes/AdminLTE/dist/img/user2-160x160.jpg" alt="" />
                                        <span>Luong Ba Hop</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FontAwesome
                                            className='icon-bar'
                                            name='gear'
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <div className="main-sidebar">
                    <div className="user-panel">
                        <div className="left-image pull-left">
                            <a href="#"><img className="img-circle" src="https://adminlte.io/themes/AdminLTE/dist/img/user2-160x160.jpg" /></a>
                        </div>
                        <div className="right-info">
                            <a href="#">Luong Ba Hop</a>
                            <p>
                                <FontAwesome
                                    className='status text-success'
                                    name='circle'
                                />
                                Online
                            </p>
                        </div>
                    </div>
                    <div className="search-form">
                        <input type="text" />
                    </div>

                    <nav className="sidebar-menu">
                        <ul>
                            <li>{LANG.main_navigation}</li>

                            <li className="item">
                                <NavLink to="/admin/home" >
                                    <FontAwesome
                                        className='item'
                                        name='home' />
                                    Trang chủ
                                </NavLink>
                            </li>
                            <li className="item">
                                <NavLink to="/admin/article" >
                                    <FontAwesome
                                        className='item'
                                        name='th' />
                                    Bài viết
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/project" >
                                    <FontAwesome
                                        className='item'
                                        name='pie-chart' />
                                    Dự án
                                </NavLink>
                            </li>
                        </ul>
                        <ul>
                            <li>Labels</li>
                            <li className="item bg-green">
                                <NavLink to='/'>
                                    <FontAwesome
                                        className='item'
                                        name='eye' />
                                    View Site
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='main-content'>
                    {this.props.children}
                </div>
                <NotificationSystem ref="notificationSystem" />
            </div>
        );
    }
}

export default connect(mapStateToProps)(AdminPage);