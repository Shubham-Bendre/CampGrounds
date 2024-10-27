import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-12">Contact Us</h1>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <form>
              <label className="block mb-2 text-lg font-semibold text-gray-700">Name</label>
              <input 
                type="text" 
                className="w-full p-3 mb-4 border rounded-lg" 
                placeholder="Your Name" 
                required 
              />
              <label className="block mb-2 text-lg font-semibold text-gray-700">Email</label>
              <input 
                type="email" 
                className="w-full p-3 mb-4 border rounded-lg" 
                placeholder="Your Email" 
                required 
              />
              <label className="block mb-2 text-lg font-semibold text-gray-700">Message</label>
              <textarea 
                className="w-full p-3 mb-4 border rounded-lg" 
                rows="5" 
                placeholder="Your Message" 
                required
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Contact Information</h2>
            <p className="text-lg text-gray-700 mb-4">
              If you have any questions or need further assistance, feel free to reach out to us:
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Email:</strong> support@campgrounds.com
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p className="text-lg text-gray-700 mb-8">
              You can also follow us on social media for the latest updates and news.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">Facebook</a>
              <a href="#" className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg transition duration-300">Twitter</a>
              <a href="#" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
