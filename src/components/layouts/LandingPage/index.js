//import external libs
import React, { Component } from 'react';
import { Progress } from 'reactstrap';

//import internal libs


class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
    }
  
    componentWillReceiveProps(props){
       
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div className='wrap theme-landing'>
               dfdfd
            </div>
        );
    }
}

export default LandingPage;