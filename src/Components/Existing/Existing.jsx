import React, { useState } from 'react';
import './Existing.css'
import { Link } from 'react-router-dom';


const Existing = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
   password:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Reservation submitted:', formData);
    alert('Reservation submitted successfully! We will contact you shortly to confirm your booking.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      password:''
    });
  };

  return (
    <div className="table-container bg-black text-white min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[40px] font-bold text-center mb-8">Register to Make Reservation</h1>
        <p className="text-center mb-10 text-[#DCCA87]">
          Experience the elegant ambiance and exquisite cuisine at Gericht Restaurant
        </p>
        
        <form onSubmit={handleSubmit} className="bg-[#0C0C0C] p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-group">
              <label htmlFor="name" className="block mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-black border border-[#DCCA87] rounded focus:outline-none focus:border-white"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="block mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-black border border-[#DCCA87] rounded focus:outline-none focus:border-white"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone" className="block mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 bg-black border border-[#DCCA87] rounded focus:outline-none focus:border-white"
              />
            </div>
               
            <div className="form-group">
              <label htmlFor="password" className="block mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-3 bg-black border border-[#DCCA87] rounded focus:outline-none focus:border-white"
              />
            </div>
          </div>
          
        
           <div className='flex flex-row items-center mt-2 gap-2'>
                 <p className=''>You already have an account?</p>
                 <Link to="/login"><span className='relative active:shadow-md active:shadow-orange-400/30 text-[#ddca87] hover:text-amber-300'>Log In</span></Link>
                 </div>
        

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="cta-btn bg-[#DCCA87] text-black font-semibold py-3 px-8 rounded transition duration-300 hover:shadow-lg hover:shadow-orange-400/40
                active:shadow-md active:shadow-orange-400/30 hover:bg-amber-300"
            >
              Register
            </button>
          </div>
        </form>
        
        <div className="mt-10 text-center">
          <p className="mb-4">For large parties or special events, please contact us directly:</p>
          <p className="text-[#DCCA87]">+1 (123) 456-7890 | reservations@gericht.com</p>
        </div>
      </div>
    </div>
  );
};

export default Existing;