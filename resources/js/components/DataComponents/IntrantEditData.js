import React from 'react'
import MaterialTable from 'material-table'
import axios from "axios/index";


export default class IntrantEditData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            columns: [
                { title: 'Procede', field: 'nom_intrant' },
                { title: 'Quantite', field: 'quantite_an' },
                { title: 'Unite', field: 'unite' },
                { title: 'GES (kg)', field: 'GES_annuel' },
                {/*
                { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                {
                    title: 'Birth Place',
                    field: 'birthCity',
                    lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                },
                */}
            ],


            Rows: [],
        }
    }

    componentWillMount() {

        let uid = sessionStorage.getItem('UID');
        axios.get('/intrants/' + uid)
            .then(response => {
                console.log(response.data);
                console.log('poog');
                this.setState({Rows: response.data});
            });


        console.log(this.state.Rows);
    }

    getTableRows = () => {
        //let uid = sessionStorage.getItem('UID');
        let uid = this.state.UID;
        axios.get('/intrants/' + uid)
            .then(response => {
                console.log(response.data);
                this.setState({Rows: response.data});
            });
    }

    render() {
        return (
            <MaterialTable
                title="Intrants"
                columns={this.state.columns}
                data={this.state.Rows}
                editable={{



                   onRowAdd: newData =>
                       new Promise((resolve, reject) => {
                           setTimeout(() => {
                               {
                                   const data = this.state.Rows;
                                   data.push(newData);
                                   this.setState({ data }, () => resolve());
                               }
                               resolve()
                           }, 1000)
                       }),


                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    const data = newData;
                                    var Q_an = data.Quantite_an
                                    var FK = data.Categorie_idCategorie
                                    let id = sessionStorage.getItem('UID');
                                    const data2 = this.state.Rows;
                                    const index = data2.indexOf(oldData);
                                    data2[index] = newData;
                                    console.log(data);

                                    this.setState({ data }, () => resolve());
                                    fetch('/e/' + Q_an + '/' + FK + '/' + id,{
                                        method: 'POST',
                                        body: JSON.stringify(data),
                                        headers: {
                                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                                            "Content-type": "application/json"
                                        }

                                    })
                                        .then(function (response) {
                                            console.log(response.data);
                                            console.log('Request succeeded with JSON response', response);


                                        })
                                        .catch(function (error) {

                                            console.log('Request failed', error);
                                            console.log("why");
                                        });
                                }
                                resolve()
                            }, 1000)
                        }),

                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    let data = this.state.Rows;
                                    const index = data.indexOf(oldData);
                                    data.splice(index, 1);
                                    this.setState({ data }, () => resolve());
                                }
                                resolve()
                            }, 100)
                        }),




                }}



            />
        )
    }
}