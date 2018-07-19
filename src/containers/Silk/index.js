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
import { Scrollbars } from 'react-custom-scrollbars';
import SkyLight from 'react-skylight';
//import internal libs

const { layouts: { MainPage }, SEO } = global.COMPONENTS;
const { actions, types } = global.REDUX;
const { images } = global.THEMES;
export const trackLightStyle = {
    background: '#e9e9e9',
    position: 'absolute',
    width: '4px',
    right: '2px',
    bottom: '2px',
    top: '2px',
};

export const thumbLightStyle = {
    position: 'relative',
    display: 'block',
    width: '100%',
    cursor: 'pointer',
    backgroundColor: '#a8a8a8',
    height: '30px',
    transform: 'translateY(0px)',
};

const styles = {
    overlayStyles: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 99,
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    dialogStyles: {
        width: '900px',
        height: 'auto',
        left: '50%',
        top: '25%',
        margin: '-150px 0 0 -450px',
        opacity: '1',
        borderRadius: '3px',
        backgroundColor: '#fff',
        boxShadow: '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)',
        padding: '25px'
    },
    title: {
        margin: '0',
        padding: '0',
        color: '#07cb79'
    },
    closeButtonStyle: {
        cursor: 'pointer',
        position: 'absolute',
        fontSize: '1.8em',
        right: '10px',
        top: '8px',
        color: 'black'
    },
    expandBtn: {
        position: 'absolute',
        left: '-46px',
        top: '5px',
        width: '42px',
        height: '32px',
        display: 'block',
        background: 'transparent'
    }
};

//=== map state ===
function mapStateToProps({ todo, global, post }) {
    return { todo, global, postStore: post };
}
class Silk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                fullname:'',
                address:'',
                phone:'',
                note:'',
            },
            product: null,
            editable: false,
        };
    }

    // componentWillMount() {
    //     this.props.dispatch(
    //         actions.todo.fetchTodo()
    //     )
    //     this.setState({ loading: true });
    // }
    componentWillMount() {
        this.props.dispatch(
            actions.post.fetchPost()
        );
        this.setState({ loading: true });
    }

    componentWillReceiveProps(props) {
        let { todo } = props;
        if (todo.action == 'TODO_FETCH') {
            this.setState({
                loading: false,
                list: todo.list
            });
        } else if (todo.action == 'TODO_SAVE') {
            this.setState({ loading: false, form: { title: '', author: '' } });
            this.props.dispatch(
                actions.todo.fetchTodo()
            );
        }
        else if (todo.action == 'TODO_DELETE') {
            this.setState({ loading: false });
            this.props.dispatch(
                actions.todo.fetchTodo()
            );
        }

    }

    //=== ACTION FUNCTIONS ===
    viewProduct(product) {
        this.setState({product});
        this.refs.cartPopup.show();
    }

    onEdit(ID) {
        let { list } = this.state;
        this.setState({
            editable: true,
            form: Object.assign({}, list[ID], { todoId: ID })
        });
    }

    onDelete(ID) {
        this.setState({ loading: true });
        this.props.dispatch(
            actions.todo.deleteTodo(ID)
        );
    }

    onChangeInputs(value, field) {
        this.setState({
            form: Object.assign({}, this.state.form, { [field]: value.target.value })
        });
    }

    onSubmit() {
        this.setState({ loading: true, editable: false });
        this.props.dispatch(
            actions.todo.saveTodo(this.state.form, this.state.editable)
        );
    }

    changeInput(value, field) {
        this.setState({
            form: Object.assign({}, this.state.form, { [field]: value.target.value })
        });
    }

    addGoogleSheet() {
        this.props.dispatch(
            actions.post.addGoogleSheet(this.state.form)
        );
    }

    resetForm(){
        this.setState({form:{
            fullname:'',
            phone:'',
            address:'',
            note:''
        }});
    }

    string_to_slug(str) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to = "aaaaeeeeiiiioooouuuunc------";
        for (var i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes

        return str;
    }

    //=== RENDER FUNCTIONS ===
    renderItem() {
        const { postStore } = this.props;
        if (postStore.list === null || postStore.list.length === 0) return false;
        const listServives = postStore.list.map((item, index) => {
            return (
                <div className="item" key={index}>
                    <img onClick={() => this.viewProduct(item)} src={(typeof(item.avatar) !== 'undefined' && item.avatar !== '') ? item.avatar : images.default.imageDefault} className="image" />
                </div>
            );
        });
        return (<div className="post-block">{listServives}</div>);
    }

    render() {
        const height = window.innerHeight - 5;
        console.log(this.props,'product');
        return (
            <MainPage>
                <SEO url="home" />
                <div className="home" style={{ backgroundImage: `url(${images.default.silk})` }}>
                    <div className="intro">
                        <div className="posts main-block">
                            <div className="list-posts">
                                
                                <Scrollbars
                                    autoHide
                                    autoHeight
                                    autoHeightMin={height}
                                    hideTracksWhenNotNeeded
                                    renderTrackVertical={props => <div {...props} style={trackLightStyle} />}
                                    renderThumbVertical={props => <div {...props} style={thumbLightStyle} />}
                                >
                                    <div className="header-block product-intro">
                                        <span>Khăn xuất khẩu</span>
                                        <h2>Khăn tắm, khăn spa, khăn mặt, khăn đầu</h2>
                                        <Typist avgTypingDelay={5} cursor={{ show: false }}>
                                        <p>Bạn muốn sang trọng quý phái, bạn muốn mềm mại êm ái, bạn muốn cảm giác thoả mái mỗi sáng thức dậy,<br/> sau khi tắm xong, sau khi đi spa hay tập thể hình</p>
        
                                        <p>Đầy đủ kích thước, phù hợp với mọi nhu cầu.</p>
                                        <ul>
                                            <li>- Khăn 100% cotton, khăn modal mềm mại, mượt mà.</li>
                                            <li>- Không mẫn cảm, kích ứng với da.</li>
                                            <li>- ship toàn quốc</li>
                                        </ul>
                                        </Typist>
                                        Giá chỉ:
                                    - 279k cho 8 chiếc
                                    - 309k cho 10 chiếcư 
                                    </div>
                                    {this.renderItem()}
                                </Scrollbars>
                            </div>
                        </div>
                    </div>
                    <SkyLight
                        ref="cartPopup"
                        hideOnOverlayClicked={true}
                        dialogStyles={styles.dialogStyles}
                        overlayStyles={styles.overlayStyles}
                        titleStyle={styles.title}
                        closeButtonStyle={styles.closeButtonStyle}
                        title={'Đặt hàng online'}
                    >
                        <div className="product-popup">
                            <div className="info">
                                <img className="images-product" src={(this.state.product !== null && typeof(this.state.product.avatar) !== 'undefined' && this.state.product.avatar !== '') ? this.state.product.avatar : images.default.imageDefault}/>
                                
                                {(this.state.product !== null) && <div dangerouslySetInnerHTML={{__html: this.state.product.content || ''}} /> }
                                
                            </div>
                           <div className="cart-field">
                                <div className="form-group">
                                    <label>Họ và tên <span>(*)</span></label>
                                    <input placeholder="Họ và tên của anh/chị" value={this.state.form.fullname} onChange={(value)=>this.changeInput(value,'fullname')}  className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Số điện thoại <span>(*)</span></label>
                                    <input placeholder="Số điện thoại của anh/chị" value={this.state.form.phone}  onChange={(value)=>this.changeInput(value,'phone')} className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Địa chỉ <span>(*)</span></label>
                                    <textarea placeholder="Địa chỉ nhận hàng của anh/chị" value={this.state.form.address}  onChange={(value)=>this.changeInput(value,'address')} className="form-control"></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Ghi chú</label>
                                    <textarea placeholder="Thông tin thêm về đơn hàng của anh/chị" value={this.state.form.note}  onChange={(value)=>this.changeInput(value,'note')} className="form-control"></textarea>
                                </div>
                                <button className="btn submit btn-primary pull-right" onClick={() => this.addGoogleSheet()}>Gửi đơn hàng </button>
                                <button className="btn reset btn-danger pull-right" onClick={() => this.resetForm()}>Làm lại </button>
                           </div>

                        </div>
                    </SkyLight>
                </div>

            </MainPage>
        );
    }
}

Silk.propTypes = {

};

export default connect(mapStateToProps)(Silk);