import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] =useState([]);
    const [cart, setCart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(response=> response.json())
        .then(data=> setProducts(data))
    },[])
    const handleAddtoCartBtn=(product)=>{
        const newCart = [...cart,product]
        setCart(newCart)
    }
     return (
        <div className='shop-container'>
            <div className="products-items">
            {
                products.map(product=> <Product product={product} handleBtn={handleAddtoCartBtn} key={product.id}/>)
            }
            </div>
            <div className="product-cart">
                <h2>cart container</h2>
                <p>Selected items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;