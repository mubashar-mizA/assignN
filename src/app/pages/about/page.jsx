import React from "react";
import { FaBook, FaUsers, FaLightbulb } from "react-icons/fa";

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <section className="max-w-4xl mx-auto text-center py-32 px-6">
                <h1 className="text-4xl font-bold mb-4 text-blue-600">About SharpEdg</h1>
                <p className="text-lg text-gray-700 mb-8">
                    SharpEdg is dedicated to providing quality education through online courses, expert instructors,
                    and an interactive learning experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <AboutCard 
                        icon={<FaBook size={50} className="text-blue-600" />} 
                        title="Quality Education" 
                        description="We offer well-structured courses designed to enhance learning."
                    />
                    <AboutCard 
                        icon={<FaUsers size={50} className="text-blue-600" />} 
                        title="Expert Instructors" 
                        description="Learn from the best professionals in the industry."
                    />
                    <AboutCard 
                        icon={<FaLightbulb size={50} className="text-blue-600" />} 
                        title="Innovative Learning" 
                        description="Our courses focus on interactive and practical knowledge."
                    />
                </div>
            </section>
        </div>
    );
};

const AboutCard = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default About;
