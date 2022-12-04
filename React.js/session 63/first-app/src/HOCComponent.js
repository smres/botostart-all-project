import React, { Component } from "react";

const withCounter = OldComponent => {
    class newComponent extends Component {

        constructor() {
            super();
            this.state = {
                number: 0
            }
        }

        clickHandler = () => {
            this.setState(prevState => ({
                number: prevState.number + 1
            }))
        }

        render() {
            return <OldComponent clickHandler={this.clickHandler} number={this.state.number} />
        }
    }
    return newComponent
}

export default withCounter;