//import external libs
import React, { Component } from 'react';

//import internal libs
import './style.css';

class AdminPage extends Component {
  render() {
    return (
      <div className='wrap-admin'>
        <header className="header">
          <figure>
            <a href="#"><img src="http://teachyourself.vn/wp-content/uploads/2018/03/fullstack-logo.png"/></a>
          </figure>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#home">Article</a></li>
              <li><a href="#home">Project</a></li>
            </ul>
          </nav>
        </header>
        <div className='main'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default AdminPage;