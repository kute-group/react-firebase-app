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
        top: '200px',
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
const IMAGES = [
    {
        image: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/35067551_185346588791576_3492654644759363584_o.jpg?_nc_cat=0&oh=58ca913b5d8e31df5ecc1ee23ce47236&oe=5BA728A3',
        color: 'Tím',
    },
    {
        image: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/35114028_185345158791719_9054988011518820352_o.jpg?_nc_cat=0&oh=8a5c36181079371272a584a7238fafa3&oe=5BBAC512'
    },
    {
        image: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/35026735_184074752252093_6517712961597865984_o.jpg?_nc_cat=0&oh=60d351b9def95d6b2abadc4162370bd6&oe=5BB0ADE2'
    },
    {
        image: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/35067551_185346588791576_3492654644759363584_o.jpg?_nc_cat=0&oh=58ca913b5d8e31df5ecc1ee23ce47236&oe=5BA728A3'
    },
    {
        image: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/35114028_185345158791719_9054988011518820352_o.jpg?_nc_cat=0&oh=8a5c36181079371272a584a7238fafa3&oe=5BBAC512'
    },
    {
        image: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/35026735_184074752252093_6517712961597865984_o.jpg?_nc_cat=0&oh=60d351b9def95d6b2abadc4162370bd6&oe=5BB0ADE2'
    },
    {
        image: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/35067551_185346588791576_3492654644759363584_o.jpg?_nc_cat=0&oh=58ca913b5d8e31df5ecc1ee23ce47236&oe=5BA728A3'
    },
    {
        image: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/35114028_185345158791719_9054988011518820352_o.jpg?_nc_cat=0&oh=8a5c36181079371272a584a7238fafa3&oe=5BBAC512'
    },
    {
        image: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/35026735_184074752252093_6517712961597865984_o.jpg?_nc_cat=0&oh=60d351b9def95d6b2abadc4162370bd6&oe=5BB0ADE2'
    },
    {
        image: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/35067551_185346588791576_3492654644759363584_o.jpg?_nc_cat=0&oh=58ca913b5d8e31df5ecc1ee23ce47236&oe=5BA728A3'
    },
    {
        image: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/35114028_185345158791719_9054988011518820352_o.jpg?_nc_cat=0&oh=8a5c36181079371272a584a7238fafa3&oe=5BBAC512'
    },
    {
        image: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/35026735_184074752252093_6517712961597865984_o.jpg?_nc_cat=0&oh=60d351b9def95d6b2abadc4162370bd6&oe=5BB0ADE2'
    }

];

//=== map state ===
function mapStateToProps({ todo, global, post }) {
    return { todo, global, postStore: post }
}
class Silk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null,
            loading: false,
            form: {
                fullname:'',
                address:'',
                phone:'',
                note:'',

            },
            validation: {
                title: '',
                author: ''
            },
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

    changeInput(value, field) {
        this.setState({
            form: Object.assign({}, this.state.form, { [field]: value.target.value })
        });
    }

    addGoogleSheet() {
        console.log(actions,'actions');
        this.props.dispatch(
            actions.post.addGoogleSheet(this.state.form)
        )
    };

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

    viewProduct() {
        this.refs.cartPopup.show();
    }

    renderItem() {
        const { postStore } = this.props;
        if (postStore.list === null || postStore.list.length === 0) return false;
        const listServives = postStore.list.map((item, index) => {
            return (
                <div className="item" key={index}>
                    <img onClick={() => this.viewProduct()} src={IMAGES[Math.floor(Math.random() * 10)].image || IMAGES[0].image} className="image" />
                </div>
            );
        })
        return (<div className="post-block">{listServives}</div>);
    }

    //=== RENDER FUNCTIONS ===
    render() {
        const height = window.innerHeight - 150;
        return (
            <MainPage>
                <SEO url="home" />
                <div className="home" style={{ backgroundImage: `url(${images.default.silk})` }}>
                    <div className="intro">
                        <div className="posts main-block">
                            <div className="list-posts">
                                <div className="header-block">
                                    <span>Khăn xuất khẩu</span>
                                    <h2>Khăn tắm, khăn spa, khăn mặt, khăn đầu</h2>
                                    <Typist avgTypingDelay={30} cursor={{ show: false }}>
                                        <p>

                                            Bạn muốn sang trọng quý phái, bạn muốn mềm mại êm ái, bạn muốn cảm giác thoả mái mỗi sáng thức dậy, sau khi tắm xong, sau khi đi spa hay tập thể hình.

                                            Đầy đủ kích thước, phù hợp với mọi nhu cầu.
                                            - Khăn 100% cotton, khăn modal mềm mại, mượt mà.
                                            - Không mẫn cảm, kích ứng với da.
                                            - ship toàn quốc
                                            P/s:
                                            - đừng ngại liên hệ shop, chúng tôi phục vụ 24/24.
                                            - ưu đãi lớn cho đại lý, khách sạn.
                                        </p>
                                    </Typist>
                                    Giá chỉ:
                                   - 279k cho 8 chiếc
                                   - 309k cho 10 chiếcư 
                                </div>
                                <Scrollbars
                                    autoHide
                                    autoHeight
                                    autoHeightMin={height}
                                    hideTracksWhenNotNeeded
                                    renderTrackVertical={props => <div {...props} style={trackLightStyle} />}
                                    renderThumbVertical={props => <div {...props} style={thumbLightStyle} />}
                                >
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
                                <img className="images-product" onClick={() => this.viewProduct()} src={IMAGES[Math.floor(Math.random() * 10)].image || IMAGES[0].image} />
                            Bạn muốn sang trọng quý phái, bạn muốn mềm mại êm ái, bạn muốn cảm giác thoả mái mỗi sáng thức dậy, sau khi tắm xong, sau khi đi spa hay tập thể hình.
    
                                Đầy đủ kích thước, phù hợp với mọi nhu cầu.
                                - Khăn 100% cotton, khăn modal mềm mại, mượt mà.
                                - Không mẫn cảm, kích ứng với da.
                                - ship toàn quốc
                                P/s:
                                - đừng ngại liên hệ shop, chúng tôi phục vụ 24/24.
                                - ưu đãi lớn cho đại lý, khách sạn.
                            </div>
                           <div className="cart-field">
                                <div className="form-group">
                                    <label>Họ và tên</label>
                                    <input value={this.state.form.fullname} onChange={(value)=>this.changeInput(value,'fullname')}  className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <input value={this.state.form.phone}  onChange={(value)=>this.changeInput(value,'phone')} className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Địa chỉ</label>
                                    <textarea value={this.state.form.address}  onChange={(value)=>this.changeInput(value,'address')} className="form-control"></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Ghi chú</label>
                                    <textarea value={this.state.form.note}  onChange={(value)=>this.changeInput(value,'note')} className="form-control"></textarea>
                                </div>
                                <a className="btn btn-primary" onClick={() => this.addGoogleSheet()}>submit </a>
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