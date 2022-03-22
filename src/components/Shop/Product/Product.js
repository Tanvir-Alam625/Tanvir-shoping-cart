import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, price, ratings,img}= props.product
    return (
        <div className='product' >
            <img src={img} alt="products" />
        </div>
    );
};

export default Product;