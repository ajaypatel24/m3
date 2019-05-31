import React from 'react';
import {Button, Card, Col, Container, Form, FormGroup, Row} from 'react-bootstrap';
import SignUpForm from '../auth/Register';

export default class Dashboard extends React.Component
{
    render()
    {
        return (
            <Container className="mt-4">
                <Row>
                    <Col sm>info for website</Col>
                    <Col sm>
                        <SignUpForm/>
                    </Col>
                </Row>
            </Container>
        );
    }
}


