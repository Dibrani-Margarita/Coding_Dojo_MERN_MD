import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductList.css'
const ProductList = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(res=>{
            console.log(res.data);
            setProducts(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    return (
        <div className='container'>
            {
                products.map(product => (
                    <div key={product._id} className="product">
                        <h2>{product.title}</h2>
                        <h4>{product.price} $</h4>
                        <Link to={`/new/${product._id}`}>Details</Link>

                    </div>
                ))
            }
        </div>
    );
}
export default ProductList;

// {/* <p key={index}>{product.title}, {product.price}, {product.description}</p> */}