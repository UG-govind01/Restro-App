import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-100 flex flex-col items-center justify-center p-4 md:p-8">
      <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-600 mb-6 md:mb-10 text-center bg-gradient-to-r from-orange-400 to-yellow-500 text-transparent bg-clip-text shadow-lg">
        Contact Us
      </div>
      <div className="max-w-4xl bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-orange-200/50 backdrop-blur-md w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <Send className="w-8 h-8 text-orange-500" />
              Send us a Message
            </h2>
            <form className="flex flex-col space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-lg sm:text-xl">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-lg sm:text-xl">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-lg sm:text-xl">Message</label>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
                />
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-all text-lg sm:text-xl shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <Phone className="w-8 h-8 text-orange-500" />
              Get in Touch
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-gray-600" />
                <p className="text-lg sm:text-xl text-gray-700">
                  Email: ps6923580@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-gray-600" />
                <p className="text-lg sm:text-xl text-gray-700">
                  Phone: +91 7209627674
                </p>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gray-600 mt-1" />
                <p className="text-lg sm:text-xl text-gray-700">
                  Address: Sutihara, Foodie Town, India 
                </p>
              </div>
            </div>
             <div className="mt-8 pt-6 border-t border-orange-200/50">
                <p className="text-md sm:text-lg text-gray-600">
                    We are available for catering, events, and special orders.  Please contact us for more information.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
