import React from 'react';
import {Jumbotron, Container, Row, Col, Button} from 'react-bootstrap';

import {userService, authenticationService} from '@/_services';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            users: null
        };
    }

    componentDidMount() {
        userService.getAll().then(users => this.setState({users}));
    }

    render() {
        const {currentUser, users} = this.state;
        return (
            <div>
                <h1>Hi {currentUser.firstName}!</h1>
                <Container className="mt-4">
                    <Row>
                        <Col sm="8">
                            <Jumbotron>
                                <h1>Projet M3</h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged. It was popularised in
                                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including
                                    versions of Lorem Ipsum.
                                </p>
                                <p>
                                    <Button variant="primary">Learn more</Button>
                                </p>
                            </Jumbotron>


                        </Col>
                        <Col sm="4">

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export {HomePage};