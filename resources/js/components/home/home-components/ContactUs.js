import {Col, Row, Form, InputGroup, Table } from "react-bootstrap";
import React from "react";
import axios from 'axios';

export default class PrestartData extends React.Component {


    constructor(props) {
        super(props); //required


        this.state = {

            prestart: [],
            TableData: [],
            g: 'heelo',

        };


        this.test = this.test.bind(this);
    }


    componentWillMount() {

        let uid = localStorage.getItem('UID');
        axios.get('/inventaire/' + uid)
            .then(response => {
                this.setState({TableData: response.data})

                console.log(this.state.TableData)

            });

    }

    test() {
        var tableData = new Array();
        var l = 1;
        let uid = localStorage.getItem('UID');
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
        return (
            <div>
                {
                    this.state.TableData.map((rowdata, i) =>
                        <div>
                            {typeof (rowdata == 'object') ?
                                <div>
                                    {rowdata.map((subRowData, k) =>
                                        <div> {/*prints out the table parameters according to column name */}

                                        <Table>
                                            <thead>
                                            <tr>
                                                <th>Nom</th>
                                                <th>Quantite</th>
                                                <th>Unite</th>
                                                <th>Num Affiche</th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            <tr>
                                                <td>{subRowData.Nom_procede}</td>
                                                <td>{subRowData.Quantite_an}</td>
                                                <td>{subRowData.Unite_an }</td>
                                                <td>{subRowData.Num_affiche}</td>
                                            </tr>
                                            </tbody>

                                        </Table>
                                        </div>
                                    )
                                    }
                                </div>
                                :
                                null
                            }
                        </div>
                    )
                }
            </div>
        )};
}














