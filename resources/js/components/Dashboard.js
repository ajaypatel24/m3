import React from 'react';
import {Button, Carousel, Col, Container, Jumbotron, Row, Card, ListGroup, ListGroupItem, Image  } from 'react-bootstrap';
import SignUpForm from './Authentication/Register';
import '../../sass/test.css'

const width = '22rem';

let element = document.getElementById("signup");


/**
 * Home page users see before they login, Introduction to the service including an explanation of
 * some key concepts (maybe)
 */
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
                                {
                                    /** Image can be replaced with anything suitable
                                banner that spans page is the best option */
                                }
                                <img
                                    src={window.location.origin + "/img/1.jpg"}
                                    width="100%"
                                    height="100%"/>
                            </Col>


                        </Row>


                    </Col>


                </Row>

                {/**
                 * breakpoints for spacing to ensure elements are not too close together
                 */}
                <Row>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </Row>



                {/** Section to explain the concept of economie circulaire,
                     include graphs or diagrams to complement the text


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




                {/** Graphs that go with economie circulaire, uses bootstrap Card
                 * and ListGroupItem to create small image + text cards which
                 * convey information in a modern way
                 *
                 *



                 */}
                <Row>

                    {/**
                     General Form to add Cards

                     <Col>
                        <Card>
                        <Card.Img />
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>text</Card.Text>
                        </Card.Body>
                        <ListGroup>
                            <ListGroupItem>Item</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link>Link</Card.Link>
                            <Card.Link>Link</Card.Link>
                        </Card.Body>
                        </Card>
                     </Col>
                     */}


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

                {/** Section with register block and some extra information,
                   * might also be a good idea to make a seperate component
                   * with just the registration form like other websites **/}
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
                    {/**
                     Registration component
                     */}
                    <Col lg="4">
                        <SignUpForm/>
                    </Col>
                </Row>

            </Container>
        );
    }
}


