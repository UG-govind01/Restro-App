"use client";
import Link from "next/link";
// Assuming you'll use an icon library like react-icons
// npm install react-icons
// Or import SVG icons directly
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'; // Example icons for contact

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Darker background, more padding, subtle text colors
    <footer className="bg-gray-900 text-gray-300 py-16 mt-20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center md:text-left">

          {/* Brand / About & Social */}
          <div className="lg:col-span-1 md:col-span-3"> {/* Takes full width on md, first col on lg */}
            <h2 className="text-2xl font-bold text-orange-500 mb-3">
              The Tiffin Trap
            </h2>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Serving tradition with a touch of spice. Embark on a culinary journey through authentic flavors you'll love.
            </p>
            {/* Social Media Links */}
            <div className="mt-4 md:mt-0">
               <h3 className="text-lg font-semibold mb-3 text-orange-400 sr-only md:not-sr-only">Follow Us</h3> {/* Hidden on mobile if contact is nearby, shown otherwise */}
               <div className="flex justify-center md:justify-start space-x-4">
                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-orange-400 transition duration-300">
                   <FaFacebookF size={20} />
                 </a>
                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-orange-400 transition duration-300">
                   <FaTwitter size={20} />
                 </a>
                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-orange-400 transition duration-300">
                   <FaInstagram size={20} />
                 </a>
                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-orange-400 transition duration-300">
                   <FaLinkedinIn size={20} />
                 </a>
               </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1"> {/* Adjust span as needed */}
            <h3 className="text-lg font-semibold mb-4 text-orange-400 tracking-wide">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-orange-400 hover:underline transition duration-300">Home</Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-orange-400 hover:underline transition duration-300">Menu</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-orange-400 hover:underline transition duration-300">About Us</Link>
              </li>
               <li>
                <Link href="/gallery" className="text-gray-400 hover:text-orange-400 hover:underline transition duration-300">Gallery</Link> {/* Added Example */}
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-orange-400 hover:underline transition duration-300">Contact</Link>
              </li>
               <li>
                <Link href="/faq" className="text-gray-400 hover:text-orange-400 hover:underline transition duration-300">FAQ</Link> {/* Added Example */}
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1"> {/* Adjust span as needed */}
            <h3 className="text-lg font-semibold mb-4 text-orange-400 tracking-wide">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-400">
               <p className="flex items-center justify-center md:justify-start">
                 <FiMapPin className="mr-2 text-orange-400 flex-shrink-0" size={16}/>
                 <span>800027 Food Street, Patna, Bihar, IN</span>
               </p>
               <p className="flex items-center justify-center md:justify-start">
                 <FiPhone className="mr-2 text-orange-400 flex-shrink-0" size={16}/>
                 <a href="tel:+917209627674" className="hover:text-orange-400 transition duration-300">+91 7209627674</a>
               </p>
               <p className="flex items-center justify-center md:justify-start">
                 <FiMail className="mr-2 text-orange-400 flex-shrink-0" size={16}/>
                 <a href="mailto:contact@thetiffintrap.com" className="hover:text-orange-400 transition duration-300 break-all">contact@thetiffintrap.com</a> {/* Updated Email & break-all */}
               </p>
            </div>
             {/* Optional: Operating Hours */}
            <div className="mt-6 text-sm text-gray-400">
                 <h4 className="font-semibold text-orange-400 mb-2 text-base">Opening Hours</h4>
                 <p>Mon - Fri: 11:00 AM - 10:00 PM</p>
                 <p>Sat - Sun: 10:00 AM - 11:00 PM</p>
            </div>
          </div>

           {/* Newsletter Signup (Optional Placeholder) */}
           <div className="lg:col-span-1 md:col-span-3 lg:col-start-4 md:col-start-1"> {/* Adjust span/start for layout */}
             <h3 className="text-lg font-semibold mb-4 text-orange-400 tracking-wide">Stay Updated</h3>
             <p className="text-sm text-gray-400 mb-4">
               Get updates on special offers and new menu items straight to your inbox.
             </p>
             <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
               <label htmlFor="footer-email" className="sr-only">Email Address</label>
               <input
                 type="email"
                 id="footer-email"
                 placeholder="Enter your email"
                 className="flex-grow px-4 py-2 rounded bg-gray-800 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-500"
                 required
               />
               <button
                 type="submit"
                 className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded font-semibold transition duration-300"
               >
                 Subscribe
               </button>
             </form>
           </div>

        </div> {/* End Main Footer Grid */}

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-sm text-gray-500">
           <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
             <p>
               &copy; {currentYear} The Tiffin Trap Restaurant. All rights reserved.
             </p>
             <div className="flex space-x-4">
               <Link href="/privacy-policy" className="hover:text-orange-400 transition duration-300">Privacy Policy</Link>
               <Link href="/terms-of-service" className="hover:text-orange-400 transition duration-300">Terms of Service</Link>
             </div>
           </div>
        </div> {/* End Bottom Bar */}

      </div> {/* End Container */}
    </footer>
  );
};

export default Footer;