import React from 'react'
import data from '../../Resources/data.js'
import brand from '../../Resources/images.js'
import display from '../../Resources/images.js'
import eater from '../../Resources/images.js'
import './Gallery.css'
const Gallery = () => {

    const {awards} = data;
    const {logo} = brand
    const {laurels} = display
    const {spoon} = eater
  return (
    <div className='flex flex-col py-6 px-4'>
      <div className='brand-logo w-[9rem] md:w-[7rem] sm:w-[8rem] '>
        <img src={logo} alt="" />
      </div>
      <div className='gallery-section flex flex-col lg:flex-row w-full max-w-6xl mx-auto px-4 py-8 md:py-16 gap-8 items-center'>
      <div className="gallery-content flex flex-col text-white gap-1 w-full lg:w-1/2 mt-8 lg:mt-0">
  <p className="text-2xl">Awards & Recognition</p>
  <img src={spoon} alt="decorative spoon" className="w-8" />
  <h2 className="text-4xl text-[#ddca87]">Our Laurels</h2>

  <div className="grid grid-cols-2 gap-6 mt-6">
    {awards.map((award, index) => (
      <div key={index} className="flex items-start gap-4">
        <img src={award.imgUrl} alt={award.title} className="w-16" />
        <div className="flex flex-col">
          <h2 className="text-2xl text-[#DDCA87]">{award.title}</h2>
          <p className="text-xl">{award.subtitle}</p>
        </div>
      </div>
    ))}
  </div>
</div>
        <div className='gallery-image w-full lg:w-1/2 flex justify-center lg:justify-end'>
          <img src={laurels} alt="" className='h-[60vh]' />
         
        </div>
      </div>

      
    </div>
  )
}

export default Gallery
