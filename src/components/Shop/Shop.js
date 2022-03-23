import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from './Cart/Cart';
import Product from './Product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] =useState([]);
    const [cart, setCart]=useState([]);
    // get products data
    useEffect(()=>{
        fetch('products.json')
        .then(response=> response.json())
        .then(data=> setProducts(data))
    },[])
    // add to cart btn handler function 
    const handleAddtoCartBtn=(product)=>{
        const newCart = [...cart,product]
        setCart(newCart)
        addToDb(product.id);
    }
     return (
        <div className='shop-container'>
            <div className="products-items">
            {
                products.map(product=> <Product product={product} handleBtn={handleAddtoCartBtn} key={product.id}/>)
            }
            </div>
            <div className="product-cart">
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;