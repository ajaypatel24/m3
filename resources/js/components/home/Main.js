import React from 'react';
import Nav from './Nav';
import Dashboard from './Dashboard';


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