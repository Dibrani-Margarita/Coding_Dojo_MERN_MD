// import React from 'react';
    
const PersonCard = (props) => {
    const { firstname, lastname, age, hairColor } = props;
    return (
        <div>
            <h1>{ lastname }, { firstname }</h1>
            <p>Age: { age }</p>
            <p>Hair Color: { hairColor }</p>
        </div>
    );
}
export default PersonCard;