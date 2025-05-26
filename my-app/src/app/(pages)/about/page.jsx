import React from 'react';
import { ChefHat, Salad, Smile, History, Leaf } from 'lucide-react'; // Import icons

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-100 flex flex-col items-center justify-center p-4 md:p-8">
      <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-600 mb-6 md:mb-10 text-center bg-gradient-to-r from-orange-400 to-yellow-500 text-transparent bg-clip-text shadow-lg">
        About Us
      </div>

      <div className="max-w-4xl bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-orange-200/50 backdrop-blur-md">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 md:mb-6 flex items-center gap-2">
          <ChefHat className="w-8 h-8 text-orange-500" />
          Welcome to The Tiffin Trap!
        </h2>
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-4 md:mb-6">
          At <span className="font-semibold text-orange-600">The Tiffin Trap</span>, we're passionate about delivering
          delicious, home-style meals straight to your table.  Our chefs craft each dish with love
          and the freshest ingredients, bringing you the authentic taste of tradition and innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <h3 className="text-xl font-semibold text-orange-700 mb-2 flex items-center gap-2">
              <Salad className="w-6 h-6" />
              Our Philosophy
            </h3>
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              We believe that good food nourishes both the body and the soul.  We strive to use
              locally sourced, seasonal ingredients whenever possible to ensure the highest quality
              and support our community.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-orange-700 mb-2 flex items-center gap-2">
              <History className="w-6 h-6" />
              Our Story
            </h3>
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              Founded with a passion for home cooking, The Tiffin Trap started as a small
              kitchen with a big dream: to share the joy of flavorful, wholesome meals with
              everyone.
            </p>
          </div>
        </div>

        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6 md:mb-8">
          Whether you're craving a hearty breakfast, a fulfilling lunch, or a cozy dinner, we’ve
          got you covered. We aim to create memorable dining experiences filled with flavors,
          warmth, and joy.
        </p>
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6 md:mb-8 flex items-center gap-2">
          <Smile className="w-6 h-6 text-orange-500" />
          Thank you for choosing us! We look forward to serving you delightful meals and making
          every bite unforgettable.
        </p>

        <div className="mt-8 pt-6 border-t border-orange-200/50 flex items-center gap-4">
            <Leaf className="w-8 h-8 text-green-500 animate-pulse" />
            <p className="text-md sm:text-lg text-gray-600">
                We are committed to sustainable practices and reducing our environmental footprint.
            </p>
        </div>
      </div>
    </div>
  );
};

export default About;
