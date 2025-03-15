import React from 'react';
import welcome from '../../assets/images/welcome.png';
import { Link } from 'react-router-dom';
import spoon from '../../assets/images/spoon.svg';
import './Header.css';


const Header = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full min-h-screen justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 pt-16 sm:pt-24 md:pt-16 lg:pt-16 pb-8 md:pb-12 lg:pb-16 gap-6 lg:gap-12'>
      {/* Left Section (Text Content) */}
      <div className='flex flex-col lg:flex-row justify-between lg:min-w-2.5 pt-8 sm:pt-12 md:pt-6 lg:pt-0'>
        <div className='flex flex-col gap-4 md:gap-6 text-center lg:text-left'>
          <h2 className='intro-text text-white text-[1.5rem]'>Chase The New Flavour</h2>
          <img src={spoon} alt="" className='w-11 mx-auto lg:mx-0' />
          <h2 className='main-head text-[#DCCA87] font-[700] text-[3rem] md:text-[4rem] lg:text-[6.3em] leading-tight'>
            The key to <br />Fine Dining
          </h2>
          <p className='text-[#aaaa] font-[400] text-lg md:text-xl leading-7 md:leading-9 max-w-xl mx-auto lg:mx-0'>
            Sit tellus lobortis sed senectus vivamus molestie. <br className='hidden lg:block' /> 
            Condimentum volutpat morbi facilisis quam scelerisque <br className='hidden lg:block' /> 
            sapien. Et, penatibus aliquam amet tellus
          </p>
          <Link to="/main">
          <span className='cta-home bg-[#DCCA87] hover:bg-amber-300 text-black py-3 px-6 h-[3rem] w-[12rem] flex items-center mt-6 lg:mt-8 text-[1.25rem] justify-center font-[700] mx-auto lg:mx-0 transition-all duration-300
                hover:shadow-lg hover:shadow-orange-400/40
                active:shadow-md active:shadow-orange-400/30'>
            Explore Menu
          </span>
          </Link>
        
          
        
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className='mt-8 lg:mt-0 px-4 md:px-0'>
        <img src={welcome} alt="" className='h-[400px] w-[350px] md:h-[500px] md:w-[450px] lg:h-[736px] lg:w-[667px] object-contain' />
      </div>
    </div>
  );
};

export default Header;