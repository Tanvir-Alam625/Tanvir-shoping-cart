import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    console.log(cart);
    let total = 0;
    let shippingCharge = 0;
    for(const product of cart){
        const {price, shipping,}=product
        total = total + price;
        shippingCharge = shippingCharge + shipping;
    }
    const tax = parseFloat((total * 10 /100).toFixed(2));
    const grandTotal = total + shippingCharge + tax;
    // console.log(tax);
    const font = {
        fontSize:'17px',
        fontWeight: '400',
        lineHeight: '20px',
        letterSpacing:'0.005em',
        fontFamily: 'Lato'
    }
    return (
        <div className='cart-container'>
            <h3 className='cart-title'>Order Summary</h3>
            <p style={font}>Selected items: {cart.length}</p> 
            <p style={font}>Total Pice: $ {total}</p> 
            <p style={font}>Total Shipping Charge: $ {shippingCharge}</p> 
            <p style={font}>Tax: $ {tax}</p>
            <h3 className='grand-total'>Grand Total: $ {grandTotal.toFixed(2)}</h3> 
        </div>
    );
};

export default Cart;