import React from 'react'
import data from '../Resources/data.js'
import pics from '../Resources/images.js'

const Photos = () => {

    const {gallerys} = data
    const {logo, spoon} = pics
  return (
    <div className='container mx-auto py-6 px-4'>
        <h2 className='text-[#DCCA87] text-3xl md:text-4xl text-center mb-6 md:mb-12'>Photos</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-4'>
            {gallerys.map((gallery, index) => (
            <div key={index} className='photo-item'>
                <img src={gallery.igImg} alt='' className='w-full h-[30vh] object-cover rounded-lg' />
                
            </div>
            ))}
    </div>
    <div className="flex flex-col items-center text-center bg-black w-full h-auto pt-[4vh] pb-[4vh] border-b-gray-600 rounded-xl">
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
    </div>
  )
}

export default Photos