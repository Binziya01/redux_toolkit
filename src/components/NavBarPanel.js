import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


const NavBar = () => {

    // useSelector to get state
    const cartProducts = useSelector(state => state.cart)

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        console.log("menu toggled");
        
        setIsOpen(!isOpen);
      };
  return (
    <div>
     <nav className="bg-gray-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex gap-20'>
        <a href="#" className="text-xl font-bold">Redux Toolkit</a>
        <Link to="/" href="#action1" className="text-gray-700 hover:text-gray-900 text-lg">Products</Link>
        </div>
        <button onClick={toggleMenu} className="lg:hidden block text-gray-600 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        
        <div className="hidden lg:flex space-x-4">
          
          <Link to="/cart" href="#action1" className="text-gray-700 hover:text-gray-900 text-lg">My Bag {cartProducts.length}</Link>
          {/* small screen */}
          {isOpen && (
          <div className="lg:hidden bg-gray-100 p-4">
            <Link to="/" className="block text-gray-700 hover:text-gray-900 mb-2">Products</Link>
            <Link to="/cart" className="block text-gray-700 hover:text-gray-900">My Bag {cartProducts.length}</Link>
          </div>
        )}
          
         
          
        </div>
        
      </div>
    </nav>
  

    </div>
  )
}

export default NavBar