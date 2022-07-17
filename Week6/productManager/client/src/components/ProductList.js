import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductList.css'
const ProductList = () => {
    const [products, setProducts] = useState([]);
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(res=>{
            console.log(res.data);
            setProducts(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, []);

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='container'>
            {
                products.map(product => (
                    <div key={product._id} className="product">
                        <h2>{product.title}</h2>
                        <h4>{product.price} $</h4>
                        <Link to={`/product/` + product._id}>Details </Link>|
                        <Link to={"/product/edit/" + product._id}> Edit </Link>|
                        <a onClick={(e)=>{deleteProduct(product._id)}} href='/'> Delete</a>
                    </div>
                ))
            }
        </div>
    );
}
export default ProductList;