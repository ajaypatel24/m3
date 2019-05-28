import React from 'react';
import Nav from './Nav';
import Dashboard from './Dashboard';
import Question from './Question';


export default class Main extends React.Component
{
    render()
    {
        return (
            <div>
                <Nav />
                <Dashboard />
                {/* <Question /> */}
            </div>
        );
    }
}