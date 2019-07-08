import React from "react";
import { render } from "react-dom";
import {Carousel, Form, Jumbotron, Button, Card} from "react-bootstrap"
import '../../../sass/test.css'


/**
 * 404 error page, displays whenever a non existant route
 * is selected
 *
 * Uses Bootstrap Buttons and Cards to display the error,
 * the Button redirects to either the login dashboard page
 * or the profile page depending on if the user is authenticated
 * or not
 */

export default class NoMatch extends React.Component {
    constructor(props) {
        super(props);

    }

    /**
     * Redirect function
     */
    goHome = () => {
            location.href = '/#/profile';
    }


    render() {
        return (

            <Card className="text-center">
                <Card.Header className="DNE">Projet M3</Card.Header>
                <Card.Body>
                    <Card.Title className="NotFound404">404 Error</Card.Title>


                    <Card.Text className="DNE">
                        The page you requested does not exist
                    </Card.Text>
                    <Button variant="primary" onClick={this.goHome}>Return Home</Button>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>

        );
    }
}
