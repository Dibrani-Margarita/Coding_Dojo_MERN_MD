import React, { useState } from 'react';
    
const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirtnameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [email, setEmail] = useState("");  
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");  
    const [passwordError, setPasswordError] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");  
    const [confirmPasswordError, setconfirmPasswordError] = useState("");  
    
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

    const handleFirstname = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 1) {
            setFirtnameError("Firstname is required!");
        } else if(e.target.value.length < 2) {
            setFirtnameError("Firstname should be at least 2 characters long!");
        } else {
            setFirtnameError("");
        }
    };

    const handleLastname = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 1) {
            setLastnameError("Lastname is required!");
        } else if(e.target.value.length < 3) {
            setLastnameError("Lastname should be at least 2 characters long!");
        } else {
            setLastnameError("");
        }
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email should be at least 5 characters long!");
        } else {
            setEmailError("");
        }
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password should be at least 8 characters long!");
        } else {
            setPasswordError("");
        }
    };

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1) {
            setconfirmPasswordError("Confirm password is required!");
        } else if(e.target.value !== password) {
            setconfirmPasswordError("Passwords must match");
        } else {
            setconfirmPasswordError("");
        }
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleFirstname } />
                {
                    firstnameError ? 
                    <p>{ firstnameError }</p> : 
                    <p>{ firstname }</p>
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLastname } />
                {
                    lastnameError ? 
                    <p>{ lastnameError }</p> : 
                    <p>{ lastname }</p>
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="email" onChange={ handleEmail } />
                { 
                    emailError ? 
                    <p>{ emailError }</p> : 
                    <p>{ email }</p>
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ handlePassword } />
                { 
                    passwordError ? 
                    <p>{ passwordError }</p> : 
                    <p>{ password }</p>
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ handleConfirmPassword } />
                { 
                    confirmPasswordError ? 
                    <p>{ confirmPasswordError }</p> : 
                    <p>{ confirmPassword }</p>
                }
            </div>
        </form>
    );
}
export default Form;