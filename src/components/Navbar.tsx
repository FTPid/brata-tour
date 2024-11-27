'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/images/logo-brata.jpg" alt="Company Logo" className="h-10 w-10 mr-2" />
          <span className="text-black font-bold text-xl">Brata Tour</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="#hero" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-blue-500">
            Tentang
          </Link>
          <Link href="#services" className="text-gray-700 hover:text-blue-500">
            Layanan
          </Link>
          <Link href="#team" className="text-gray-700 hover:text-blue-500">
            Team
          </Link>
          <Link href="#testimonials" className="text-gray-700 hover:text-blue-500">
            Testimoni
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow">
          <Link href="#hero" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Home
          </Link>
          <Link href="#about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            About Us
          </Link>
          <Link href="#services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Services
          </Link>
          <Link href="#testimonials" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Testimonials
          </Link>
          <Link href="#team" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Team
          </Link>
        </div>
      )}
    </nav>
  );
}
