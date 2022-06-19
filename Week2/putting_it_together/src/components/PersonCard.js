import React, { useState } from 'react';
    
const PersonCard = (props) => {
    const { firstname, lastname, age, hairColor } = props;
    const [ hasAge, setHasAge ] = useState(age);
    return (
        <div>
            <h1>{ lastname }, { firstname }</h1>
            <p>Age: { hasAge }</p>
            <p>Hair Color: { hairColor }</p>
            <button onClick={ (event) => setHasAge( hasAge + 1 ) }>Birthday Button for { firstname } { lastname }</button>
        </div>
    );
}
export default PersonCard;