import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, price, ratings,img}= props.product
    return (
        <div className='product' >
            <img src={img} alt="products" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-rating'>Ratings: {ratings} Star</p>
            </div>
        </div>
    );
};

export default Product;