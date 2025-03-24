import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* SharpEdg Section */}
        <div className='flex items-center justify-center border-r'>
          <div className='flex flex-col items-center gap-1' >
            <Link
              href='/'
              className="text-xl font-bold "
            >
              SharpEdg.com
            </Link>
            <p className="text-xs">Empowering your learning journey.</p>
          </div>
        </div>

        {/* Important Links Section */}
        <div className=' border-r'>
          <h2 className="text-lg font-semibold mb-2">Important Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className=" hover:underline">Home</a></li>
            <li><a href="#" className=" hover:underline">About</a></li>
            <li><a href="#" className=" hover:underline">Services</a></li>
            <li><a href="#" className=" hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Our Services</h2>
          <ul className="space-y-2">
            <li className="">Online Courses</li>
            <li className="">Live Webinars</li>
            <li className="">Career Counseling</li>
            <li className="">Certifications</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm mt-16">&copy; {new Date().getFullYear()} SharpEdg.com All rights reserved.</p>
    </footer>
  );
}

export default Footer