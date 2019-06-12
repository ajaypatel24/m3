import React from 'react';
import Nav from './home-components/Nav';
import Dashboard from './home-components/Dashboard';
import Login from "./auth/Login";
import {Route} from "react-router";
import Question from './questionnaires/Question';
import AboutUs from './home-components/AboutUs'
import { BrowserRouter as Router, Switch } from "react-router-dom"


export default class Main extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        this.authListener();
    }
    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({user});
            }
            else {
                this.setState({user: null});
            }
        });
    }



    render() {
        return (

            <div>

                {this.state.user ? (<Dashboard/>) : (<Nav/>)}
                {/*
                <Nav />
                <Dashboard />
*/}

            </div>

        );
    }
}