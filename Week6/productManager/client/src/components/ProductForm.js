import React, {useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api", { title, price, description })
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert("Data succesfully created!")
            })
            .catch(err => console.log(err))
    }
    return(
    <div>
        <header>
            Product Manager
        </header>
        <form onSubmit={onSubmitHandler}>
            <div className='form-fields'>
                <label>Tile</label><br/>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </div>
            <br/>
            <div className='form-fields'>
                <label>Price</label><br/>
                <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
            </div>
            <br/>
            <div className='form-fields'>
                <label>Description</label><br/>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
            </div>
            <br/>
            <input type="submit" className='submit-input'/>
        </form>
    </div>
    )
}

export default ProductForm;