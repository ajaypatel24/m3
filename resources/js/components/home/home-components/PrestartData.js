import {Form, Table} from "react-bootstrap";
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
        axios.get('/user/'+uid)
            .then(response => {
                this.setState( {prestart: response.data} );

            });


        console.log(this.state.prestart);
    }



    render() {


        return (

            <div>
                <Table responsive striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th colSpan="5">Energie</th>
                    </tr>
                    <tr>
                        <th colSpan="3">Compatiblisation direct des combustibles</th>
                        <th>Facteur Combustion</th>
                        <th>Total GES</th>
                    </tr>
                    <tr>
                        <th>Combustibles fossiles, sources fixes</th>
                        <th>Consommation</th>
                        <th>Unite</th>


                    </tr>
                    </thead>

                    {/*} {this.state.prestart.map(category => {

                        return (  })} */}



                            <tr>


                                <td>{this.state.prestart}</td>




                            </tr>





                </Table>





            </div>




        );

    }
}



