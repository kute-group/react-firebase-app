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
                        <td><input type="checkbox" /></td>
                        <td>
                            <NavLink onClick={()=>this.props.onEdit(key)} to={`/admin/article/edit/${val.key}`}>{val.title}</NavLink>
                        </td>
                        <td>tin xã hội</td>
                        <td>{val.author}</td>
                        <td>
                            <a onClick={()=>this.props.onDelete(val.key)}>Xoá</a>{' '}
                            <NavLink onClick={()=>this.props.onEdit(key)} to={`/admin/article/edit/${val.key}`}>Sửa</NavLink>
                        </td>
                    </tr>
                );
            });
            return (<tbody>{data}</tbody>);
        }
    }
    render() {
        const {list} = this.props;
        console.log(list,'list');
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
                            <th>id</th>
                            <th>Tiêu đề</th>
                            <th>Danh mục</th>
                            <th>Tác giả</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    {this.renderRow()}
                    <tfoot>
                        <tr>
                            <th>id</th>
                            <th>Tiêu đề</th>
                            <th>Danh mục</th>
                            <th>Tác giả</th>
                            <th>Hành động</th>
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