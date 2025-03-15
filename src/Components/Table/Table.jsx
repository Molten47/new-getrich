import React, { useState } from 'react';
import './Table.css'; 

const Table = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
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
      date: '',
      time: '',
      guests: '2',
      specialRequests: ''
    });
  };

  return (
    <div className="table-container bg-black text-white min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[40px] font-bold text-center mb-8">Reserve Your Table</h1>
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
              <label htmlFor="guests" className="block mb-2">Number of Guests</label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full p-3 bg-black border border-[#DCCA87] rounded focus:outline-none focus:border-white"
              >
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6">6 People</option>
                <option value="7+">7+ People</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="date" className="block mb-2">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-3 bg-black border border-[#DCCA87] rounded focus:outline-none focus:border-white"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="time" className="block mb-2">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full p-3 bg-black border border-[#DCCA87] rounded focus:outline-none focus:border-white"
              />
            </div>
          </div>
          
          <div className="form-group mt-6">
            <label htmlFor="specialRequests" className="block mb-2">Special Requests</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 bg-black border border-[#DCCA87] rounded focus:outline-none focus:border-white"
            ></textarea>
          </div>
          
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-[#DCCA87] text-black font-semibold py-3 px-8 rounded hover:bg-[#c9b676] transition duration-300"
            >
              Reserve Now
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

export default Table;