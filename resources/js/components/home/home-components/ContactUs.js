import {Col, Row, Form, InputGroup} from "react-bootstrap";
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
                                            {"Nom Procede: " + subRowData.Nom_procede + "  "}
                                            {"Quantite an: " + subRowData.Quantite_an + "  "}
                                            {"Unite an: " + subRowData.Unite_an + "  "}
                                            {"Num affiche: " + subRowData.Num_affiche + "  "}

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














