import React from 'react';
import {Col, Form, Row, Button ,Table } from "react-bootstrap";
import {FormattedHTMLMessage, FormattedMessage} from "react-intl";
import Helmet from 'react-helmet';

import Stepper from './Stepper'
import axios from "axios";

/**
 * Table de transport used to store all transportation
 * uses by the company, will begin development soon
 */
export default class TransportConfirm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            TableData: [],

        };


        this.getSubmissions = this.getSubmissions.bind(this);


    }


    getSubmissions = () => {
        axios.get('/dep/' ,)
            .then(response => {
                this.setState({TableData: response.data})
                console.log("defined");

            });
    }


    componentWillMount = () => {
        axios.get('/dep/' ,)
            .then(response => {
                this.setState({TableData: response.data})
                console.log("defined");

            });
    }



    render()
    {


        return (
            <div>
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-md-12 column">
                            <div>
                                <Button onClick={this.test}>TEST</Button>

                                <Table>
                                    <thead>
                                    <tr>
                                        <th>Procede</th>
                                        <th>Quantite an</th>
                                        <th>Unite</th>
                                        <th>Num Affiche</th>
                                        <th>Procede</th>
                                        <th>Quantite an</th>
                                        <th>Unite</th>
                                        <th>Num Affiche</th>
                                        <th>Procede</th>
                                        <th>Quantite an</th>
                                        <th>Unite</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                {

                                    this.state.TableData.map((rowdata, i) =>
                                        <div>
                                            {rowdata.map((subRowData, k) =>


                                                <tr>

                                                    <td >{subRowData.TypeVehicule_idVehicule}</td>
                                                    <td >{subRowData.Categorie_idCategorie}</td>
                                                    <td >{subRowData.idDeplacement}</td>
                                                    <td >{subRowData.Libelle_Deplacement}</td>
                                                    <td >{subRowData.Origine}</td>
                                                    <td >{subRowData.Destination}</td>
                                                    <td >{subRowData.Nb_km_AR}</td>
                                                    <td >{subRowData.Nb_voyageurs}</td>
                                                    <td >{subRowData.Nb_voyageurs_An}</td>
                                                    <td >{subRowData.Type_Deplacement}</td>
                                                    <td >{subRowData.Emission_GES}</td>

                                                </tr>

                                            )
                                            }
                                        </div>
                                    )
                                }
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}
