"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Keep if you plan to use a logo image

// Optional: Import icons if you prefer them over inline SVGs
// import { HiMenu, HiX } from 'react-icons/hi';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/reservations', label: 'Reservations' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    // { href: '/signup', label: 'SignUp/Login' }, // Combine or adjust as needed
  ];

  return (
    // Sticky header with background, shadow, and z-index
    <header className="bg-orange-600 text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

        {/* Logo/Brand Name */}
        <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity" onClick={handleLinkClick}>
          {/* Optional: Replace text with Image component if you have a logo */}
          {/* <Image src="/logo.png" alt="The Tiffin Trap Logo" width={150} height={40} /> */}
          The Tiffin Trap
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <ul className="flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium hover:text-orange-200 transition-colors duration-200 pb-1 border-b-2 border-transparent hover:border-orange-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Optional: Desktop Call to Action Button */}
           <Link
              href="/order-online" // Example link
              className="bg-white text-orange-600 hover:bg-orange-100 font-semibold py-2 px-5 rounded-full transition-colors duration-200 text-sm shadow"
            >
              Order Online
           </Link>
           <Link
              href="/signup" // Example link
              className="bg-orange-700 hover:bg-orange-800 text-white font-semibold py-2 px-5 rounded-full transition-colors duration-200 text-sm"
            >
              Sign Up
           </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-orange-100 hover:text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              // Close Icon (X)
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-orange-600/95 backdrop-blur-sm shadow-lg" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-orange-100 hover:bg-orange-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={handleLinkClick} // Close menu on click
              >
                {item.label}
              </Link>
            ))}
             {/* Optional: Mobile Call to Action Buttons */}
             <div className="pt-4 pb-2 border-t border-orange-500/50 space-y-2">
                <Link
                  href="/order-online"
                  className="block w-full text-center bg-white text-orange-600 hover:bg-orange-100 font-semibold py-2 px-4 rounded-md transition-colors duration-200 text-sm shadow"
                  onClick={handleLinkClick}
                >
                  Order Online
                </Link>
                 <Link
                  href="/signup"
                  className="block w-full text-center bg-orange-700 hover:bg-orange-800 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 text-sm"
                   onClick={handleLinkClick}
                >
                  Sign Up
                </Link>
             </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;