import React, {useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const ProductForm = (props) => {
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", { title, price, description })
            .then(res => {
                console.log(res.data);
                navigate('/')
                alert("Data succesfully created!")
            })
            .catch(err => console.log('POST ERROR', err))
    }
    return(
    <div>
        <header>
            Add a new product
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