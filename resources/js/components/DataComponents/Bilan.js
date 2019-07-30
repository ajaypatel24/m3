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
                console.log(this.state.TableData[0].idProcede);

            });

        //this.state.TableData.forEach((data)=>console.log(data.idProcede))



        this.sum();





    }

    componentDidMount() {

        this.setState({isLoading: false});
        console.log(this.state.TableData);
    }


    sum() {
        let id = sessionStorage.getItem('UID')
        axios.get('/bilan/' + id,)
            .then(response => {
                this.setState({h: response.data})

                console.log(this.state.h);
            });

        this.state.TableData.forEach((data)=>console.log(data.idProcede))
    }


    /**
     * functionlity test method
     */


    render() {


        if (this.state.isLoading) {
            return (<Loading />);
        }

        return (
            <div>

                <br/>








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

                                {
                                    this.state.TableData.map((attribute) =>


                                        <tbody>
                                        <tr>

                                            <td>{attribute.Nom_procede}</td>
                                            <td>{attribute.Quantite_an}</td>
                                            <td>SnoreToast</td>

                                        </tr>

                                        </tbody>
                                    )
                                    }


                            </Table>
                        </div>



                <tr>
                    <td>Total Scope 1: {this.state.h[0]} kg</td>
                </tr>
                <tr>

                </tr>



            </div>
        )};
}














