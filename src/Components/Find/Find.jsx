import React from 'react'
import spooned from '../../Resources/images.js'
import './Find.css'
import { Link } from 'react-router-dom'

const Find = () => {
  const { spoon, findus } = spooned

  return (
    <div className='find-section flex flex-col lg:flex-row w-full max-w-6xl mx-auto px-4 py-8 md:py-16 gap-8 items-center'>
      <div className='flex flex-col gap-1 w-full lg:w-1/2 items-center lg:items-start'>
        <p className='text-white text-xl md:text-2xl text-center lg:text-left'>Contact</p>
        <img src={spoon} alt="Decorative spoon" className='w-8 md:w-10 mx-auto lg:mx-0' />
        <h2 className='text-[#DCCA87] text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left'>Find Us</h2>
        <div className='flex flex-col gap-4 text-center lg:text-left mt-6 w-full'>
          <p className='short-note text-gray-400 text-base md:text-lg'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
          <h2 className='text-[#DCCA87] text-xl md:text-2xl font-medium mt-2'>Opening Hours</h2>
          <p className='time-note text-gray-400 text-base'>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className='time-note text-gray-400 text-base'>Sat - Sun: 12:00 pm - 06:00 pm</p>
          
          <div className='mt-4 flex justify-center lg:justify-start'>
            <Link to="/branches">
            <button className='cta-btn bg-[#DCCA87] hover:bg-amber-300 text-black py-2 px-4 h-10 md:h-12 w-32 md:w-36 flex items-center justify-center text-base md:text-lg font-bold transition-all duration-300 hover:shadow-lg active:shadow-md cursor-pointer'>
              View More
            </button>
            </Link>
    
          </div>
        </div>
      </div>
      
      <div className='w-full lg:w-1/2 mt-8 lg:mt-0'>
        <img src={findus} alt="Our location" className='w-full h-auto object-cover' />
      </div>
    </div>
  )
}

export default Find