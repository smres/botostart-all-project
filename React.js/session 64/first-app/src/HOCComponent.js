import React, { Component } from "react";

const withCounter = (OldComponent, step) => {
    class newComponent extends Component {

        constructor() {
            super();
            this.state = {
                number: 0
            }
        }

        clickHandler = () => {
            this.setState(prevState => ({
                number: prevState.number + step
            }))
            console.log(this.props);

        }

        render() {
            const { tires } = this.props
            return <OldComponent clickHandler={this.clickHandler} number={this.state.number} {...this.props} />
        } 
    }
    return newComponent
}

export default withCounter;