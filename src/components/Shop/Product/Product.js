import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, price, ratings,img,seller}= props.product
    return (
        <div className='product' >
            <img src={img} alt="products" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-manuf'>Manufacturer: {seller}</p>
                <p className='product-price'>Ratings: {ratings} Star</p>
            </div>
            <button className='product-btn'>
            <span>Add to Cart</span>
            </button>
        </div>
    );
};

export default Product;