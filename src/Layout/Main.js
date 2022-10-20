import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Outlet} from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='2'>
                        <h3>Left Side</h3>
                    </Col>
                    <Col lg='7'>
                        <h3>Main</h3>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='3'>
                        <h3>Right Side</h3>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default Main;