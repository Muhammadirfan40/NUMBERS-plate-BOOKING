import React, { useState } from 'react';
import Backgroundimg from '../../Component/Backgroundimg/Backgroundimg';

function CreateNewPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleConfirm = () => {
        setError('');
        setSuccess('');
        if (password !== confirmPassword) {
            setError('Passwords do not match. Please try again.');
        } else {
            // Mock API call (replace with your actual API)
            console.log('New password set successfully:', password);
            setSuccess('Your password has been successfully updated.');
        }
    };

    return (
        <div className="relative h-screen">
            {/* Background Image */}
            <Backgroundimg />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Create New Password Form */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-2xl font-bold text-center mb-6">Create New Password</h1>

                    {/* Error or Success Message */}
                    {error && (
                        <div className="mb-4 text-red-600 text-center font-medium">{error}</div>
                    )}
                    {success && (
                        <div className="mb-4 text-green-600 text-center font-medium">{success}</div>
                    )}

                    {/* Password Input */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            New Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your new password"
                        />
                    </div>

                    {/* Confirm Password Input */}
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Re-enter your new password"
                        />
                    </div>

                    {/* Confirm Button */}
                    <button
                        type="button"
                        onClick={handleConfirm}
                        className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 focus:outline-none"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateNewPassword;
