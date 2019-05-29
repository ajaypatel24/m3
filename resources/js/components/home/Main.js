import React from 'react';
import Nav from './Nav';
import Dashboard from './Dashboard';
import Login from "../nav-forms/Login";
import {Route} from "react-router";


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