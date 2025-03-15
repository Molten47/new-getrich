import React from 'react'
import eater from '../../Resources/images'
import data from '../../Resources/data.js'
import './Social.css'
import { Link } from 'react-router-dom'

const Social = () => {
    const {gallerys} = data
    const {spoon} = eater
    
    // Social media icons using inline SVG for better control
    const InstagramIcon = () => (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    )
    
    const PinterestIcon = () => (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
      </svg>
    )
    
    const TwitterIcon = () => (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    )

    // Assign social icons to images
    const getSocialIcon = (index) => {
      switch(index % 3) {
        case 0:
          return <InstagramIcon />;
        case 1:
          return <PinterestIcon />;
        case 2:
          return <TwitterIcon />;
        default:
          return <InstagramIcon />;
      }
    }
    
  return (
    <div className='social-content flex flex-col md:flex-row w-full bg-black items-center gap-4 py-4 px-4 md:px-0'>
        <div className='flex flex-col px-4 md:pl-20 py-6 w-full md:w-[40%] gap-3 text-center md:text-left'>
            <p className='text-lg md:text-xl text-white'>Instagram</p>
            <div className='flex justify-center md:justify-start'>
              <img src={spoon} alt="" className='w-[2rem] md:w-[2.2rem]'/>
            </div>
            <h2 className='text-4xl md:text-5xl text-[#ddca87]'>Photo Gallery</h2>
            <p className='text-[#aaaa] text-lg md:text-xl'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Animi, voluptatem eos esse ex aut repudiandae corporis
              autem ipsam aliquid consequatur suscipit ad voluptas.
              Autem impedit iure nisi saepe, itaque non.
            </p>
            <div className='flex justify-center md:justify-start'>
              <Link to="/photos">
              <button className='cta-btn bg-[#DCCA87] hover:bg-amber-300 text-black py-2 px-3 mt-4 h-[2.5rem] md:h-[3rem] w-[9rem] flex items-center text-[1rem] md:text-[1.25rem] justify-center font-[700] transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/40 active:shadow-md active:shadow-orange-400/30 cursor-pointer'>
                  View More
              </button>
              </Link>
             
            </div>
        </div>
        
        <div className='w-full md:w-[60%] overscroll-auto py-4'>
          <div className='flex flex-row gap-3 md:gap-5 min-w-max md:h-[60vh] px-4'>
              {gallerys.map((gallery, index) => (
                  <div 
                    key={index} 
                    className={`relative group overflow-hidden ${index >= 2 ? 'hidden md:block' : ''}`}
                  >
                    <img 
                      src={gallery.igImg} 
                      alt={`Gallery image ${index + 1}`} 
                      className='h-[30vh] md:h-[45vh] w-auto object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-[#aaaa] bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100'>
                      <div className='text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
                        {getSocialIcon(index)}
                      </div>
                    </div>
                  </div>
              ))}
          </div>
        </div>
    </div>
  )
}

export default Social