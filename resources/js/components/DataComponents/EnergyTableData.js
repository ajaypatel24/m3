import {Col, Row, Form, InputGroup, Table } from "react-bootstrap";
import React from "react";
import axios from 'axios/index';


/**
 * Energytable data displayed here to check what happens
 * when data is retrieved from the database, testing
 * how it is displayed
 */
export default class EnergyTableData extends React.Component {


    constructor(props) {
        super(props); //required


        this.state = {

            prestart: [],
            TableData: [],
            g: 'heelo',

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
        return (
            <div>
                {/**
                 * HOF (higher order function) map called to return all elements from the energy table
                 * part of the database, first the datatype of the row is checked to ensure everything
                 * is correctly formatted before beginning. Next a table is set up with the headers
                 * Nom, Quantite, Unite and, Num Affiche
                 * using the subrowdata variable name, data is pulled from the data in the format
                 * subrowdata.{elementName}
                 */}
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














