"use client"

import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 ">

            <section className=" py-2 px-6 max-w-4xl mx-auto pt-5 pb-24">

                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Have any questions? Reach out to us and we&apos;ll be happy to assist you.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-white  rounded-md p-7">
                    <div>
                        <input
                            type="text"
                            className="w-full p-2 border rounded outline-none"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            className="w-full p-2 border rounded outline-none"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <textarea
                            className="w-full p-2 border rounded outline-none"
                            rows="6"
                            placeholder="Your message"
                        ></textarea>
                    </div>
                    <button
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Send Message
                    </button>
                </div>
            </section>

        </div>
    );
};

export default Contact;
