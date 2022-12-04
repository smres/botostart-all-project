import React from 'react';

import "./UserF.css"

// const UserF = ({name, age}) => {
const UserF = (props) => {
    const {name, age} = props;
    const header = {color:"lightgreen", fontSize: "1rem"}
    return (
        <div>
            {/* <p>Hi, I am {props.name} and I am {props.age}</p> */}
            <p style={header}>Hi, I am {name} and I am {age}</p>
            <p className='paragraph'>paragraph Mamali Bala😘</p>
        </div>
    );
};

export default UserF;