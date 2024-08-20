
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock login process
    navigate('/onebox');
  };

  const handleCreateAccount = () => {
    // Navigate to create account page
    navigate('/create-account');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800 dark:text-gray-100">Login</h2>
        <button 
          className="w-full px-4 py-2 mb-4 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login with Google
        </button>
        <div className="mt-4 text-center">
          <span className="text-gray-600 dark:text-gray-400">Don't have an account?</span>
          <button 
            className="ml-2 text-blue-500 hover:underline"
            onClick={handleCreateAccount}
          >
            Create an Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
