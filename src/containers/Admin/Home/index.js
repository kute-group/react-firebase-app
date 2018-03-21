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
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

//import internal libs

const { layouts: { MainPage, AdminPage }, SEO } = global.COMPONENTS;
const { actions, types } = global.REDUX;
//=== map state ===
function mapStateToProps({ post }) {
    return { post, post }
}
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null,
            loading: false,
            form: {
                title: '',
                author: '',
                content:EditorState.createEmpty()
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
            actions.post.fetchPost()
        )
        this.setState({ loading: true });
    }

    componentWillReceiveProps(props) {
        let { post } = props;
        if (post.action == 'POST_FETCH') {
            this.setState({
                loading: false,
                list: post.list
            })
        } else if (post.action == 'POST_SAVE') {
            this.setState({ loading: false, form: { title: '', author: '' } });
            this.props.dispatch(
                actions.post.fetchPost()
            )
        }
        else if (post.action == 'POST_DELETE') {
            this.setState({ loading: false });
            this.props.dispatch(
                actions.post.fetchPost()
            )
        }

    }
    //=== ACTION FUNCTIONS ===
    onEdit(ID) {
        console.log(ID, 'ID');
        let { list } = this.state;
        this.setState({
            editable: true,
            form: Object.assign({}, list[ID], { postId: ID })
        })
    }

    onDelete(ID) {
        this.setState({ loading: true });
        this.props.dispatch(
            actions.post.deletePost(ID)
        )
    }

    onChangeInputs(value, field) {
        this.setState({
            form: Object.assign({}, this.state.form, { [field]: value.target.value })
        })
    }
    onEditorStateChange(content){
        console.log(content, 'content');
        this.setState({
            form: Object.assign({}, this.state.form, { content})
        })
    }

    onSubmit() {
        this.setState({ loading: true, editable: false });
        this.props.dispatch(
            actions.post.savePost(this.state.form, this.state.editable)
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

                        sss: {list[val].title}, author: {list[val].author}
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
            <AdminPage>
                <SEO url="login" />
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
                                <Editor wrapperClassName="wrapper-class"
                                editorState={this.state.form.content}
                                    editorClassName="editor-class"
                                    toolbarClassName="toolbar-class"
                                    onEditorStateChange={(e)=>this.onEditorStateChange(e)}
                                 />
                                <Button color="primary" onClick={() => this.onSubmit() }>Submit</Button>
                            </Form>
                        </Col>
                        <Col xs="6">
                            {this.renderSong() }
                        </Col>
                    </Row>
                </Container>
            </AdminPage>
        );
    }
}

Home.propTypes = {

};

export default connect(mapStateToProps)(Home)