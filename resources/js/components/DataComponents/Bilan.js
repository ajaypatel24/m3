import {Col, Row, Form, InputGroup, Table } from "react-bootstrap";
import React from "react";
import axios from 'axios/index';
import Loading from "../Authentication/Loading";


/**
 * Energytable data displayed here to check what happens
 * when data is retrieved from the database, testing
 * how it is displayed
 */
export default class Bilan extends React.Component {


    constructor(props) {
        super(props); //required


        this.state = {

            prestart: [],
            TableData: [],
            g: 'heelo',
            isLoading: true,
            h: [],

        };


        this.test = this.test.bind(this);
    }


    /**
     * Here, the UID is retrieved from session storage and used to access the users information
     * from the /inventaire route controller method call. The data retrieved in then placed in the
     * TableData state array for access
     */
    componentWillMount() {

        let uid = sessionStorage.getItem('UID');
        axios.get('/inventaire/' + uid)
            .then(response => {
                this.setState({TableData: response.data})

                console.log(this.state.TableData)

            });

        this.sum();

    }

    componentDidMount() {

        this.setState({isLoading: false});
    }


    sum() {
        let id = sessionStorage.getItem('UID')
        axios.get('/bilan/' + id,)
            .then(response => {
                this.setState({h: response.data})

                console.log(this.state.h);
            });
    }

    /**
     * functionlity test method
     */
    test() {
        var tableData = new Array();
        var l = 1;
        let uid = sessionStorage.getItem('UID');
        axios.get('/inventaire/' + uid)
            .then(response => {
                this.setState({TableData: response.data})
                l = response.data.length;

                var i;
                for (i = 0; i < l; i++) {
                    tableData[i] = this.state.TableData[i][0];
                }

                console.log("defined");
                console.log(tableData[0]);


            });


    }


    render() {


        if (this.state.isLoading) {
            return (<Loading />);
        }

        return (
            <div>

                <br/>


                {

                    this.state.TableData.map((rowdata, i) =>
                        <div>
                            <Table>
                                <thead>
                                <tr>
                                    <th colSpan="4">Nom Organisation - Annee - Date </th>
                                </tr>
                                <tr>
                                    <th>Categorie d'Emissions</th>
                                    <th>Numeros</th>
                                    <th>Postes d'emissions</th>
                                    <th>Emissions de GES (kg)</th>
                                </tr>

                                </thead>

                                <tbody>
                                {rowdata.map((subRowData, k) =>


                                    <tr>

                                        <td >{subRowData.Nom_procede}</td>
                                        <td >{subRowData.Quantite_an} {subRowData.Unite_an}</td>
                                        <td >{subRowData.Num_affiche}</td>
                                        <td >{subRowData.Emission_GES}  </td>

                                    </tr>

                                )
                                }
                                </tbody>
                            </Table>
                        </div>
                    )
                }
                <tr>
                    <td>Total Scope 1: {this.state.h[0]} kg</td>
                </tr>
                <tr>

                </tr>



            </div>
        )};
}














