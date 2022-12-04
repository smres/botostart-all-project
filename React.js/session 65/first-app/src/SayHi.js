import React, { Component } from "react";

class SayHi extends Component {

    render() {
        const { SayHi } = this.props
        return (
            <div>
                <p>{SayHi(true)}</p>
            </div>
        )
    }
}

export default SayHi;
