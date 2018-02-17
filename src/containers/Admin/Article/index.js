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

//import external libs
const { layouts: { MainPage, AuthPage }, SEO } = global.COMPONENTS;


class Register extends Component {
    render() {
        return (
            <MainPage>
                <SEO url="register" />
                <AuthPage page="register">
                    <FormGroup >
                        <Label >Fullname</Label>
                        <Input placeholder="Enter your fullname" onChange={(value) => this.onChangeInputs(value, 'title')}  />
                    </FormGroup>
                    <FormGroup >
                        <Label >Username</Label>
                        <Input placeholder="Enter your username" onChange={(value) => this.onChangeInputs(value, 'title')}  />
                    </FormGroup>
                    <FormGroup >
                        <Label >Password</Label>
                        <Input placeholder="Enter your password" onChange={(value) => this.onChangeInputs(value, 'author')} />
                    </FormGroup>
                    <Button color="primary" onClick={() => this.onSubmit()}>Submit</Button>
                </AuthPage>
            </MainPage>
        );
    }
}

Register.propTypes = {

};

export default Register;