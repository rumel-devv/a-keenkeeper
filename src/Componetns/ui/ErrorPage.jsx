import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-[80vh] md:min-h-screen ">
      
      <div className="text-center  p-8 rounded-2xl ">
        
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          No Data Found
        </h1>

        <p className="text-gray-500 mb-6">
          Sorry, we couldn't find any data to display.
        </p>
         
         <Link to='/'>
        <button
          className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition" >
          Go Home
        </button>
        </Link>
      </div>

    </div>
  );
};

export default ErrorPage;