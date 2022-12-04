import React, { Component } from 'react';

class Child extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false,
            errorMessage: ""
        }
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true,
            errorMessage: error
        })
    }

    render() {
        if (this.state.error) {
            return <p>{this.state.errorMessage}</p>
        }
        else {
            return this.props.children
        }
    }
}

export default Child; 