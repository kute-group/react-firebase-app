//import external libs
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { NavLink } from 'react-router-dom';
//import internal libs


class AdminPage extends Component {
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
                          className='icon-bar'
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
                    <img className="user-image" src="https://adminlte.io/themes/AdminLTE/dist/img/user2-160x160.jpg" alt=""/>
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
              <a href="#"><img  className="img-circle" src="https://adminlte.io/themes/AdminLTE/dist/img/user2-160x160.jpg"/></a>
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
            <input type="text"/>
          </div>
          
          <nav className="sidebar-menu"> 
            <ul>
              <li>Main navigation</li>
              <li className="item">
                <a href="#home" >
                  <FontAwesome
                      className='item active' 
                      name='bars'/>
                  Article
                </a>
              </li>
              <li>
                <a href="#home"  className="active">
                  <FontAwesome
                      className='item'
                      name='bars'/>
                  Article
                </a>
              </li>
              <li>
                <a href="#home">
                  <FontAwesome
                      className='item'
                      name='bars'/>
                  Article
                </a>
              </li>
            </ul>
            <ul>
              <li>Labels</li>
              <li className="item bg-green">
                <NavLink  to='/'>
                  <FontAwesome
                      className='item active' 
                      name='bars'/>
                  View
                  </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className='main-content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default AdminPage;