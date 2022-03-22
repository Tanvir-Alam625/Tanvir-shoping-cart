import React from 'react';
import Logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <div>
        <nav className='header'>
            <img src={Logo} alt="nav-logo" />
            <div className='nav-items'>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/order-overview">Order Overview</a>
                <a href="/inventory">Manage Inventory</a>
            </div>
        </nav>
        </div>
    );
};

export default Header;