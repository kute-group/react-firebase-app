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
import Dropzone from 'react-dropzone'
import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';
import { EditorState } from 'draft-js';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
class ArticleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            form: props.form,
            validation: {},
            editable: false,
            editorState: EditorState.createEmpty(),
            files:[]
        };
    }
    onChangeInputs(value, field) {
        this.setState({
            form: Object.assign({}, this.state.form, { [field]: value.target.value })
        });
    }
    onEditorStateChange: Function = (editorState) => {
        this.setState({
            editorState,
        });
    };
    onDrop(files) {
        this.setState({
            files
        });
    }
    render() {
        console.log(this.state, 'hop');
        const { form } = this.state;
        return (
            <div className="form-block col-md-12">
                <div className="row">
                    <div className="col-md-9">
                        <div className="form-group">
                            <input onChange={(val) => this.onChangeInputs(val, 'title')} className="form-control" value={form.title} />
                        </div>

                        <div className="form-group">
                            <Editor
                                editorState={this.state.editorState}
                                wrapperClassName="admin-wrapper"
                                editorClassName="admin-editor"
                                onEditorStateChange={this.onEditorStateChange}
                            />
                        </div>


                    </div>
                    <div className="col-md-3 sidebar-block">
                        <div className="block-publish">
                            <div className="b-header">
                                <h3>Đăng bài viết</h3>
                            </div>
                            <div className="b-content">
                                <p>Trạng thái: Đã đăng</p>
                                <p>Trạng thái: Đã đăng</p>
                                <div className="form-group">
                                    <input onChange={(val) => this.onChangeInputs(val, 'author')} className="form-control" value={form.author} />
                                </div>
                            </div>
                            <div className="b-footer">
                                <a color="primary" onClick={() => this.props.onSubmit(form)} >Cập nhật</a>
                            </div>
                        </div>
                        <div className="block-publish">
                            <div className="b-header">
                                <h3>Ảnh đại diện</h3>
                            </div>
                            <div className="b-content">
                                <Dropzone onDrop={this.onDrop.bind(this)}>
                                </Dropzone>
                                <ul>
                                    {
                                        this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ArticleForm;