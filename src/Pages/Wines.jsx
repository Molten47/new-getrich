import React from 'react'
import data from '../Resources/data.js'
import pics from '../Resources/images.js'

const Wines = () => {

    const {wines} = data
    const {spoon, logo} = pics

  return (
    <div className='flex flex-col py-6 px-4 justify-center items-center'>
        <div className='cocktail-menu w-full lg:w-1/2 mt-8 lg:mt-0'>
                <h3 className='text-[#DCCA87] text-[2rem] md:text-[3rem] text-center mb-6 md:mb-8'>Homemade Choices</h3>
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
            <div className='cocktail-menu w-full lg:w-1/2 mt-8 lg:mt-0'>
                <h3 className='text-[#DCCA87] text-[2rem] md:text-[3rem] text-center mb-6 md:mb-8'>Europe & Asia</h3>
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

export default Wines
