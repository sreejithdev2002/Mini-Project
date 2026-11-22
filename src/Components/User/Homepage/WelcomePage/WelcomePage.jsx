import React from "react";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-black text-white text-xs font-semibold tracking-wider mb-6 animate-fade-in-up">
              NEW COLLECTION 2026
            </span>
            <h1 className="text-5xl lg:text-7xl font-display font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              Step Into The <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
                Future
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Discover our latest drop of premium footwear. Engineered for comfort, designed for the streets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/latestarrival"
                className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-white bg-black hover:bg-gray-800 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Shop New Arrivals
              </Link>
              <Link
                to="/categories"
                className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-50 rounded-full transition-all duration-200"
              >
                Explore Collections
              </Link>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative z-10 lg:h-[600px] flex items-center justify-center">
            {/* Decorative Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-gray-200 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
            
            <img
              src="/premium_sneaker_hero.jpg" 
              alt="Premium Sneaker"
              className="relative z-20 w-full max-w-lg mx-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
              style={{ maxHeight: '500px' }}
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop"; // fallback image
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default WelcomePage;
