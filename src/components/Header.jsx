"use client";  // 👈 Yeh line add karein

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 px-6 sm:px-16 flex justify-between items-center">
      <Link href='/' className="text-2xl font-semibold">
        SharpEdg.com
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden sm:block">
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className="hover:underline">
              Home</Link>
          </li>

          <li>
            <Link
              href="/pages/about"
              className="hover:underline">
              About</Link>
          </li>

          <li><Link
            href="/pages/contact"
            className="hover:underline">
            Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
        Menu
      </div>

      {/* Mobile Navigation */}
      <div className={`absolute top-16 left-0 w-full bg-blue-600 text-white p-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="space-y-4">
          <li>
            <Link
              href="/"
              className="hover:underline">
              Home</Link>
          </li>

          <li>
            <Link
              href="/pages/about"
              className="hover:underline">
              About</Link>
          </li>

          <li><Link
            href="/pages/contact"
            className="hover:underline">
            Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
