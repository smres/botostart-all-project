import React, { Component } from 'react';

class Product extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>this is product #{this.props.match.params.id}</h1>
            </div>
        );
    }
}

export default Product;