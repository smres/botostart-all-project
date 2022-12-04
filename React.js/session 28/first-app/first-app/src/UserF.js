import React from 'react';

const UserF = ({name, age}) => {
// const UserF = (props) => {
    // const {name, age} = props;
    return (
        <div>
            {/* <p>Hi, I am {props.name} and I am {props.age}</p> */}
            <p>Hi, I am {name} and I am {age}</p>
        </div>
    );
};

export default UserF;