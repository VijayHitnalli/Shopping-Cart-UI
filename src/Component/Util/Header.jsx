import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='p-2 bg-white shadow-xl h-20'>
      <nav className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link to="/">
          <img src="https://i.pinimg.com/736x/61/77/cc/6177cc502e93e1e3226519e43ff332d5.jpg" className='px-20 h-16 w-15' alt="logo" />
        </Link>
        
        {/* Search bar */}
        <div>
        <i className="fa-solid fa-magnifying-glass float-left position absolute pl-3 py-3.5 text-gray-500" ></i><input type="text" placeholder="Search for products, categories, etc..." className='h-10 w-96 rounded-tl-md rounded-br-lg px-9 bg-gray-200 ' />
        </div>

        {/* Link block */}
        <div className='flex mr-20 space-x-11'>
          {/* Login */}
          <i className="fa-regular fa-user ml-6 my-1.5 float-left position absolute"></i> <Link to="/login" className='text-black'>Log in</Link>
          
          {/* Become a seller */}
          <Link to="/seller/register" className='text-black'>Become a seller</Link>
          
          {/* Cart */}
          <Link to="/cart" className='text-black flex items-center'>
            <i className="fas fa-cart-shopping mr-1"></i> Cart
          </Link>

          {/* <Link to="/wishlist" className='text-black flex items-center'>
            <i className="fas fa-cart-shopping mr-1"></i> Wishlist
          </Link> */}
          
          {/* Some additional icon or link */}
          <Link to="/" className='text-black'>
            <i className="fas fa-grip-lines text-lg"></i>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
