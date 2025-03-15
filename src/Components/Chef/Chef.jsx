import React from 'react'
import chefImage from '../../assets/images/chef.png'
import sppon from '../../assets/images/spoon.svg'
import './Chef.css'

const Chef = () => {
  return (
    <div className='chef-section flex flex-col lg:flex-row w-full max-w-6xl mx-auto px-4 py-8 md:py-16 gap-8 items-center'>
      
      <div className='chef-image w-full lg:w-1/2 flex justify-center lg:justify-end'>
        <img 
          src={chefImage} 
          alt="Chef Kevin Luo" 
          className='h-auto max-h-[400px] md:max-h-[640px] w-auto object-contain' 
        />
      </div>
      
      <div className='chef-content flex flex-col text-white gap-1 w-full lg:w-1/2 mt-8 lg:mt-0'>
        <p className='text-base md:text-lg'>Chef's Word</p>
        <img src={sppon} alt="Decorative spoon" className='w-8 md:w-12 mb-4 md:mb-10' />
        <h2 className='text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-tight mb-4 md:mb-6'>What We Believe In</h2>
        <div className='flex flex-row'>
          <p className='text-[#aaa] text-base md:text-xl lg:text-2xl my-4 md:my-8 lg:my-16'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iure cum beatae magnam harum culpa ipsa aut sint maiores dolore aspernatur, numquam tempora dicta aliquam impedit rerum ea in ad.
          </p>
        </div>
        <h2 className='text-[24px] md:text-[32px] mt-4'>Kevin Luo</h2>
        <p className='text-[#aaa]'>Chef & Founder</p>
        <img 
          src={chefImage} 
          alt="Chef's signature" 
          className='w-32 md:w-48 mt-4 hidden' 
        />
      </div>
    </div>
  )
}

export default Chef