import React, { useState } from 'react';
import spooned from '../../Resources/images.js';
import './Footer.css'

const Footer = () => {
  const { logo, spoon } = spooned;
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed email:', email);
    setEmail('');
    // You would typically send this to your backend or email service
  };

  return (
    <footer className="bg-black pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Subscribe Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <p className="text-white text-xl">Newsletter</p>
          <img src={spoon} alt="Decorative spoon" className="w-12 my-2" />
          <h2 className="head-subscribe text-[#DCCA87] text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-400 max-w-xl mb-6">Stay updated with our latest offers and events</p>
          
          <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className="bg-transparent border border-[#DCCA87] text-white p-3 flex-grow outline-none focus:border-amber-400"
            />
            <button 
              type="submit"
              className="bg-[#DCCA87] hover:bg-amber-300 text-black py-3 px-6 font-bold transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-gray-800 pt-12">
          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className= " head-subscribe text-white text-xl font-medium mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
            <p className="text-[#DCCA87] mb-2">+1 234-567-8900</p>
            <p className="text-[#DCCA87]">info@restaurant.com</p>
          </div>

          {/* Restaurant Info */}
          <div className="flex flex-col items-center text-center">
            <img src={logo} alt="Restaurant logo" className="h-16 mb-4" />
            <p className="text-gray-400 max-w-xs mb-4">"The best way to find yourself is to lose yourself in the service of others."</p>
            <img src={spoon} alt="Decorative spoon" className="w-12 mb-4" />
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-[#DCCA87] transition-colors">
                <i className="fab fa-facebook-f"></i>
                {/* You can replace with actual icons */}
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-[#DCCA87] transition-colors">
                <i className="fab fa-twitter"></i>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white hover:text-[#DCCA87] transition-colors">
                <i className="fab fa-instagram"></i>
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="head-subscribe text-white text-xl font-medium mb-4">Working Hours</h3>
            <p className="text-gray-400 mb-2">Monday-Friday:</p>
            <p className="text-[#DCCA87] mb-4">10:00 am - 02:00 am</p>
            <p className="text-gray-400 mb-2">Saturday-Sunday:</p>
            <p className="text-[#DCCA87]">12:00 pm - 06:00 pm</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-16 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Restaurant. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;