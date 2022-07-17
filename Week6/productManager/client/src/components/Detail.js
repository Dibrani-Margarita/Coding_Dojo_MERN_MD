import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios';
const Detail = (props) => {
    const { id } = useParams(); 
    const [product, setProduct] = useState({});
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => console.log('GET PRODUCT BY ID ERROR', err));
    }, [id])

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <a onClick={(e)=>{deleteProduct(product._id)}} href='/'> Delete</a> 
        </div>
    )
}
export default Detail;