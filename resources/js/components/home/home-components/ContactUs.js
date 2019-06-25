import {Col, Row, Form, InputGroup} from "react-bootstrap";
import React from "react";
import axios from 'axios';

export default class PrestartData extends React.Component {


    constructor(props) {
        super(props); //required


        this.state = {

            prestart: [],
            TableData: [],

        };
    }


    componentDidMount() {
        let uid = localStorage.getItem('UID');

        axios.get('/inventaire/'+uid)
            .then(response => {
                this.setState({TableData: response.data})
                console.log(this.state.TableData);

            });


    }


    render() {


        return (

            <div>

                {this.state.TableData.map(data => {
                    this.data.map(row => {
                        return (

                            <th>
                                <tr>{row.Num_affiche}</tr>
                                <tr>{row.Quantite_an}</tr>


                            </th>

                        )


                    })



                })};


            </div>


        );

    }
}



