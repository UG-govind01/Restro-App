'use client';
// Optional: add this if you plan to use it as a client component
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Mainpage() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`You searched for: ${query}`);
    // Yahan apni search logic ya navigation dal sakte ho
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="bg-gray-100 font-sans">
      <div className="min-h-screen flex flex-col">
        {/* Hero Image */}
        <div className="relative w-full overflow-hidden rounded-b-lg shadow-md">
          <Image
            src="/prity.jpg" // ✅ Corrected path (remove /public)
            alt="Elegant Restaurant Ambiance"
            width={1920}
            height={600}
            className="w-full object-cover blur-sm transition duration-500 ease-in-out transform hover:scale-105"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Welcome to The Tiffin Trap</h1>
            <p className="text-lg md:text-xl italic drop-shadow-lg">Savor exquisite flavors in a charming setting.</p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full mt-6 shadow-lg transition duration-300 ease-in-out">
              Book a Table
            </button>
          </div>
        </div>
        {/* Search Bar */}
        <div className="bg-white py-8 shadow-md rounded-md mt-8 mx-auto max-w-lg">
          <form onSubmit={handleSearch} className="flex items-center justify-center px-4">
            <input
              type="text"
              placeholder="Search for dishes or tables..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full p-3 rounded-l-md border border-gray-300 focus:ring-2 focus:ring-red-300 focus:outline-none shadow-inner"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-r-md uppercase shadow-md focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              Search
            </button>
          </form>
        </div>

        {/* Restaurant Description */}
        <div className="py-16 bg-gray-50 rounded-md mt-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At The Tiffin Trap, our journey began with a simple yet profound love for food and a desire to create a space where people could connect over exceptional meals. Inspired by the vibrant culinary landscape of Patna and a commitment to using the freshest local ingredients, our founder envisioned a restaurant that blends traditional flavors with innovative techniques. The name "The Tiffin Trap" reflects our dedication to capturing the essence of home-cooked goodness while adding a touch of surprise and delight to every dish. We strive to offer more than just a meal; we aim to provide an experience that nourishes the soul and leaves a lasting impression. From our carefully crafted menu to the warm and inviting ambiance, every detail is infused with our passion for hospitality and our belief in the power of shared moments around the table.
            </p>
          </div>
        </div>

        {/* Image Slider */}
        <div className="py-12 bg-white rounded-md mt-8 shadow-md">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">A Glimpse of Our Delights</h2>
            <Slider {...sliderSettings} className="rounded-lg shadow-lg">
              <div>
                <img
                  src="/image/image6.jpg"
                  alt="Delicious Dish 1"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              <div>
                <img
                  src="/image/image10.jpg"
                  alt="Cozy Interior 1"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              <div>
                <img
                  src="/image/image1.jpg"
                  alt="Delicious Dish 2"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              <div>
                <img
                  src="/image/image2.jpg"
                  alt="Elegant Table Setting"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              <div>
                <img
                  src="/image/image3.jpg"
                  alt="Chef's Special"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              <div>
                <img
                  src="/image/image4.jpg"
                  alt="Restaurant Exterior"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              <div>
                <img
                  src="/image/image5.jpg"
                  alt="Happy Customers"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              <div>
                <img
                  src="/image/image7.jpg"
                  alt="Another Delicious Dish"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              <div>
                <img
                  src="/image/image8.jpg"
                  alt="Warm Lighting"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              <div>
                <img
                  src="/image/image9.jpg"
                  alt="Dessert Selection"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
            </Slider>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="py-16 bg-gray-50 rounded-md mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-around">
            <div className="md:w-1/2 mb-12 md:mb-0 rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/one.jpg" // ✅ Corrected path (remove /public)
                alt="Inviting Interior"
                width={700}
                height={500}
                className="w-full h-auto object-cover transition duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
            <div className="md:w-1/2 px-6">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Experience the Difference</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At The Tiffin Trap, we are passionate about creating a dining experience that goes beyond just great food. We believe in providing exceptional service, a comfortable and stylish ambiance, and meticulous attention to every detail.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-lg mb-6">
                <li>Fresh and locally sourced ingredients, ensuring the highest quality.</li>
                <li>Creative and flavorful menu options that cater to diverse palates.</li>
                <li>A curated selection of beverages to complement your meal perfectly.</li>
                <li>Friendly and attentive staff dedicated to making your visit memorable.</li>
                <li>A perfect setting for any occasion, from intimate dinners to family gatherings.</li>
              </ul>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-300">
                View Our Menu
              </button>
            </div>
          </div>
        </div>
        {/* Menu Preview */}
<div className="py-12 bg-white rounded-md mt-8 shadow-md">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Our Popular Dishes</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Sample Dish 1 */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img src="/image/image9.jpg" alt="Popular Dish 1" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Dish Name 1</h3>
          <p className="text-gray-600 text-sm">A brief description of the dish.</p>
        </div>
      </div>
      {/* Sample Dish 2 */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img src="/image/image12.jpg" alt="Popular Dish 2" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Paneer tikka</h3>
          <p className="text-gray-600 text-sm">Another delicious offering.</p>
        </div>
      </div>
      {/* Sample Dish 3 */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img src="/image/image11.jpg" alt="Popular Dish 3" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Dish Name 3</h3>
          <p className="text-gray-600 text-sm">A customer favorite.</p>
        </div>
      </div>
    </div>
    <div className="mt-8 text-center">
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-300">
        View Full Menu
      </button>
    </div>
  </div>
</div>
        {/* Operating Hours */}
<div className="py-8 bg-gray-50 rounded-md mt-8 text-center">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Operating Hours</h2>
  <p className="text-gray-700">Monday - Saturday: 11:00 AM - 10:00 PM</p>
  <p className="text-gray-700">Sunday: 12:00 PM - 9:00 PM</p>
</div>
{/* Contact and Location */}
<div className="py-12 bg-white rounded-md mt-8 shadow-md">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Visit Us</h2>
      <p className="text-gray-700 mb-2">Address: [Aapka Address]</p>
      <p className="text-gray-700 mb-2">Phone: [Aapka Phone Number]</p>
      <p className="text-gray-700 mb-2">Email: [Aapka Email Address]</p>
    </div>
    <div className="rounded-md overflow-hidden shadow-md">
      {/* Replace with your Google Maps Embed */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d[latitude]![longitude]!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s[Google Maps Place ID]!2sThe+Tiffin+Trap!5e0!3m2!1sen!2sin!4v[timestamp]!5m2!1sen!2sin"
        width="100%"
        height="200"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</div>
<section className="bg-white py-12">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-10">What Our Guests Say</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {['Amazing food!', 'Best ambiance in town!', 'Highly recommend!'].map((quote, index) => (
        <div key={index} className="bg-gray-100 p-6 rounded-xl shadow">
          <p className="text-lg italic">"{quote}"</p>
          <p className="mt-4 font-medium text-right">— Customer {index + 1}</p>
        </div>
      ))}
    </div>
  </div>
</section>
<div className="py-16 bg-gray-100 rounded-md mt-8">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-8">What Our Customers Say</h2>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-700 italic mb-4">"The food was absolutely fantastic, and the service was impeccable. A must-visit in Patna!"</p>
        <p className="text-sm text-gray-500">- John Doe</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-700 italic mb-4">"Charming ambiance and delicious dishes. The Tiffin Trap is my new favorite spot."</p>
        <p className="text-sm text-gray-500">- Jane Smith</p>
      </div>
    </div>
  </div>
</div>

        {/* Footer */}
        <footer className="bg-gray-200 py-12 text-center text-gray-600 text-sm mt-8 rounded-t-md shadow-md">
          <p>&copy; {new Date().getFullYear()} The Tiffin Trap. All rights reserved.</p>
          <p className="mt-2">Located in Patna, Bihar, India.</p>
        </footer>
      </div>
    </div>
  );
}


export default Mainpage;


