import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import moment from 'moment';
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
import Dropzone from 'react-dropzone';
// import { EditorState, ContentState, convertFromHTML } from 'draft-js';
import { convertToRaw, convertFromRaw, EditorState, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';

import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const CONSTANTS = global.CONSTANTS;
const { languages } = global.HELPERS;
const { actions, types } = global.REDUX;


//=== map state ===
function mapStateToProps({ post, global }) {
  return { post, global };
}
class ArticleForm extends Component {
  constructor(props) {
    super(props);
    const html = '';
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        loading: false,
        form: {},
        validation: {},
        editable: false,
        editorState,
        files: [],
      };
    }


    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.onChange = (editorState) => this.setState({ editorState });
  }

  componentDidMount() {
    const { location } = this.props;
    if (location.pathname.indexOf('/article/add') >= 0) {
      this.setState({ editable: false });
    } else if (location.pathname.indexOf('/article/edit') >= 0) {
      const ID = location.pathname.replace('/admin/article/edit/', '');
      this.props.dispatch(
        actions.post.fetchPostDetail(ID)
      );
      this.setState({ editable: true });
    }
  }
  componentWillReceiveProps(props) {
    let { global, post } = props;
    // ACTION FOR GLOBAL
    if (global.action == 'UPLOAD_SUCCESS') {
      this.setState({
        form: Object.assign({}, this.state.form, { avatar: global.url })
      });
    }
    if (global.action == 'POST_FETCH_DETAIL') {
      const html = post.detail.content || '';
      const contentBlock = htmlToDraft(html);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        const editorState = EditorState.createWithContent(contentState);
        this.setState({ form: post.detail, editorState });
      }
      
    }
    if (post.action === 'POST_SAVE') {
        console.log(post, 'post');
        this.props.dispatch(
            actions.global.showNoti({
                message: 'Cập nhật bản ghi thành công!',
                level: 'success'
            })
        );
    }
  }

onChangeInputs(value, field) {
  this.setState({
    form: Object.assign({}, this.state.form, { [field]: value.target.value })
  });
}

// convertToString(editorState) {
//     return JSON.stringify(convertToRaw(editorState.getCurrentContent()));
// }

// onEditorStateChange(editorState) {
//     // const stringValue = this.convertToString(editorState);
//     this.setState({
//         editorState: editorState,
//         form: Object.assign({}, this.state.form, { content: convertToRaw(editorState)})
//     });
// }
onEditorStateChange(editorState){
  this.setState({
    editorState,
  });
};

onDrop(files) {
  this.props.onUpload(files[0]);
  this.setState({
    files
  });
}

onSubmit(){
  const { form,editable, editorState } = this.state;
  form.status = form.status ? form.status : 'publish';
  form.avatar = form.avatar ? form.avatar : '';
  form.author = form.author ? form.author : '';
  form.content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  this.props.onSubmit(form, editable);
}
render() {
  const { form, editable, editorState } = this.state;
  console.log(this.state, 'state');
  console.log(this.props, 'props');
  return (
    <div className="form-block col-md-12">
      <div className="row">
        <div className="col-md-9">
          <div className="form-group">
            <input onChange={(val) => this.onChangeInputs(val, 'title')} className="form-control" value={form.title} />
          </div>

          <div className="form-group">
            <Editor
              wrapperClassName="admin-wrapper"
              editorClassName="admin-editor"
              editorState={editorState}
              onEditorStateChange={this.onEditorStateChange} />
          </div>
          <div className="block-publish">
            <div className="b-header">
              <h3>Mã nguồn</h3>
            </div>
            <div className="b-content">
              <textarea
                className="source-editor"
                disabled
                value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
              />
            </div>
          </div>

        </div>
        <div className="col-md-3 sidebar-block">
          <div className="block-publish">
            <div className="b-header">
              <h3>Đăng bài viết</h3>
            </div>
            <div className="b-content">
              <table>
                <tr>
                  <td className="icon"><i className="fa fa-info-circle"></i></td>
                  <td className="name">Trạng thái</td>
                  <td>
                    <select onChange={(val) => this.onChangeInputs(val, 'status')} value={form.status}>
                      {CONSTANTS.post_status.map(item => {
                        return (<option key={item} value={item}>{languages.show(item)}</option>);
                      })}

                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="icon"><i className="fa fa-calendar"></i></td>
                  <td className="name">Đăng</td>
                  <td>
                    {editable && <a>{moment(form.created).format('HH:SS DD/MM/YYYY')}</a>}
                    {!editable && <a>Ngay lập tức</a>}
                  </td>
                </tr>
                <tr>
                  <td className="icon"><i className="fa fa-eye"></i></td>
                  <td className="name">Lượt xem</td>
                  <td>
                    0
                     </td>
                </tr>
              </table>
              {/* <p>Trạng thái: Đã đăng</p>
                <div className="form-group">
                  <input onChange={(val) => this.onChangeInputs(val, 'author')} className="form-control" value={form.author} />
                </div> */}
            </div>
            <div className="b-footer">
              <a color="primary" onClick={() => this.onSubmit()} >Cập nhật</a>
            </div>
          </div>
          <div className="block-publish">
            <div className="b-header">
              <h3>Ảnh đại diện</h3>
            </div>
            <div className="b-content">
              <Dropzone
                className="dropzone"
                multiple={false}
                onDrop={this.onDrop.bind(this)}>
                <img src={this.state.form.avatar} />
              </Dropzone>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default withRouter(connect(mapStateToProps)(ArticleForm));