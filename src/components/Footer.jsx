import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-gray-300 py-10 sm:px-6">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:text-center md:text-left px-7">
        
        {/* Brand Section */}
        <div className="flex flex-col  items-start gap-1 sm:gap-0">
          <Link href="/" className="text-2xl font-bold text-white font-mono">
            SharpEdg.com
          </Link>
          <p className="mt-2" style={{ letterSpacing: '0.1em' }} >Empowering your learning journey.</p>
          {/* Social Media Links */}
          <div className="flex  gap-4 mt-4 text-white">
            <a href="#" className="hover:text-gray-400"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-gray-400"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-gray-400"><FaLinkedin size={20} /></a>
            <a href="#" className="hover:text-gray-400"><FaInstagram size={20} /></a>
          </div>
        </div>

        {/* Important Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Links</h2>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white " style={{ letterSpacing: '0.3em' }} >Home</Link></li>
            <li><Link href="/pages/about" className="hover:text-white " style={{ letterSpacing: '0.3em' }} >About</Link></li>
            <li><Link href="/pages/contact" className="hover:text-white " style={{ letterSpacing: '0.3em' }} >Contact</Link></li>
            <li><Link href="/pages/services" className="hover:text-white " style={{ letterSpacing: '0.3em' }} >Services</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Services</h2>
          <ul className="space-y-2">
            <li style={{ letterSpacing: '0.1em' }} >Certifications</li>
            <li style={{ letterSpacing: '0.1em' }} >Live Webinars</li>
            <li style={{ letterSpacing: '0.1em' }} >Online Courses</li>
            <li style={{ letterSpacing: '0.1em' }} >Career Counseling</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 mt-8 pt-4 text-center text-sm" style={{ letterSpacing: '0.4em' }}  >
        &copy; {new Date().getFullYear()} SharpEdg.com All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
