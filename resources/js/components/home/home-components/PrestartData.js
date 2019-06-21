import {Form, Table, Row, Col} from "react-bootstrap";
import {DynamicTable} from "../home-components/DynamicTable";
import React from "react";
import axios from 'axios';

export default class PrestartData extends React.Component {


    constructor(props) {
        super(props); //required



        this.state = {

            prestart: [],

        };
    }


    componentDidMount() {
        let uid = localStorage.getItem('UID');
        console.log(uid);
        axios.get('/contact/'+uid)
            .then(response => {
                console.log('/contact/'+uid);
                console.log(response.data);
                this.setState( {prestart: response.data} );

            });


        console.log(this.state.prestart);
    }



    render() {


        return (

            <div>


                    {this.state.prestart.map(attribute => {
                        return (


                            <Row>

                                <Col lg="5">
                                    <h1>Profile</h1>
                                </Col>

                            <Col lg="7">
                            <div>

                                <p>{attribute.name}</p>
                                <p>{attribute.email}</p>
                                <p>{attribute.organization}</p>
                                <p>{attribute.fonction}</p>
                                <p>{attribute.telephone}</p>
                                <p>{attribute.telephone2}</p>
                                <p>{attribute.Poste_telephone}</p>
                                <p>{attribute.langue}</p>
                                <p></p>
                            </div>
                            </Col>


                            </Row>
                        )

                    })
                    }











            </div>




        );

    }
}



