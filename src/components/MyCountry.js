import React, { Component } from 'react';


// state - it is object that is used to store information components.
class MyCountry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'India',
            population: '135 Billion'
        }
    }
    handleChange = () => {
        this.setState({
            name: 'USA',
            population: '15 Billion'
        })
    }
    render() {
        return (
            <>
                <h2>Class Based Component</h2>
                <div>
                    MyCountry: {this.state.name}
                </div>
                <br />
                <div>
                    Populaton: {this.state.population}
                </div>
                <button onClick={this.handleChange}>Change The Country</button>
            </>
        );
    }
}

export default MyCountry;