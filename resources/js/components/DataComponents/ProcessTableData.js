import {Col, Row, Form, InputGroup, Table } from "react-bootstrap";
import React from "react";
import axios from 'axios/index';
import Loading from "../Authentication/Loading";


/**
 * Energytable data displayed here to check what happens
 * when data is retrieved from the database, testing
 * how it is displayed
 */
export default class ProcessTableData extends React.Component {


    constructor(props) {
        super(props); //required


        this.state = {

            prestart: [],
            TableData: [],
            g: 'heelo',
            isLoading: true,

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

    componentDidMount() {

        this.setState({isLoading: false});
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
                {/**
                 * HOF (higher order function) map called to return all elements from the energy table
                 * part of the database, first the datatype of the row is checked to ensure everything
                 * is correctly formatted before beginning. Next a table is set up with the headers
                 * Nom, Quantite, Unite and, Num Affiche
                 * using the subrowdata variable name, data is pulled from the data in the format
                 * subrowdata.{elementName}
                 *
                 *
                 *
                 *
                 *
                 *
                 *
                 *
                 * <div>

                 <tr>
                 <td colspan="1">{subRowData.Nom_procede}</td>
                 <td colspan="1">{subRowData.Quantite_an}</td>
                 <td colspan="1">{subRowData.Unite_an}</td>
                 <td colspan="1">{subRowData.Num_affiche}</td>
                 </tr>

                 </div>
                 *
                 *
                 *
                 *
                 */}


                <Table>
                    <thead>
                    <tr>
                        <th>Procede</th>
                        <th>Quantite an</th>
                        <th>Unite</th>
                        <th>Num Affiche</th>
                    </tr>
                    </thead>

                    <tbody>

                    {

                        this.state.TableData.map((rowdata, i) =>
                            <div>
                                {rowdata.map((subRowData, k) =>


                                    <tr>

                                        <td >{subRowData.Nom_procede}</td>
                                        <td >{subRowData.Quantite_an}</td>
                                        <td >{subRowData.Unite_an}</td>
                                        <td >{subRowData.Num_affiche}</td>

                                    </tr>

                                )
                                }
                            </div>
                        )
                    }

                    </tbody>
                </Table>

            </div>
        )};
}














