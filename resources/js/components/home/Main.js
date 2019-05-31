import React from 'react';
import Nav from './home-components/Nav';
import Dashboard from './home-components/Dashboard';
import Login from "./forms/Login";
import {Route} from "react-router";
import Question from './questionnaires/Question';


export default class Main extends React.Component
{
    render()
    {
        return (
            <div>
                <Nav />
                <Dashboard />
            </div>
        );
    }
}