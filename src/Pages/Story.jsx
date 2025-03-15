import React from 'react';
import data from '../Resources/images.js';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Story = () => {
  const { logo, spoon } = data;

  return (
    <div className='flex flex-col py-8 md:py-16 px-4 md:px-8 lg:px-16 justify-center items-center w-full'>
      <div className="flex flex-col items-center text-center bg-black w-full max-w-6xl h-auto py-10 md:py-16 px-4 md:px-12 border border-gray-800 rounded-xl shadow-lg">
        
        {/* Story Content Section */}
        <div className='flex flex-col mb-12 md:mb-16 max-w-4xl'>
          <h2 className='text-[#aaa] text-xl md:text-2xl font-medium mb-2'>OUR INSPIRING STORY</h2>
          <img src={spoon} alt="Decorative spoon" className="w-12 h-auto self-center mb-4" />
          
          <h3 className='text-[#dcca87] text-2xl md:text-3xl lg:text-4xl font-bold mb-6'>
            A story of honor and valor of hard work in an unending world
          </h3>
          
          <p className='text-[#aaa] text-sm md:text-base leading-relaxed mb-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae a quam aperiam veniam minus maxime. 
            Nemo doloribus id eaque, commodi facere laboriosam laborum ex repellat accusamus neque eum dignissimos dolor? 
          </p>
          
          <p className='text-[#aaa] text-sm md:text-base leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem at et eligendi voluptas in iste ad. 
            Nam sunt esse eveniet, autem optio repellendus voluptates tenetur dolore doloremque quas facere?
          </p>
        </div>
        
        {/* Quote and Logo Section */}
        <div className="flex flex-col items-center mt-8">
          <img src={logo} alt="Restaurant logo" className="h-12 md:h-16 mb-6" />
          
          <p className="text-gray-300 text-lg md:text-xl italic max-w-md mb-6 px-4">
            "The best way to find yourself is to lose yourself in the service of others."
          </p>
          
          <img src={spoon} alt="Decorative spoon" className="w-10 h-auto mb-8" />
          
          {/* Social Media Icons */}
          <div className="flex gap-6 mb-4">
            <a href="#" className="text-white hover:text-[#DCCA87] transition-colors duration-300" aria-label="Facebook">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-white hover:text-[#DCCA87] transition-colors duration-300" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-white hover:text-[#DCCA87] transition-colors duration-300" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;