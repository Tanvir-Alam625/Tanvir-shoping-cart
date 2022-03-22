import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({handleBtn,product}) => {
    const {name, price, ratings,img,seller,id}= product
    return (
        <div className='product' >
            <img src={img} alt="products" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-manuf'>Manufacturer: {seller}</p>
                <p className='product-price'>Ratings: {ratings} Star</p>
            </div>
            <button className='product-btn' onClick={()=>handleBtn(product)}>
            <span>Add to Cart</span>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;