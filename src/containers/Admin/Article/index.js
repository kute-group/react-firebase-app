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
import ArticleList from './Article.List';
import ArticleForm from './Article.Form';

const { layouts: { MainPage, AdminPage }, SEO } = global.COMPONENTS;
const { actions, types } = global.REDUX;


//=== map state ===
function mapStateToProps({ post }) {
    return { post };
}
class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null,
            loading: false,
            form: {
                title: '',
                author: '',
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
        );
        this.setState({ loading: true });
    }

    componentWillReceiveProps(props) {
        let { post } = props;
        if (post.action == 'POST_FETCH') {
            this.setState({
                loading: false,
                list: post.list
            });
        } else if (post.action == 'POST_SAVE') {
            this.setState({ loading: false, form: { title: '', author: '' } });
            this.props.dispatch(
                actions.post.fetchPost()
            );
        }
        else if (post.action == 'POST_DELETE') {
            this.setState({ loading: false });
            this.props.dispatch(
                actions.post.fetchPost()
            );
        }

    }
    //=== ACTION FUNCTIONS ===

    onEdit(ID) {
        let { list } = this.state;
        this.setState({
            editable: true,
            form: Object.assign({}, list[ID], { key: ID })
        });
    }

    onDelete(ID) {
        this.setState({ loading: true });
        this.props.dispatch(
            actions.post.deletePost(ID)
        );
    }

    onEditorStateChange(content) {
        this.setState({
            form: Object.assign({}, this.state.form, { content })
        });
    }

    onSubmit(form) {

        this.props.dispatch(
            actions.post.savePost(form, this.state.editable)
        );
        this.setState({ loading: true, editable: false, form });
    }
    //=== RENDER FUNCTIONS ===

    renderHeader() {
        let title = 'Bài viết';
        let showButton = true;
        if (location.pathname.indexOf('/admin/article/add') >= 0) {
            title = 'Thêm bài viết';
            showButton = false;
        } else if (location.pathname.indexOf('/admin/article/edit/') >= 0) title = 'Chỉnh sửa bài viết';
        return (
            <div className="col-md-6 left-block">
                <h3>{title}</h3>
                {showButton && <NavLink to="/admin/article/add">Viết bài mới</NavLink>}
            </div>
        );
    }

    render() {
        const { location } = this.props;
        const { list, loading, form } = this.state;
        return (
            <AdminPage>
                <SEO url="admin/article" />
                <div className="content-block row">
                    <div className="content-header clearfix col-md-12" >
                        <div className="row">
                            {this.renderHeader(location)}
                            <div className="breadcrumbs col-md-6">
                                <a href="/admin/article" className=" pull-right"> <i className="fa fa-arrow-right"></i> Bài viết </a>
                                <a href="/admin/home" className=" pull-right"> <i className="fa fa-home"></i> Trang chủ </a>
                            </div>
                        </div>
                    </div>
                    {location.pathname === '/admin/article' && <ArticleList
                        onDelete={(ID) => this.onDelete(ID)}
                        onEdit={(ID) => this.onEdit(ID)}
                        list={list}
                        loading={loading} />
                    }
                    {(location.pathname.indexOf('/admin/article/add') >= 0
                        || location.pathname.indexOf('/admin/article/edit/') >= 0
                    ) && <ArticleForm
                            form={form}
                            onSubmit={(form) => this.onSubmit(form)}
                        />}
                </div>
            </AdminPage>
        );
    }
}

Article.propTypes = {

};

export default connect(mapStateToProps)(Article);