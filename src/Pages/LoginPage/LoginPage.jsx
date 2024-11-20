import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Backgroundimg from '../../Component/Backgroundimg/Backgroundimg';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative h-screen">
            {/* Background Image */}
            <Backgroundimg />

            {/* Overlay to dim the background */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Login Form */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md">
                    {/* Top Message */}
                    <h1 className="text-2xl italic text-center mb-6 font-medium text-gray-700">
                        Complete your <br />
                        <span className="text-xl font-bold text-black">
                            Details to access <br /> exclusive plate Number
                        </span>
                    </h1>

                    {/* Sign In Header */}
                    <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 mt-8"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    {/* Forgot Password */}
                    <div className="mb-6 text-right">
                        <Link to="/forgetpassword" className="text-sm text-blue-500 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Login Button */}
                    <button
                        type="button"
                        className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 focus:outline-none"
                    >
                        Login
                    </button>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-grow h-px bg-gray-300"></div>
                        <span className="px-4 text-gray-500">or</span>
                        <div className="flex-grow h-px bg-gray-300"></div>
                    </div>

                    {/* Register Link */}
                    <div className="text-center">
                        <p className="text-gray-600">
                            Don't have an account?{" "}
                            <Link to="/regterpage" className="text-blue-500 hover:underline font-bold">
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
