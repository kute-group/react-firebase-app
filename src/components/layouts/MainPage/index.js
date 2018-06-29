//import external libs
import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import NotificationSystem from 'react-notification-system';

//import internal libs
import Header from '../Header';
import Footer from '../Footer';
import './style.css';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            times: 0,
        }
    }
    componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 100);
    }
    timer() {
        this.setState({
            times: this.state.times + 100
        })
        if(this.state.times > 1000) { 
          clearInterval(this.intervalId);
        }
      }
    componentWillReceiveProps(props){
        const {times} = this.state;
        
        if(times > 1000) clearInterval(this.timerID);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div className='wrap theme-default'>
                {(this.state.times > 0 && this.state.times <= 1000) &&
                    <div className="progress">
                        <Progress animated color="warning" value={this.state.times} />
                    </div>
                }
                <Header />
                <div className='main'>
                    {this.props.children}
                </div>
                <NotificationSystem ref="notificationSystem" />
            </div>
        );
    }
}

export default MainPage;