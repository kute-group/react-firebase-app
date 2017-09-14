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
import FontAwesome from 'react-fontawesome';
//import internal libs
const { layouts: {Main} } = global.COMPONENTS;
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
        let {todo} = props;
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
        let {list} = this.state;
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
        let {list, loading} = this.state;
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
                        <Button onClick= {() => this.onEdit(val) } color="primary" className='pull-right'>Edit</Button>{' '}
                        <Button onClick= {() => this.onDelete(val) } color="danger" className='pull-right'>Delete</Button>
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
            <Main>
                <Container>
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

                    <Row>
                        <Col>.col</Col>
                        <Col>.col</Col>
                        <Col>.col</Col>
                        <Col>.col</Col>
                    </Row>
                    <Row>
                        <Col xs="3">.col-3</Col>
                        <Col xs="auto">.col-auto - variable width content</Col>
                        <Col xs="3">.col-3</Col>
                    </Row>
                </Container>
                hello abc  <Button color="danger">Danger!</Button>
                <div>
                    <p>List Based</p>
                    <Nav>
                        <NavItem>
                            <NavLink href="#">Link</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Link</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Another Link</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink disabled href="#">Disabled Link</NavLink>
                        </NavItem>
                    </Nav>
                    <hr />
                    <p>Link Based</p>
                    <Nav>
                        <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
                    </Nav>
                    <Progress value="44" />
                    <Alert color="success">
                        <strong>Well done!</strong> You successfully read this important alert message.
                    </Alert>
                    <Alert color="info">
                        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                    </Alert>
                </div>
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem active>Home</BreadcrumbItem>
                    </Breadcrumb>
                    <Breadcrumb>
                        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                        <BreadcrumbItem active>Library</BreadcrumbItem>
                    </Breadcrumb>
                    <Breadcrumb>
                        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                        <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                        <BreadcrumbItem active>Data</BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </Main>
        );
    }
}

Home.propTypes = {

};

export default connect(mapStateToProps)(Home)