import React from 'react';

const FunctionEvent = () => {

    const clickHandler = () => {
        alert("function clicked")
    }

    // function clickHandler() {
    //     alert("function clicked")
    // }

    return (
        <div>
            <button style={{marginTop: "20px"}} onClick={clickHandler}>Function Click</button>
        </div>
    );
};

export default FunctionEvent;