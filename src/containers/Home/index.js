//import external libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, Nav, NavItem, NavLink, Progress, Alert, Breadcrumb, BreadcrumbItem, Container, Row, Col} from 'reactstrap';
//=== map state ===
function mapStateToProps({ todo }) {
    return { todo }
}
class Home extends Component {
    render() {
        console.log(this.props, 'todo');
        return (
            <div>
                <Container>
                    <Row>
                        <Col>.col</Col>
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
                    <Row>
                        <Col xs="6">.col-6</Col>
                        <Col xs="6">.col-6</Col>
                    </Row>
                    <Row>
                        <Col xs="6" sm="4">.col-6.col-sm-4</Col>
                        <Col xs="6" sm="4">.col-6.col-sm-4</Col>
                        <Col sm="4">.col.col-sm-4</Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>.col.col-sm-6.col-sm-push-2.col-sm-pull-2.col-sm-offset-2</Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>.col.col-sm-12.col-md-6.col-md-offset-3</Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>.col.col-sm.col-sm-offset-1</Col>
                        <Col sm={{ size: 'auto', offset: 1 }}>.col.col-sm.col-sm-offset-1</Col>
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
            </div>
        );
    }
}

Home.propTypes = {

};

export default connect(mapStateToProps)(Home)