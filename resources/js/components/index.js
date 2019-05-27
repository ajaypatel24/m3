import React from 'react';
import ReactDOM from 'react-dom';
import Main from './home/Main';

export default class App extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
          width : window.innerWidth
        };
    }
    render()
    {
        return (
            <Main width={this.state.width}/>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
