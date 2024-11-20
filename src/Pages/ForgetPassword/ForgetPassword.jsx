import React, { useState } from 'react';
import Backgroundimg from '../../Component/Backgroundimg/Backgroundimg';

function ForgetPassword() {
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSendOtp = async () => {
        setLoading(true);
        setError('');
        try {
            // Mock API call (replace with your actual API call)
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log(`Sending OTP to email: ${email}`);
            setIsOtpSent(true);
        } catch (err) {
            setError('Failed to send OTP. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async () => {
        setLoading(true);
        setError('');
        try {
            // Mock API call (replace with your actual API call)
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log(`Verifying OTP: ${otp}`);
            // Add further logic for OTP verification success
        } catch (err) {
            setError('Invalid OTP. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative h-screen">
            <Backgroundimg />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-lg text-center mb-6 font-medium text-gray-700">
                        Complete your <br />
                        <span className="text-xl font-bold text-black">
                            Details to access <br /> exclusive plate Number
                        </span>
                    </h1>
                    <h1 className="text-2xl font-bold text-center mb-6">Forgot Password</h1>

                    {error && (
                        <div className="mb-4 text-red-600 text-center font-medium">{error}</div>
                    )}

                    {!isOtpSent ? (
                        <>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <button
                                type="button"
                                onClick={handleSendOtp}
                                className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 focus:outline-none"
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send OTP'}
                            </button>
                        </>
                    ) : (
                        <>
                            <div className="mb-4">
                                <label htmlFor="otp" className="block text-gray-700 font-medium mb-2">
                                    Enter OTP
                                </label>
                                <input
                                    type="text"
                                    id="otp"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    maxLength={4}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter 4-digit OTP"
                                />
                            </div>

                            <button
                                type="button"
                                onClick={handleVerifyOtp}
                                className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 focus:outline-none"
                                disabled={loading}
                            >
                                {loading ? 'Verifying...' : 'Verify OTP'}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword;
