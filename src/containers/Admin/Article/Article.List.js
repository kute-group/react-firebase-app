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
class ArticleList extends Component {

    render() {
        return (
            <Col xs="12">
                <div className="content-header clearfix" >
                    <h1 className="col-md-6">
                        Bài viết
                    </h1>
                    <ol className="breadcrumb pull-right">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li><a href="#">Tables</a></li>
                        <li className="active">Simple</li>
                    </ol>
                </div>
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>bản tin xã hội</td>
                            <td>tin xã hội</td>
                            <td>Bá Hợp</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>bản tin xã hội</td>
                            <td>tin xã hội</td>
                            <td>Bá Hợp</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>bản tin xã hội</td>
                            <td>tin xã hội</td>
                            <td>Bá Hợp</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>bản tin xã hội</td>
                            <td>tin xã hội</td>
                            <td>Bá Hợp</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>id</th>
                            <th>Tiêu đề</th>
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