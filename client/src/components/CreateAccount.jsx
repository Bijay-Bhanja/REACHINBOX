
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    if (password === confirmPassword) {
      // Mock account creation process
      alert('Account created successfully!');
      navigate('/onebox');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800 dark:text-gray-100">Create Account</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-200 rounded-lg dark:bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-200 rounded-lg dark:bg-gray-700"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-200 rounded-lg dark:bg-gray-700"
        />
        <button 
          className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          onClick={handleCreateAccount}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
