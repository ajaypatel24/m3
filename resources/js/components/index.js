import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
    render() {
        return(
        <div>hi</div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
