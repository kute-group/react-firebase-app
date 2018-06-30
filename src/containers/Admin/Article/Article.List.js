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
import { NavLink } from 'react-router-dom';
import ReactPlaceholder from 'react-placeholder';

const { images } = global.THEMES;
class ArticleList extends Component {

    //=== RENDER FUNCTIONS ===
    renderRow() {
        let { list, loading } = this.props;
        if (loading) return null;
        if (list === 'null' || list === null) return null;
        else {
            let data = [];
            list.map((val, key) => {
                data.push(
                    <tr key={`row-${key}`} >
                        <td className="td-check"><input type="checkbox" /></td>
                        <td className="td-title">
                            <NavLink className="title" onClick={()=>this.props.onEdit(val.key)} to={`/admin/article/edit/${val.key}`}>{val.title}</NavLink>
                            <div className="toggle-actions">
                                <ul>
                                    <li><NavLink to={`/admin/article/edit/${val.key}`}>Chỉnh sửa</NavLink> <span>|</span></li>
                                    <li><a className="danger-link" onClick={()=>this.props.onDelete(val.key)}>Xoá tạm</a><span>|</span></li>
                                    <li><NavLink to={`/admin/article/edit/${val.key}`}>Sao chép</NavLink></li>
                                </ul>
                            </div>
                        
                        </td>
                        <td>
                            <img className="thumb" src={(typeof(val.avatar) !== 'undefined' && val.avatar !== '') ? val.avatar : images.default.imageDefault}/></td>
                        <td>tin xã hội</td>
                        <td>{val.author}</td>
                    </tr>
                );
            });
            return (<tbody>{data}</tbody>);
        }
    }

    renderLoading(){
        const colSpan=5;
        return(
            <tbody>
                <tr>
                    <td colSpan={colSpan}>
                        <ReactPlaceholder type='media' ready={false} rows={4}>1</ReactPlaceholder>
                    </td>
                </tr>
                <tr>
                    <td colSpan={colSpan}>
                        <ReactPlaceholder type='media' ready={false} rows={4}>1</ReactPlaceholder>
                    </td>
                </tr>
                <tr>
                    <td colSpan={colSpan}>
                        <ReactPlaceholder type='media' ready={false} rows={4}>1</ReactPlaceholder>
                    </td>
                </tr>
            </tbody>
        );
    }

    render() {
        return (
            <Col xs="12">
                <div className="block-filter">
                    Page:
                    <select name="" id="">
                        <option value="">10</option>
                        <option value="">10</option>
                        <option value="">10</option>
                    </select>
                </div>
                
                <table className="table-list">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tiêu đề</th>
                            <th>Hình ảnh</th>
                            <th>Danh mục</th>
                            <th>Tác giả</th>
                        </tr>
                    </thead>
                    {this.props.loading ? this.renderLoading() : this.renderRow()}
                    <tfoot>
                        <tr>
                            <th>ID</th>
                            <th>Tiêu đề</th>
                            <th>Hình ảnh</th>
                            <th>Danh mục</th>
                            <th>Tác giả</th>
                        </tr>
                    </tfoot>
                </table>
                <div className="block-pagination">
                    <p className="total-item pull-left col-md-6">Có 5 sản phẩm</p>
                    <ul className="pull-right pagination">
                        <li className="page-item"><a className="page-link">1</a></li>
                        <li className="page-item active"><a className="page-link">1</a></li>
                        <li className="page-item"><a className="page-link">1</a></li>
                        <li className="page-item"><a className="page-link">1</a></li>
                    </ul>
                </div>
            </Col>
        );
    }
}

export default ArticleList;