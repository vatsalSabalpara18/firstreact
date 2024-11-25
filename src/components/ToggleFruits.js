import React, { Component } from 'react';

class ToggleFruits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }        
    }

    handleChange = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    
    render() {
        return (
            <div style={{ backgroundColor: this.state.toggle ? "red" : "orange" }}>
                <button onClick={this.handleChange}>Change</button>
                <br />
                <br />
                <h2>
                    { this.state.toggle ? "Apple" : "Orange"}
                </h2>
            </div>
        );
    }
}

export default ToggleFruits;