//import external libs
import React, { Component } from 'react';
import {
    Button,
    Nav,
    NavItem,
    Progress,
    Alert,
    Breadcrumb,
    BreadcrumbItem,
    Container,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Form,
    FormGroup,
    Label,
    Input,
    FormFeedback,
    FormText
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
const TABS = [
    {
        title:'Login',
        path:'/auth/login',
        ID: 'login'
    },
    {
        title:'Register',
        path:'/auth/register',
        ID: 'register'
    }
];

const { images } = global.THEMES;

class AuthPage extends Component {

    renderTabs(){
        const { page } = this.props;
        const tabs = TABS.map((item,index)=>{
            return(<NavLink to={item.path}>{item.title}</NavLink>);
        })
        return(<div className="tabs">{tabs}</div>);
    }
    render() {
        return (
            <div className="auth" style={{backgroundImage: `url(${images.default.landing})`}}>
                <div className="auth-form">
                    <Container>
                        <Row>
                            <Col xs="12">
                               {this.renderTabs()}
                                <Form>
                                    {this.props.children}
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default AuthPage;