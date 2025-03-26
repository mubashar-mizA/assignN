"use client"

import { parseSetCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const handleContactForm = async () => {
        try {
            console.log(name, email, message)
            const url = '/api/contact'
            const responseFromBackend = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(name, email, message)
            })
            const result = await responseFromBackend.json()
            console.log('Result from backend', result)
        } catch (error) {
            console.log(error)
        }
    }
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

                    <input
                        type="text"
                        className="w-full p-2 border rounded outline-none"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                    <input
                        type="email"
                        className="w-full p-2 border rounded outline-none"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />


                    <textarea
                        className="w-full p-2 border rounded outline-none"
                        rows="6"
                        placeholder="Your message"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value)
                        }}
                    ></textarea>

                    <button
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                        onClick={handleContactForm}
                    >
                        Send Message
                    </button>
                </div>
            </section >

        </div >
    );
};

export default Contact;
