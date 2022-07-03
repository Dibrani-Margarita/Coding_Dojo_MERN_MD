import { useState } from 'react';

const Form = () => {
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    return (
        <form onSubmit={(e) => { handleSubmit(e) }}>
            <label htmlFor="name">Your name: </label>
            <input type="text" id="name" value={name}
                onChange={ (e) => { handleNameChange(e) }}
            />
        </form>
    )
}

export default Form;