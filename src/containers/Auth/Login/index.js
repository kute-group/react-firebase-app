//import external libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
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
    Input,
    ListGroup,
    ListGroupItem,
    Form,
    FormGroup,
    Label,
    FormFeedback,
    FormText
} from 'reactstrap';
import Typist from 'react-typist';
import FontAwesome from 'react-fontawesome';
import { NavLink } from 'react-router-dom';
// import { browserHistory } from './react-router';

//import internal libs

const { layouts: { MainPage, AuthPage }, SEO } = global.COMPONENTS;
const { actions, types } = global.REDUX;
const { validators } = global.HELPERS;
//=== map state ===
function mapStateToProps({ todo, auth }) {
    return { todo, auth }
}
class Login extends Component {
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
        });
    }
    onSubmit() {
        const { form } = this.state;
        // this.props.history.push('/admin/home');
        // if (this.doValidate()) this.doLogin();
        this.doLogin();
    }
    doValidate() {
        const RULES = [
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
    doLogin() {
        console.log(this.state.form);
        this.props.dispatch(
            actions.auth.login(this.state.form)
        );
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
                <SEO url="login" />
                <AuthPage page="login" >
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

Login.propTypes = {

};

export default withRouter(connect(mapStateToProps)(Login));