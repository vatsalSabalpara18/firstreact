import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    handleIncrease = () => {
        if (this.state.counter < 5) {
            this.setState({
                counter: this.state.counter + 1
            })
        }

    }
    handleDecrease = () => {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            })
        }
    }
    render() {
        return (
            <div>
                <h2>Counter</h2>
                <button onClick={this.handleIncrease}>Increase The Counter</button>
                {this.state.counter}
                <button onClick={this.handleDecrease}>Decrease The Counter</button>
            </div>
        );
    }
}

export default Counter;