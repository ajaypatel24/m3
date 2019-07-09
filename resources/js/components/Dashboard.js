import React from 'react';
import {Button, Carousel, Col, Container, Jumbotron, Row, Card, ListGroup, ListGroupItem  } from 'react-bootstrap';
import SignUpForm from './Register';
import '../../sass/test.css'

const width = '22rem';

export default class Dashboard extends React.Component {

    render() {
        return (
            <Container className="mt-4">
                <Row>
                    <Col lg="12">


                        <Row>
                            <Col lg="4">
                                <h1 className="WebsiteHeader">Projet M3</h1>
                                <p>m Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged. It was popularised in
                                    the 1960s with the rele</p>
                                <Button onClick={document.getElementById("signup")}>Sign Up</Button>
                            </Col>

                            <Col lg="8">
                                <img
                                    src={window.location.origin + "/img/1.jpg"}
                                    width="100%"
                                    height="100%"/>
                            </Col>


                        </Row>


                    </Col>


                </Row>

                <Row>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </Row>

                {/*
                <Row id="Circulaire">
                    <Carousel className="hello">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={window.location.origin + "/img/pie.png"}
                                alt="First slide"
                                width="100"
                                height="100"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={window.location.origin + "/img/pie.png"}
                                alt="Third slide"
                                width="100"
                                height="100"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={window.location.origin + "/img/pie.png"}
                                alt="Third slide"
                                width="100"
                                height="100"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
                */}

                <Row>
                    <Col lg="6">
                    <h1 className="WebsiteHeader">Economie Circulaire</h1>
                    <p>m Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the rele</p>
                    </Col>
                </Row>
                <Row>
                    <br/>
                    <br/>

                </Row>

                <Row>
                    <Col lg="4">
                        <Card style={{width: width}}>
                            <Card.Img responsive variant="top" src={window.location.origin + "/img/pie.png"}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Cras justo odio</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card style={{width: width}}>
                            <Card.Img variant="top" src={window.location.origin + "/img/pie.png"}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Cras justo odio</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg="4">
                        <Card style={{width: width}}>
                            <Card.Img variant="top" src={window.location.origin + "/img/pie.png"}/>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Cras justo odio</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </Row>

                <Row id="Signup">
                    <Col lg="8">
                        <Jumbotron>
                            <h1>Projet M3</h1>
                            <p id="jumbo-text">
                                lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
                    <Col lg="4">
                        <SignUpForm/>
                    </Col>
                </Row>

            </Container>
        );
    }
}


