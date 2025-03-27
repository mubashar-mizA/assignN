"use client";  

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white pr-6 py-4 flex justify-between items-center px-5">
      <Link href='/' className="text-2xl font-mono">
        SharpEdg.com
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden sm:block">
        <ul className="flex space-x-6">
          <li><Link href="/" className="text-gray-200 hover:text-white">Home</Link></li>
          <li><Link href="/pages/about" className="text-gray-200 hover:text-white">About</Link></li>
          <li><Link href="/pages/contact" className="text-gray-200 hover:text-white">Contact</Link></li>
          <li><Link href="/pages/signup" className="text-gray-200 hover:text-white">Register</Link></li>
          <li><Link href="/pages/login" className="text-gray-200 hover:text-white">Login</Link></li>
          <li><Link href="/" className="text-gray-200 hover:text-white">Admin</Link></li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="sm:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        Menu
      </div>

      {/* Mobile Navigation */}
      <div className={`absolute top-16 left-0 w-full bg-blue-600 text-white p-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="space-y-4">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/pages/about" className="hover:underline">About</Link></li>
          <li><Link href="/pages/contact" className="hover:underline">Contact</Link></li>
          <li><Link href="/pages/login" className="hover:underline">Login</Link></li>
          <li><Link href="/pages/signup" className="hover:underline">Signup</Link></li>
          <li><Link href="/pages/" className="hover:underline">Admin</Link></li>  {/* 👈 Admin link added here */}
        </ul>
      </div>
    </header>
  );
}

export default Header;
