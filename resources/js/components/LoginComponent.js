import React from 'react';
import {Col, Container, Jumbotron, Row} from 'react-bootstrap';
import SignUpForm from './Authentication/Register';
import SignIn from './Authentication/SignIn';


import '../../sass/test.css'

const width = '22rem';

let element = document.getElementById("signup");


/**
 * Home page users see before they login, Introduction to the service including an explanation of
 * some key concepts (maybe)
 */
export default class LoginComponent extends React.Component {

    render() {
        return (
            <Container className="mt-4">



                <Row>
                    <Col lg="8">
                        <Jumbotron>
                            hllohsfjkahfasjhfjkhaksdfhjksdjfkhjkdshjkfhkjsdhfkjdshfkjds
                        </Jumbotron>
                    </Col>
                    <Col lg="4">
                        <SignUpForm/>
                    </Col>

                </Row>

                <Row>
                    <Col lg="8">
                        <Jumbotron>
                            hllohsfjkahfasjhfjkhaksdfhjksdjfkhjkdshjkfhkjsdhfkjdshfkjds
                        </Jumbotron>
                    </Col>
                    <Col lg="4">
                        <SignIn/>
                    </Col>
                </Row>

            </Container>
        );
    }
}


