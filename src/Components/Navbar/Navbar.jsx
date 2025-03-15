import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Close menu when clicking outside or on menu items
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only run this on mobile
      if (window.innerWidth < 768 && isMenuOpen) {
        // Close if clicked outside the menu and not on the toggle button
        if (!event.target.closest('.side-menu') && 
            !event.target.closest('.menu-toggle')) {
          setIsMenuOpen(false);
        }
      }
    };

    // Close menu when escape key is pressed
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);
    
    // Prevent scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle navigation item clicks
  const handleMenuItemClick = (section) => {
    if (window.innerWidth < 768) {
      setIsMenuOpen(false);
    }
    // Call the scroll function passed from parent
    if (onNavClick && isHomePage) {
      onNavClick(section);
    }
  };

  return (
    <div className='flex flex-col md:flex-row h-[10vh] w-full justify-between text-white py-4 px-4 md:px-12 items-center fixed z-10 bg-black lg:gap-24'>
      {/* Logo */}
      <div className='flex justify-between w-full md:w-auto'>
        <Link to="/" className='text-white no-underline'>
          <h2 className='nav-text text-[40px] font-[700] text-white'>GERICHT</h2>
        </Link>
        {/* Hamburger Menu Icon (Mobile Only) */}
        <button onClick={toggleMenu} className='menu-toggle md:hidden text-white bg-black focus:outline-none'>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Overlay for mobile */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Side Menu for Mobile / Normal Menu for Desktop */}
      <div
        className={`side-menu fixed md:static top-0 right-0 h-full md:h-auto w-[80%] md:w-auto z-30 
                    bg-black md:bg-transparent transform transition-transform duration-300 ease-in-out 
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0
                    flex flex-col md:flex-row justify-start pt-16 md:pt-0
                    md:flex-1 md:justify-between`}
      >
        {/* Close button inside mobile menu */}
        <button 
          onClick={toggleMenu} 
          className='absolute top-4 right-4 text-white md:hidden focus:outline-none'
        >
          <FaTimes size={24} />
        </button>

        {/* Navigation Links - now with mx-auto to center it */}
        <ul className='flex flex-col md:flex-row list-none items-start md:items-center pl-6 md:pl-0 gap-6 md:gap-8 w-full md:w-auto md:mx-auto'>
          {isHomePage ? (
            <>
              <li className='hover:text-[#DCCA87] cursor-pointer' onClick={() => handleMenuItemClick('home')}>Home</li>
              <li className='hover:text-[#DCCA87] cursor-pointer' onClick={() => handleMenuItemClick('about')}>About</li>
              <li className='hover:text-[#DCCA87] cursor-pointer' onClick={() => handleMenuItemClick('menu')}>Menu</li>
              <li className='hover:text-[#DCCA87] cursor-pointer' onClick={() => handleMenuItemClick('chef')}>Chef</li>
              <li className='hover:text-[#DCCA87] cursor-pointer' onClick={() => handleMenuItemClick('gallery')}>Gallery</li>
              <li className='hover:text-[#DCCA87] cursor-pointer' onClick={() => handleMenuItemClick('contact')}>Contact Us</li>
            </>
          ) : (
            <>
              <li className='hover:text-[#DCCA87] cursor-pointer'><Link to="/" className='text-white no-underline hover:text-[#DCCA87]'>Home</Link></li>
              <li className='hover:text-[#DCCA87] cursor-pointer'><Link to="/" className='text-white no-underline hover:text-[#DCCA87]'>Back to Restaurant</Link></li>
            </>
          )}
        </ul>

        {/* Login/Book Table Section */}
        <div className='flex flex-col md:flex-row items-start md:items-center pl-6 md:pl-0 gap-6 md:gap-5 mt-8 md:mt-0 w-full md:w-auto md:ml-12'>
          <Link to="/registration">
          <h3 className='hover:text-[#DCCA87] cursor-pointer text-nowrap'>Log In/Registration</h3>
          </Link>

          
          <div className='w-0.5 h-5 bg-white hidden md:block'></div>
          {isHomePage ? (
            <Link to="/table" className='text-white no-underline hover:text-[#DCCA87] text-nowrap'>Book Table</Link>
          ) : (
            <Link to='/table'>
               <span className='text-[#fff] cursor-pointer text-nowrap'>Book Table</span>
            </Link>
           
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;