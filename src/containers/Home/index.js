//import external libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Button,
    Nav,
    NavItem,
    NavLink,
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
//import internal libs

const { layouts: { MainPage }, SEO } = global.COMPONENTS;
const { actions, types } = global.REDUX;
//=== map state ===
function mapStateToProps({ todo }) {
    return { todo }
}
class Home extends Component {
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

    componentWillMount() {
        this.props.dispatch(
            actions.todo.fetchTodo()
        )
        this.setState({ loading: true });
    }

    componentWillReceiveProps(props) {
        let { todo } = props;
        if (todo.action == 'TODO_FETCH') {
            this.setState({
                loading: false,
                list: todo.list
            })
        } else if (todo.action == 'TODO_SAVE') {
            this.setState({ loading: false, form: { title: '', author: '' } });
            this.props.dispatch(
                actions.todo.fetchTodo()
            )
        }
        else if (todo.action == 'TODO_DELETE') {
            this.setState({ loading: false });
            this.props.dispatch(
                actions.todo.fetchTodo()
            )
        }

    }
    //=== ACTION FUNCTIONS ===
    onEdit(ID) {
        console.log(ID, 'ID');
        let { list } = this.state;
        this.setState({
            editable: true,
            form: Object.assign({}, list[ID], { todoId: ID })
        })
    }

    onDelete(ID) {
        this.setState({ loading: true });
        this.props.dispatch(
            actions.todo.deleteTodo(ID)
        )
    }

    onChangeInputs(value, field) {
        this.setState({
            form: Object.assign({}, this.state.form, { [field]: value.target.value })
        })
    }

    onSubmit() {
        this.setState({ loading: true, editable: false });
        this.props.dispatch(
            actions.todo.saveTodo(this.state.form, this.state.editable)
        )
    }

    //=== RENDER FUNCTIONS ===
    renderSong() {
        let { list, loading } = this.state;
        if (loading) return 'Loading...';
        if (list === 'null' || list === null) return null;
        else {
            let data = [];
            Object.keys(list).map((val) => {
                data.push(
                    <ListGroupItem key={val}>
                        <FontAwesome
                            className='super-crazy-colors'
                            name='rocket'
                            size='2x'
                            spin
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />

                        Song: {list[val].title}, author: {list[val].author}
                        <Button onClick={() => this.onEdit(val)} color="primary" className='pull-right'>Edit</Button>{' '}
                        <Button onClick={() => this.onDelete(val)} color="danger" className='pull-right'>Delete</Button>
                    </ListGroupItem>
                );
            });
            return (
                <div>
                    <h1>List songs from firebase: </h1>
                    <ListGroup>
                        {data}
                    </ListGroup>
                </div>
            );
        }
    }
    render() {
        return (
            <MainPage>
                <SEO url="home" />
                <div className="home">
                    <div className="intro">
                        <div className="content">
                            <Typist avgTypingDelay={100} cursor={{show: false}}>
                                <h1> 
                                    <span> Hello I’m </span>
                                    <Typist.Delay ms={500} />
                                     Steve Luong 
                                </h1>
                                <Typist.Delay ms={500} />
                                <h2>Web/Mobile Developer, DevOps Engineer </h2>
                                <Typist.Delay ms={700} />
                                <div className="button-large">
                                    <a href="#">Download my CV</a>
                                </div>
                            </Typist>
                        </div>
                    </div>
                </div>
                {/* <Container>
                    <Row>
                        <Col xs="6">
                            <h1>Song Form </h1>
                            <Form>
                                <FormGroup >
                                    <Label >Title</Label>
                                    <Input onChange={(value) => this.onChangeInputs(value, 'title') } value={this.state.form.title} />
                                </FormGroup>
                                <FormGroup >
                                    <Label >Author</Label>
                                    <Input onChange={(value) => this.onChangeInputs(value, 'author') } value={this.state.form.author} />
                                </FormGroup>
                                <Button color="primary" onClick={() => this.onSubmit() }>Submit</Button>
                            </Form>
                        </Col>
                        <Col xs="6">
                            {this.renderSong() }
                        </Col>
                    </Row>
                </Container> */}
            </MainPage>
        );
    }
}

Home.propTypes = {

};

export default connect(mapStateToProps)(Home)