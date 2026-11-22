import React from 'react';
import { Link } from 'react-router-dom';

function Empty({ message }) {
  return (
    <div className="flex flex-col justify-center items-center h-[50vh] text-center px-4">
      <div className="w-24 h-24 mb-6 bg-gray-100 rounded-full flex items-center justify-center">
        <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      </div>
      <h2 className='font-display text-2xl font-bold text-gray-900 mb-2'>{message}</h2>
      <p className="text-gray-500 mb-8 max-w-sm">
        Looks like you haven't added anything here yet. Discover our latest collections.
      </p>
      <Link 
        to="/latestarrival"
        className="px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors shadow-sm"
      >
        Start Shopping
      </Link>
    </div>
  );
}

export default Empty;
