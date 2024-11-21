import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import emailjs from 'emailjs-com';


function CampgroundDetail() {
  const { id } = useParams();

  // Dummy campground data
  const campgrounds = [
  {
    id: 1,
    name: "Sunny Ridge Campground",
    lat: 34.0522,
    lng: -118.2437,
    description: "A serene getaway with beautiful views, perfect for a weekend retreat. Offers hiking trails, fishing, and BBQ pits.",
    img: "/images/sunny_ridge.jpg",
    pricePerPerson: 2987,
    amenities: "Hiking trails, Fishing, BBQ pits, Restrooms, Picnic tables",
    maxCapacity: 100,
    locationDetails: "Located in the hills of California, 30 miles from downtown Los Angeles.",
  },
  {
    id: 2,
    name: "Mountain View Campsite",
    lat: 39.7392,
    lng: -104.9903,
    description: "Nestled in the foothills of the Rockies, this campsite offers stunning mountain views and a range of outdoor activities. Ideal for those who love nature and adventure.",
    img: "/images/mountain_view.avif",
    pricePerPerson: 3735,
    amenities: "Hiking trails, Mountain biking, Fishing, Restrooms, Fire pits",
    maxCapacity: 80,
    locationDetails: "Located in Evergreen, Colorado, approximately 25 miles from Denver.",
  },
  {
    id: 3,
    name: "Lake Serenity Campground",
    lat: 36.1627,
    lng: -86.7816,
    description: "A peaceful lakeside campground perfect for fishing enthusiasts and families. Enjoy serene waters, birdwatching, and scenic walks.",
    img: "/images/lake_serenity.avif",
    pricePerPerson: 3320,
    amenities: "Fishing, Canoeing, Hiking trails, Restrooms, Picnic areas",
    maxCapacity: 60,
    locationDetails: "Situated on the outskirts of Nashville, Tennessee, about 15 miles from the city center.",
  },
  {
    id: 4,
    name: "Manali Camping",
    lat: 32.2396,
    lng: 77.1887,
    description: "Enjoy the breathtaking views of the Himalayas with camping experiences that offer adventure and tranquility. Perfect for nature lovers and thrill-seekers alike.",
    img: "/images/manali_camping.avif",
    pricePerPerson: 2500,
    amenities: "Hiking, Trekking, Campfires, Restrooms, Scenic views",
    maxCapacity: 50,
    locationDetails: "Located in Manali, Himachal Pradesh, a popular hill station in northern India.",
  },
  {
    id: 5,
    name: "Rishikesh Riverside Camps",
    lat: 30.0869,
    lng: 78.2711,
    description: "Situated on the banks of the Ganges, this campsite offers a mix of adventure and relaxation. Ideal for white-water rafting, yoga, and riverfront camping.",
    img: "/images/rishikesh_riverside.avif",
    pricePerPerson: 2800,
    amenities: "River rafting, Yoga sessions, Campfires, Restrooms, Scenic river views",
    maxCapacity: 80,
    locationDetails: "Located in Rishikesh, Uttarakhand, known for its spiritual and adventure tourism.",
  },
  {
    id: 6,
    name: "Goa Beach Camp",
    lat: 15.2993,
    lng: 74.1240,
    description: "Experience the vibrant beach life with this beachfront camping spot. Enjoy beach activities, bonfires, and the beautiful Goan sunset.",
    img: "/images/goa_beach_camp.avif",
    pricePerPerson: 3000,
    amenities: "Beach access, Bonfires, Water sports, Restrooms, Picnic areas",
    maxCapacity: 100,
    locationDetails: "Located in Goa, known for its stunning beaches and vibrant nightlife.",
  },
  {
    id: 7,
    name: "Banff National Park Campground",
    lat: 51.1784,
    lng: -115.5708,
    description: "Set in the heart of the Canadian Rockies, this campground offers spectacular mountain views, hiking trails, and wildlife spotting opportunities.",
    img: "/images/banff_national_park.avif",
    pricePerPerson: 4000,
    amenities: "Hiking trails, Wildlife viewing, Fishing, Restrooms, Picnic areas",
    maxCapacity: 120,
    locationDetails: "Located in Banff, Alberta, Canada, within the famous Banff National Park.",
  },
  {
    id: 8,
    name: "Zion National Park Campground",
    lat: 37.2975,
    lng: -113.1834,
    description: "Experience the stunning landscapes of Zion National Park with access to incredible hikes, rock formations, and scenic views.",
    img: "/images/zion_national_park.avif",
    pricePerPerson: 3500,
    amenities: "Hiking, Rock climbing, Scenic views, Restrooms, Campfire rings",
    maxCapacity: 90,
    locationDetails: "Located in Zion National Park, Utah, USA, known for its impressive canyons and rock formations.",
  },
  {
    id: 9,
    name: "Queenstown Lakeside Campsite",
    lat: -45.0311,
    lng: 168.6626,
    description: "Enjoy a lakeside camping experience with beautiful views of Lake Wakatipu and the surrounding mountains. Perfect for outdoor activities and relaxation.",
    img: "/images/queenstown_lakeside.avif",
    pricePerPerson: 4200,
    amenities: "Fishing, Boating, Hiking, Restrooms, Picnic tables",
    maxCapacity: 70,
    locationDetails: "Located in Queenstown, New Zealand, a popular destination for outdoor adventures and stunning scenery.",
  }
];


  const campground = campgrounds.find(cg => cg.id === parseInt(id));

  // State to manage booking details
  const [bookingDetails, setBookingDetails] = useState({
    startDate: '',
    endDate: '',
    numPeople: 1,
    specialRequests: '',
    email: '',
    totalPrice: campground ? campground.pricePerPerson : 0,
  });


  // State to manage reviews
  const [reviews, setReviews] = useState([
    { name: "John Doe", rating: 5, text: "Amazing experience! The views were stunning and the amenities were top-notch." },
    { name: "Jane Smith", rating: 4, text: "Great place to relax and unwind. Highly recommend the hiking trails!" }
  ]);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: '',
    text: ''
  });

  // State to manage availability
  const [availability, setAvailability] = useState(true);

  // Handle booking input change
  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => {
      const updatedDetails = { ...prevDetails, [name]: value };

      // Update total price based on the number of people
      if (name === "numPeople") {
        updatedDetails.totalPrice = campground.pricePerPerson * parseInt(value);
      }

      return updatedDetails;
    });
  };

 // Handle booking form submission
const handleBookingSubmit = (e) => {
  e.preventDefault();

  // Generate QR Code URL based on the user's email and booking info
  const qrCodeUrl = ``;

  // Send confirmation email
  emailjs.send('', '', {
    email: bookingDetails.email,
    startDate: bookingDetails.startDate,
    endDate: bookingDetails.endDate,
    numPeople: bookingDetails.numPeople,
    totalPrice: bookingDetails.totalPrice,
    campgroundName: campground.name,
    specialRequests: bookingDetails.specialRequests,
    qrCodeUrl: qrCodeUrl
  }, '')
  .then((response) => {
    alert('Booking Confirmed! A confirmation email has been sent.');
  })
  .catch((error) => {
    alert('Booking confirmed, but failed to send the email.');
  });

  // Reset booking form
  setBookingDetails({
    startDate: '',
    endDate: '',
    numPeople: 1,
    specialRequests: '',
    email: '',
    totalPrice: campground.pricePerPerson
  });
};


  // Handle review input change
  const handleReviewChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  // Handle review form submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    // Reset review form
    setNewReview({
      name: '',
      rating: '',
      text: ''
    });
  };

  // Check availability
  useEffect(() => {
    // Fetch availability data based on booking details
  }, [bookingDetails]);

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? 'text-yellow-500' : 'text-gray-300'}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  // If campground is not found
  if (!campground) {
    return <div>Campground not found!</div>;
  }

  return (
    <div className="p-6 space-y-8">
      {/* Map at the top */}
      <MapContainer center={[campground.lat, campground.lng]} zoom={10} style={{ height: "400px", width: "100%" }} className="rounded-lg shadow-lg mb-8">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[campground.lat, campground.lng]}>
          <Popup>{campground.name}</Popup>
        </Marker>
      </MapContainer>

{/* Container for Campground Details and Image Section */}
<div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 mb-8">

  {/* Campground Details in Card */}
  <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
    <h1 className="text-3xl font-bold mb-4">{campground.name}</h1>
    <p className="text-lg mb-4"><strong>Description:</strong> {campground.description}</p>
    <p className="text-lg mb-4"><strong>Amenities:</strong> {campground.amenities}</p>
    <p className="text-lg mb-4"><strong>Location:</strong> {campground.locationDetails}</p>
    <p className="text-lg mb-4"><strong>Max Capacity:</strong> {campground.maxCapacity} people</p>
  </div>

  {/* Image Section */}
  <div className="bg-white p-4 rounded-lg shadow-lg flex-1">
    <img
      src={campground.img}
      alt={campground.name}
      className="w-full h-80 object-cover rounded-lg"
    />
  </div>

</div>

{/* Booking Section */}
<div className="bg-white p-8 rounded-lg shadow-lg mb-8">
  <h2 className="text-2xl font-semibold mb-6 text-center">Book Your Campsite</h2>
  <div className="flex justify-between items-center mb-6">
    <p className="text-xl font-bold text-green-600">Price: ₹{campground.pricePerPerson} per person per day</p>
    <p className="text-2xl font-bold text-blue-600">Total Price: ₹{bookingDetails.totalPrice}</p>
  </div>
  <form onSubmit={handleBookingSubmit} className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Start Date:</label>
        <input
          type="date"
          name="startDate"
          className="p-2 border border-gray-300 rounded-lg w-full"
          value={bookingDetails.startDate}
          onChange={handleBookingChange}
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">End Date:</label>
        <input
          type="date"
          name="endDate"
          className="p-2 border border-gray-300 rounded-lg w-full"
          value={bookingDetails.endDate}
          onChange={handleBookingChange}
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Number of People:</label>
        <input
          type="number"
          name="numPeople"
          className="p-2 border border-gray-300 rounded-lg w-full"
          value={bookingDetails.numPeople}
          onChange={handleBookingChange}
          min="1"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Special Requests:</label>
        <textarea
          name="specialRequests"
          className="p-2 border border-gray-300 rounded-lg w-full"
          rows="4"
          placeholder="e.g., near water, close to restrooms"
          value={bookingDetails.specialRequests}
          onChange={handleBookingChange}
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Email:</label>
        <input
          type="email"
          name="email"
          className="p-2 border border-gray-300 rounded-lg w-full"
          placeholder="Your email address"
          value={bookingDetails.email}
          onChange={handleBookingChange}
          required
        />
      </div>
    </div>
    <button type="submit" className={`py-3 px-4 rounded-lg w-full ${availability ? 'bg-blue-600 text-white' : 'bg-gray-400 text-white'}`}>
      {availability ? 'Book Now' : 'Check Availability'}
    </button>
    {!availability && <p className="text-red-500 mt-4 text-center">Selected dates are not available. Please choose different dates.</p>}
  </form>
</div>



{/* Review Section */}
<div className="bg-white p-8 rounded-lg shadow-lg">
  <h2 className="text-2xl font-semibold mb-6">Leave a Review</h2>
  <div className="flex space-x-8">
    {/* Leave a Review Form */}
    <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-sm">
      <form onSubmit={handleReviewSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            className="p-3 border border-gray-300 rounded-lg w-full"
            value={newReview.name}
            onChange={handleReviewChange}
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Rating (1-5):</label>
          <input
            type="number"
            name="rating"
            className="p-3 border border-gray-300 rounded-lg w-full"
            value={newReview.rating}
            onChange={handleReviewChange}
            min="1"
            max="5"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Review:</label>
          <textarea
            name="text"
            className="p-3 border border-gray-300 rounded-lg w-full"
            rows="4"
            value={newReview.text}
            onChange={handleReviewChange}
            required
          />
        </div>
        <button type="submit" className="py-3 px-4 bg-green-600 text-white rounded-lg w-full">
          Submit Review
        </button>
      </form>
    </div>
    
    {/* Reviews Already Submitted */}
    <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Reviews:</h3>
      {reviews.length === 0 ? (
        <p className="text-center text-gray-500">No reviews yet.</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm mb-4">
            <p className="text-lg font-bold mb-2">{review.name} {renderStars(review.rating)}</p>
            <p>{review.text}</p>
          </div>
        ))
      )}
    </div>
  </div>
</div>

      
    </div>
  );
}

export default CampgroundDetail;

