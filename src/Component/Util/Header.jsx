import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='p-4 bg-orange-400 h-20'>
      <nav className='flex justify-between items-center'>
        {/* Logo */}
        <Link to="/">
          <img src="https://img.freepik.com/premium-vector/online-shop-logo-design-template-perfect-ecommerce-sale-store-shop-discount-web_695238-64.jpg" className='h-10 px-7' alt="logo" />
        </Link>
        
        {/* Search bar */}
        <div>
          <input type="text" placeholder="Search for products, categories, etc..." className='h-8 w-96 border rounded' />
        </div>

        {/* Link block */}
        <div className='space-x-12'>
          {/* Login */}
          <Link to="/login" className='text-blac'>Log in</Link>
          
          {/* Become a seller */}
          <Link to="/seller" className='text-black text-heigh'>Become a seller</Link>
          
          {/* Cart */}
          <Link to="/cart" className='text-black'><i className="fa-solid fa-cart-shopping"></i> Cart</Link>
          
          {/* Some additional icon or link */}
          <Link to="/" className='text-black '>
            <i className="fas fa-grip-lines text-lg"></i>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
