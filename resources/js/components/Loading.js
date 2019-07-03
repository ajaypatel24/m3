import React from "react";
import { render } from "react-dom";
import {Carousel, Form, Jumbotron, Button, Card, Spinner} from "react-bootstrap"
import '../../sass/test.css'





export default class Loading extends React.Component {
    constructor(props) {
        super(props);

    }




    render() {
        return (

            <div>
            <img
                src={window.location.origin + "/img/cadet_logo.svg"}
                width="90"
                height="90"
                className="d-inline-block align-top"
                alt="Cadet Logo"
            />
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
            </div>
        );
    }
}







