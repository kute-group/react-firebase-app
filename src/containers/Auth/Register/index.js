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
const { validators } = global.HELPERS;


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {},
            error: {},
        };
    }
    onChangeInputs(value, field) {
        this.setState({
            form: Object.assign({}, this.state.form, { [field]: value.target.value })
        })
    }
    onSubmit() {
        const { form } = this.state;
        if (this.doValidate()) this.doRegister();
    }
    doValidate() {
        const RULES = [
            { 
                fullname:{
                    require: true,
                    minLength: 5,
                } 
            },
            { 
                username:{
                    require: true,
                    minLength: 5,
                    maxLength: 10
                } 
            },
            { 
                password: {
                    require: true,
                    minLength: 5
                } 
            },
        ];
        const { form } = this.state;
        const vali = validators.validate(RULES, form);
        if(!vali.status) {
            this.setState({error: vali});
            return false;
        }
        return true;
    }
    doRegister() {
        console.log(this.state.form);
    }
    renderTextHelper(field) {
        const { error } = this.state;
        let text = '';
        if(typeof(error[field]) !=='undefined' && error[field] !=='') text = error[field];
        return (<p>{text}</p>)
    }
    renderClassHelper(field) {
        const { error } = this.state;
        let text = '';
        if(typeof(error[field]) !=='undefined' && error[field] ==='') text = 'success';
        if(typeof(error[field]) !=='undefined' && error[field] !=='') text = 'error';
        return text;
    }
    render() {
        return (
            <MainPage>
                <SEO url="register" />
                <AuthPage page="register">
                    <FormGroup className={this.renderClassHelper('fullname')} >
                        <Label >Full name </Label>
                        <Input
                            className="form-input valid-feedback"
                            placeholder="Enter your full name"
                            onChange={(value) => this.onChangeInputs(value, 'fullname')}
                            value={this.state.form.title} />
                            {this.renderTextHelper('fullname')}
                    </FormGroup>
                    <FormGroup className={this.renderClassHelper('username')} >
                        <Label >Username </Label>
                        <Input
                            className="form-input valid-feedback"
                            placeholder="Enter your username"
                            onChange={(value) => this.onChangeInputs(value, 'username')}
                            value={this.state.form.title} />
                            {this.renderTextHelper('username')}
                    </FormGroup>
                    <FormGroup className={this.renderClassHelper('password')} >
                        <Label >Password </Label>
                        <Input
                            type="password"
                            className="form-input"
                            placeholder="Enter your password"
                            onChange={(value) => this.onChangeInputs(value, 'password')}
                            value={this.state.form.author} />
                            {this.renderTextHelper('password')}
                        
                    </FormGroup>
                    <Button className="pull-right" color="primary" onClick={() => this.onSubmit()}>Submit</Button>
                </AuthPage>
            </MainPage>
        );
    }
}

Register.propTypes = {

};

export default Register;