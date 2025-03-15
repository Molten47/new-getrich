import React from 'react'
import './Menu.css'
import spoon from '../../assets/images/spoon.svg'
import cup from '../../assets/images/menu.png'
import data from '../../Resources/data.js'
import { Link } from 'react-router-dom'

const Menu = () => {
  // Extract wine and cocktail data
  const { wines, cocktails } = data;
  
  return (
    <div className='flex flex-col w-full py-8 md:py-16 bg-black'>
        <div className='display-menu flex flex-col text-center justify-center items-center mb-8 md:mb-12'>
            <p className='text-white'>Menu that fits your plate</p>
            <img src={spoon} alt="" className='w-8 my-2' />
            <h2 className='text-[2.5rem] md:text-[4rem] text-[#DCCA87]'>Today's Special</h2>
        </div>
   
        {/* Menu content with wine and cocktails */}
        <div className='menu-content flex flex-col lg:flex-row w-full max-w-6xl mx-auto px-4 gap-8 lg:gap-6 items-center'>
            {/* Wine Menu */}
            <div className='wine-menu w-full lg:w-3/4'>
                <h3 className='text-[#DCCA87] text-[2rem] md:text-[3rem] text-center mb-6 md:mb-8'>Wine & Beer</h3>
                <div className='menu-items flex flex-col gap-6 md:gap-8'>
                    {wines.map((wine, index) => (
                        <div key={index} className='menu-item flex justify-between'>
                            <div className='menu-item-content'>
                                <h4 className='text-white text-lg md:text-xl mb-1 md:mb-2'>{wine.title}</h4>
                                <p className='text-[#aaa] text-sm md:text-base'>{wine.tags}</p>
                            </div>
                            <div className='menu-item-price flex items-center'>
                                <div className='menu-dash w-6 md:w-9 h-px bg-[#DCCA87] mx-2 md:mx-4'></div>
                                <p className='text-white text-2xl'>{wine.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Center Image */}
            <div className='sm:hidden md:block my-8 lg:my-0 lg:w-3/4 flex justify-center m-12'>
                <img src={cup} alt="" className='h-auto w-48 lg:w-full max-w-full object-contain' />
            </div>
            
            {/* Cocktail Menu */}
            <div className='cocktail-menu w-full lg:w-3/4 mt-8 lg:mt-0'>
                <h3 className='text-[#DCCA87] text-[2rem] md:text-[3rem] text-center mb-6 md:mb-8'>Cocktails</h3>
                <div className='menu-items flex flex-col gap-6 md:gap-8'>
                    {cocktails.map((cocktail, index) => (
                        <div key={index} className='menu-item flex justify-between'>
                            <div className='menu-item-content'>
                                <h4 className='text-white text-lg md:text-xl mb-1 md:mb-2'>{cocktail.title}</h4>
                                <p className='text-[#aaa] text-sm md:text-base'>{cocktail.tags}</p>
                            </div>
                            <div className='menu-item-price flex items-center'>
                                <div className='menu-dash w-6 md:w-9 h-px bg-[#DCCA87] mx-2 md:mx-4'></div>
                                <p className='text-white text-2xl'>{cocktail.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      
        {/* View More button */}
        <div className='flex justify-center mt-8 md:mt-12'>
            <Link to='/wines'>
            <button className='cta-btn bg-[#DCCA87] hover:bg-amber-300 text-black py-2 px-3 h-[2.5rem] md:h-[3rem] w-[10rem] md:w-[12rem] flex items-center text-[1rem] md:text-[1.25rem] justify-center font-[700] transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/40 active:shadow-md active:shadow-orange-400/30 cursor-pointer'>
                View More
            </button>
            </Link>
          
        </div>
    </div>
  )
}

export default Menu