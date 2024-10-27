import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-12">About Campgrounds</h1>

        {/* Who We Are Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Campgrounds, we are passionate about the great outdoors. Our mission is to help outdoor enthusiasts find the perfect campsite for their next adventure. 
              Whether you're a seasoned camper or trying it out for the first time, we believe that everyone should experience the beauty of nature.
              At Campgrounds, we are passionate about the great outdoors. Our mission is to help outdoor enthusiasts find the perfect campsite for their next adventure. 
              Whether you're a seasoned camper or trying it out for the first time, we believe that everyone should experience the beauty of nature.
              At Campgrounds, we are passionate about the great outdoors. Our mission is to help outdoor enthusiasts find the perfect campsite for their next adventure. 
              Whether you're a seasoned camper or trying it out for the first time, we believe that everyone should experience the beauty of nature.
              At Campgrounds, we are passionate about the great outdoors. Our mission is to help outdoor enthusiasts find the perfect campsite for their next adventure. 
              Whether you're a seasoned camper or trying it out for the first time, we believe that everyone should experience the beauty of nature.
              At Campgrounds, we are passionate about the great outdoors. Our mission is to help outdoor enthusiasts find the perfect campsite for their next adventure. 
              Whether you're a seasoned camper or trying it out for the first time, we believe that everyone should experience the beauty of nature.
              At Campgrounds, we are passionate about the great outdoors. Our mission is to help outdoor enthusiasts find the perfect campsite for their next adventure. 
              Whether you're a seasoned camper or trying it out for the first time, we believe that everyone should experience the beauty of nature.
            </p>
          </div>
          <div>
            <img 
              src="/images/about.avif"
              alt="Nature and Camping"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="mb-16 bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            Our mission is to connect people with nature through exceptional camping experiences. We believe that spending time outdoors has a profound impact on mental
            health and well-being. By providing an easy-to-use platform to discover and book the best camping spots, we aim to make nature accessible to everyone.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed text-center mt-4">
            We are committed to promoting sustainable camping practices and working closely with campground owners to ensure that their sites remain beautiful for future
            generations.
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-blue-100 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Wide Selection of Campgrounds</h3>
            <p className="text-lg text-gray-600 text-center">
              From remote wilderness sites to family-friendly parks, we offer a diverse range of camping options for every type of adventurer.
            </p>
          </div>
          <div className="bg-green-100 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Easy Booking</h3>
            <p className="text-lg text-gray-600 text-center">
              Our intuitive platform makes finding and booking your ideal campsite a breeze, so you can spend less time planning and more time enjoying the outdoors.
            </p>
          </div>
          <div className="bg-yellow-100 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Trusted Reviews</h3>
            <p className="text-lg text-gray-600 text-center">
              Read honest reviews from fellow campers to ensure that you're choosing the best campsite for your needs.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

export default About;
