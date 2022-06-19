import React, { useState } from 'react';
    
const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState("");  
    const [confirmPassword, setconfirmPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
    
        const newUser = { 
            firstname: firstname, 
            lastname: lastname, 
            email: email, 
            password: password, 
            confirmPassword: confirmPassword 
        };
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
                <p>{ firstname }</p>
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
                <p>{ lastname }</p>
            </div>
            <div>
                <label>Email: </label>
                <input type="email" onChange={ (e) => setEmail(e.target.value) } />
                <p>{ email }</p>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                <p>{ password }</p>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setconfirmPassword(e.target.value) } />
                <p>{ confirmPassword }</p>
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
}
export default Form;