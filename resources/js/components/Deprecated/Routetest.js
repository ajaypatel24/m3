import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * useless deprecated
 */
export default class Routetest extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Tester</div>

                            <div className="card-body">working route</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
