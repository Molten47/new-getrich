import React from 'react'
import pics from '../Resources/images.js'

const Branches = () => {
    const {spoon, logo} = pics

    

  return (
    <div className='find-section flex flex-col lg:flex-col w-full max-w-6xl mx-auto px-4 py-8 md:py-16 gap-8 items-center'>
        <div className='flex flex-col text-center'>

            <h1 className='text-[#aaa] text-[3rem] font-bold font-sans '>Chop at our resturants around Europe</h1>

        </div>
           <div className='flex flex-col gap-4 text-center lg:text-left mt-6 w-full'>
            <h1 className='text-[#ddca87] text-4xl font-extrabold'>Birmingham</h1>
          <p className='short-note text-gray-400 text-base md:text-lg'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
          <h2 className='text-[#DCCA87] text-xl md:text-2xl font-medium mt-2'>Opening Hours</h2>
          <p className='time-note text-gray-400 text-base'>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className='time-note text-gray-400 text-base'>Sat - Sun: 12:00 pm - 06:00 pm</p>
        </div>
        <hr  className='bg-[#aaa] w-[100%]'/>
        <div className='flex flex-col gap-4 text-center lg:text-left mt-6 w-full'>
            <h1 className='text-[#ddca87] text-4xl font-extrabold'>Marseille</h1>
          <p className='short-note text-gray-400 text-base md:text-lg'>75 Rue de la République, 13002 Marseille</p>
          <h2 className='text-[#DCCA87] text-xl md:text-2xl font-medium mt-2'>Opening Hours</h2>
          <p className='time-note text-gray-400 text-base'>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className='time-note text-gray-400 text-base'>Sat - Sun: 12:00 pm - 06:00 pm</p>
        </div>
        <div className='flex flex-col gap-4 text-center lg:text-left mt-6 w-full'>
            <h1 className='text-[#ddca87] text-4xl font-extrabold'>Bordeaux</h1>
          <p className='short-note text-gray-400 text-base md:text-lg'>18 Rue Sainte-Catherine, 33000 Bordeaux</p>
          <h2 className='text-[#DCCA87] text-xl md:text-2xl font-medium mt-2'>Opening Hours</h2>
          <p className='time-note text-gray-400 text-base'>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className='time-note text-gray-400 text-base'>Sat - Sun: 12:00 pm - 06:00 pm</p>
        </div>
        <div className='flex flex-col gap-4 text-center lg:text-left mt-6 w-full'>
            <h1 className='text-[#ddca87] text-4xl font-extrabold'>Málaga</h1>
          <p className='short-note text-gray-400 text-base md:text-lg'> Avenida de Andalucía 23, 29007 Málaga</p>
          <h2 className='text-[#DCCA87] text-xl md:text-2xl font-medium mt-2'>Opening Hours</h2>
          <p className='time-note text-gray-400 text-base'>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className='time-note text-gray-400 text-base'>Sat - Sun: 12:00 pm - 06:00 pm</p>
        </div>
        <div className='flex flex-col gap-4 text-center lg:text-left mt-6 w-full'>
            <h1 className='text-[#ddca87] text-4xl font-extrabold'>Las Palmas</h1>
          <p className='short-note text-gray-400 text-base md:text-lg'>Calle Triana 15, 35002 Las Palmas de Gran Canaria</p>
          <h2 className='text-[#DCCA87] text-xl md:text-2xl font-medium mt-2'>Opening Hours</h2>
          <p className='time-note text-gray-400 text-base'>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className='time-note text-gray-400 text-base'>Sat - Sun: 12:00 pm - 06:00 pm</p>
        </div>
        <div className='flex flex-col gap-4 text-center lg:text-left mt-6 w-full'>
            <h1 className='text-[#ddca87] text-4xl font-extrabold'>Sheffield</h1>
          <p className='short-note text-gray-400 text-base md:text-lg'>42 Abbeydale Road, Sheffield S7 1FR</p>
          <h2 className='text-[#DCCA87] text-xl md:text-2xl font-medium mt-2'>Opening Hours</h2>
          <p className='time-note text-gray-400 text-base'>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className='time-note text-gray-400 text-base'>Sat - Sun: 12:00 pm - 06:00 pm</p>
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

export default Branches
