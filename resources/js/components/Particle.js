
import Particles from 'react-particles-js';
import React from 'react'


export default class Particle extends React.Component {

    render() {
        return (
            <Particles
                params={{
                    particles: {
                        color: {
                            value: "#000000"
                        }
                    }
                }}
            />
        );
    }
}
