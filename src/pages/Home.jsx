import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 px-4">
    <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full text-center">
      <h1 className="text-4xl font-extrabold text-indigo-600 mb-4">
        MERN Auth & Roles
      </h1>
      <p className="text-gray-700 mb-8 text-base">
        Role-Based Access Control & Permissions in React | MERN Stack
      </p>

      <div className="flex flex-col gap-4">
        <Link to="/login">
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl text-lg font-semibold transition duration-300 shadow-md hover:shadow-lg">
            Login
          </button>
        </Link>

        <Link to="/sign-up">
          <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-xl text-lg font-semibold transition duration-300 shadow-md hover:shadow-lg">
            Register
          </button>
        </Link>
      </div>
    </div>
  </div>
  );
};

export default Home;
