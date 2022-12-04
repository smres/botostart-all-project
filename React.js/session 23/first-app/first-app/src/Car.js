import React, {Component} from 'react';

class Car extends Component {

    render() {
        return(
            <>
                <p>
                    The model of car is {this.props.model} and it's color is {this.props.color}.
                </p>
                <span style={{fontStyle: 'italic'}}>{this.props.children}</span>
            </>
        )
    }
}
export default Car;