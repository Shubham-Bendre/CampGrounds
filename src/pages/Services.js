import React from 'react';

function Services() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-center text-green-600 mb-12">Our Services</h1>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="bg-green-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-center mb-4">
              <img
                src="https://source.unsplash.com/100x100/?camping,booking"
                alt="Campground Booking"
                className="mx-auto rounded-full"
              />
            </div>
            <h2 className="text-2xl font-bold text-center text-green-700 mb-4">Campground Booking</h2>
            <p className="text-gray-600 text-center">
              Easily find and book the best camping spots near you with just a few clicks. We offer a wide range of campgrounds for every adventurer.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-blue-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-center mb-4">
              <img
                src="https://source.unsplash.com/100x100/?campfire,guide"
                alt="Campfire and Guide"
                className="mx-auto rounded-full"
              />
            </div>
            <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Guided Campfire Experiences</h2>
            <p className="text-gray-600 text-center">
              Enjoy unforgettable guided campfire experiences led by our seasoned guides. Perfect for families, friends, and solo campers alike.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-yellow-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-center mb-4">
              <img
                src="https://source.unsplash.com/100x100/?hiking,trail"
                alt="Hiking Trails"
                className="mx-auto rounded-full"
              />
            </div>
            <h2 className="text-2xl font-bold text-center text-yellow-700 mb-4">Hiking Trail Recommendations</h2>
            <p className="text-gray-600 text-center">
              Explore the best hiking trails around your chosen campsite with our detailed trail recommendations, perfect for all skill levels.
            </p>
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-green-200 to-blue-200 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Additional Services</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center">
              <span className="bg-green-400 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">✓</span>
              Custom Campground Packages tailored to your needs.
            </li>
            <li className="flex items-center">
              <span className="bg-blue-400 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">✓</span>
              Equipment Rentals, including tents, sleeping bags, and more.
            </li>
            <li className="flex items-center">
              <span className="bg-yellow-400 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">✓</span>
              Nature Photography Sessions to capture your adventure.
            </li>
            <li className="flex items-center">
              <span className="bg-red-400 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">✓</span>
              Wildlife Watching Tours with experienced guides.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
