"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState(null);
    const router = useRouter();

    const handleContactForm = async () => {
        try {
            setLoading(true);
            const url = '/api/contact';
            const responseFromBackend = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            });

            const result = await responseFromBackend.json();
            setResponseMessage(result.message);
            setLoading(false);

            setTimeout(() => {
                router.push("/");
            }, 3000);
        } catch (error) {
            setLoading(false);
            setResponseMessage("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 ">
            <section className="py-2 px-6 max-w-4xl mx-auto pt-5 pb-24">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Have any questions? Reach out to us and we&apos;ll be happy to assist you.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto bg-white rounded-md p-7">
                    <input
                        type="text"
                        className="w-full p-2 border rounded outline-none mb-2"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        className="w-full p-2 border rounded outline-none mb-2"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        className="w-full p-2 border rounded outline-none mb-2"
                        rows="6"
                        placeholder="Your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
                        onClick={handleContactForm}
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                    {responseMessage && (
                        <p className="mt-4 text-center text-green-600">{responseMessage}</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Contact;
