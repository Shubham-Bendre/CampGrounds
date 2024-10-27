import React from 'react';
import { useNavigate } from 'react-router-dom';

function OpeningPage() {
  const navigate = useNavigate();

  const handleFindCampgrounds = () => {
    navigate('/campgrounds'); // Redirects to the existing campground listing page
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="p-6 bg-transparent text-white fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Campgrounds</div>
          <ul className="flex space-x-6">
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
            <li><a href="/services" className="hover:text-gray-300">Services</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
            <li>
              <button 
                onClick={handleFindCampgrounds}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                Find Nearby Campgrounds
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Text Section */}
        <div className="flex-1 flex items-center justify-center bg-gray-900 text-white p-12">
          <div className="text-center md:text-left max-w-md">
            <h1 className="text-5xl font-extrabold mb-6">
              Your Next Adventure Awaits
            </h1>
            <p className="text-lg mb-8">
              Discover and book the best camping spots around. Embrace the wilderness and reconnect with nature.
            </p>
            <button 
              onClick={handleFindCampgrounds}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg">
              Find Nearby Campgrounds
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div 
          className="flex-1 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNhbXBpbmd8ZW58MHwxfDB8fHwy')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Empty div for background image */}
        </div>
      </div>
    </div>
  );
}

export default OpeningPage;
