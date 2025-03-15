import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import spoon from '../../assets/images/spoon.svg';
import knife from '../../assets/images/knife.png';

const About = () => {
  return (
    <div className='w-full py-16 md:py-24 lg:min-h-screen relative flex justify-center items-center overflow-hidden bg-black'>
      <div className='relative flex flex-col md:flex-row items-center w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 gap-8 md:gap-6 lg:gap-8'>
        {/* Left Section */}
        <div className='gee-menu text-[#aaa] w-full md:w-2/5 lg:w-2/3 flex flex-col items-center md:items-end'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white text-center md:text-right leading-tight'>
            About Us
          </h2>
          <img 
            src={spoon} 
            alt="Decorative spoon" 
            className='my-4 w-12 transform rotate-180 md:rotate-0' 
          />
          <p className='text-center md:text-right text-base lg:text-lg mb-6 max-w-md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum maiores inventore minus illum debitis dolorum itaque, suscipit ex facere commodi amet non voluptate laudantium. Natus quas nobis id. Laborum, minus.
          </p>
          <Link to="/background">
          <button className='cta-home bg-[#DCCA87] hover:bg-amber-300 text-black py-2 px-3 h-12 w-40 sm:h-14 sm:w-48 flex items-center text-lg justify-center font-bold transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/40 active:shadow-md active:shadow-orange-400/30 cursor-pointer'>
            Explore Menu
          </button>
          </Link>
         
        </div>

        {/* Center Image */}
        <div className='w-full md:w-1/5 lg:w-1/3 flex justify-center py-8 md:py-0'>
          <div className='relative'>
            <img 
              src={knife} 
              alt="Knife divider" 
              className='h-64 sm:h-80 md:h-96 lg:h-[550px] xl:h-[705px] object-contain transition-all duration-300'
            />
            <div className='absolute -inset-10 bg-[#DCCA87]/10 rounded-full filter blur-3xl opacity-50 -z-10'></div>
          </div>
        </div>

        {/* Right Section */}
        <div className=' gee-menu text-[#aaa] w-full md:w-2/5 lg:w-2/3 flex flex-col items-center md:items-start'>
         
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white text-center md:text-left leading-tight'>
            Our History
          </h2>
          <img 
            src={spoon} 
            alt="Decorative spoon" 
            className='my-4 w-12' 
          />
          <p className='text-center md:text-left text-base lg:text-lg mb-6 max-w-md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum maiores inventore minus illum debitis dolorum itaque, suscipit ex facere commodi amet non voluptate laudantium. Natus quas nobis id. Laborum, minus.
          </p>
          <Link to='/story'>
          <button className='cta-home bg-[#DCCA87] hover:bg-amber-300 text-black py-2 px-3 h-12 w-40 sm:h-14 sm:w-48 flex items-center text-lg justify-center font-bold transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/40 active:shadow-md active:shadow-orange-400/30 cursor-pointer'>
            Learn More
          </button>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default About;