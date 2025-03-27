import React from "react";
import { FaChalkboardTeacher, FaLaptopCode, FaBookReader, FaGraduationCap } from "react-icons/fa";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-3">Our Services</h1>
        <p className="text-gray-700 text-lg">We provide top-quality education and learning resources.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ServiceCard icon={<FaChalkboardTeacher size={40} className="text-blue-600" />} title="Expert Teachers" />
        <ServiceCard icon={<FaLaptopCode size={40} className="text-blue-600" />} title="Online Courses" />
        <ServiceCard icon={<FaBookReader size={40} className="text-blue-600" />} title="Study Materials" />
        <ServiceCard icon={<FaGraduationCap size={40} className="text-blue-600" />} title="Certifications" />
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
    </div>
  );
};

export default Services;
