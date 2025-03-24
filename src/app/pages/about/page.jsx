import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <Header />
            <section className="max-w-4xl mx-auto text-center py-32 px-6">
                <h1 className="text-4xl font-bold mb-4">About SharpEdg</h1>
                <p className="text-lg text-gray-700">
                    SharpEdg is dedicated to providing quality education through online courses, expert instructors,
                    and an interactive learning experience.
                </p>
            </section>
            <Footer />
        </div>
    );
};

export default About;
