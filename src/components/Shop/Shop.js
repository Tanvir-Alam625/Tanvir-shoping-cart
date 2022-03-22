import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] =useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(response=> response.json())
        .then(data=> setProducts(data))
    },[])
     return (
        <div className='shop-container'>
            <div className="products-items">
            {
                products.map(product=> <Product product={product} key={product.id}/>)
            }
            </div>
            <div className="product-cart">
                <h2>cart container</h2>
            </div>
        </div>
    );
};

export default Shop;