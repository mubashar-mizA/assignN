"use client"
import React, { useState } from "react";


const Signup = () => {

    const [name, setName] = useState('')

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const handleSubmit = async () => {

        try {
            if (!name || !email || !password) {
                console.log("Please fill all fields!");
                return;
            }

            const url = '/api/auth'
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            })


            const result = await response.json()


            console.log("Backend response:", result);

            if (result.status === 201) {
                console.log("User registered successfully!");
            } else {
                console.log("Error:", result.message);
            }



        } catch (error) {

        }


    };

    return (

        <div className="flex items-center justify-center min-h-screen bg-gray-100">

            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Enter Username"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            required
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
