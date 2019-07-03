import React from "react";
import { render } from "react-dom";
import {Carousel, Form, Jumbotron, Button, Card} from "react-bootstrap"
import '../../sass/test.css'
import axios from "axios";





export default class Profile extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            person: [],
        }
    }

    goHome = () => {
        location.href = '/#/profile';

    }

    /*
    dataRetrieve () {


        let id = localStorage.getItem('UID');
        axios.get('/contact/' + id, {

        })
            .then(function (response) {
                console.log(response.data)
                this.setState( {person: response.data} )
                console.log(this.state.person)

            })
            .catch(function (error) {
                console.log(error);
            });



    }

     */




    componentWillMount() {
        let id = localStorage.getItem('UID');
        axios.get('/contact/' + id )
            .then(function (response) {
                this.setState( {person: response.data} )

            })
            .catch(function (error) {
                console.log(error);
            });

    }


    render() {
        return (
            <Card className="text-center">


                {this.state.person.map(attribute => {
                    return (
                        <tr>
                            <th>{attribute.name}</th>
                            <th>{attribute.email}</th>
                            <th>{attribute.uid}</th>
                            <th></th>
                        </tr>
                    )

                })
                }



                <Card.Header className="DNE">Dangerous</Card.Header>
                <Card.Body>
                    <Card.Title className="Goyard gotta lotta racks">404 Error</Card.Title>

                    <Card.Text>
                        <p>{this.state.person}</p>
                    </Card.Text>

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
