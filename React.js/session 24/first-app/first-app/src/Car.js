import React from 'react';

const Car = (props) => {
    console.log(props);
    return(
        <>
            <p style={{color:props.color}}>
                The model of car is {props.model} and it's color is {props.color}.
            </p>
            <span style={{fontStyle: 'italic'}}>{props.children}</span>
        </>
    )
}
export default Car;