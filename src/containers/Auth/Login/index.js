//import external libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
import Typist from 'react-typist';
import FontAwesome from 'react-fontawesome';
import { NavLink } from 'react-router-dom';

//import internal libs

const { layouts: { MainPage, AuthPage }, SEO } = global.COMPONENTS;
const { actions, types } = global.REDUX;
//=== map state ===
function mapStateToProps({ todo }) {
    return { todo }
}
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null,
            loading: false,
            form: {
                title: '',
                author: ''
            },
            validation: {
                title: '',
                author: ''
            },
            editable: false,
        };
    }
    render() {
        return (
            <MainPage>
                <SEO url="login" />
                <AuthPage page="login">
                    <FormGroup >
                        <Label >Username</Label>
                        <Input placeholder="Enter your username" onChange={(value) => this.onChangeInputs(value, 'title')} value={this.state.form.title} />
                    </FormGroup>
                    <FormGroup >
                        <Label >Password</Label>
                        <Input placeholder="Enter your password" onChange={(value) => this.onChangeInputs(value, 'author')} value={this.state.form.author} />
                    </FormGroup>
                    <Button color="primary" onClick={() => this.onSubmit()}>Submit</Button>
                </AuthPage>
            </MainPage>
        );
    }
}

Login.propTypes = {

};

export default connect(mapStateToProps)(Login)