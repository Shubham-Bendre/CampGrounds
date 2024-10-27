import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function HomePage() {
  // Initial list of campgrounds with prices and reviews
  const [campgrounds, setCampgrounds] = useState([
  { id: 1, name: "Sunny Ridge Campground", lat: 34.0522, lng: -118.2437, img: "/images/sunny_ridge.jpg", price: 2987, reviews: 4.5 },
  { id: 2, name: "Mountain View Campsite", lat: 39.7392, lng: -104.9903, img: "/images/mountain_view.avif", price: 3735, reviews: 4.0 },
  { id: 3, name: "Lake Serenity Campground", lat: 36.1627, lng: -86.7816, img: "/images/lake_serenity.avif", price: 3320, reviews: 4.3 },
  { id: 4, name: "Manali Camping", lat: 32.2396, lng: 77.1887, img: "/images/manali_camping.avif", price: 2500, reviews: 4.6 },
  { id: 5, name: "Rishikesh Riverside Camps", lat: 30.0869, lng: 78.2711, img: "/images/rishikesh_riverside.avif", price: 2800, reviews: 4.7 },
  { id: 6, name: "Goa Beach Camp", lat: 15.2993, lng: 74.1240, img: "/images/goa_beach_camp.avif", price: 3000, reviews: 4.4 },
  { id: 7, name: "Banff National Park Campground", lat: 51.1784, lng: -115.5708, img: "/images/banff_national_park.avif", price: 4000, reviews: 4.8 },
  { id: 8, name: "Zion National Park Campground", lat: 37.2975, lng: -113.1834, img: "/images/zion_national_park.avif", price: 3500, reviews: 4.6 },
  { id: 9, name: "Queenstown Lakeside Campsite", lat: -45.0311, lng: 168.6626, img: "/images/queenstown_lakeside.avif", price: 4200, reviews: 4.7 }
]);


  // State to manage sorting and location filtering
  const [sortOption, setSortOption] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  // Handle sorting
  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);

    let sortedCampgrounds;
    if (option === 'nameAsc') {
      sortedCampgrounds = [...campgrounds].sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === 'nameDesc') {
      sortedCampgrounds = [...campgrounds].sort((a, b) => b.name.localeCompare(a.name));
    } else if (option === 'priceAsc') {
      sortedCampgrounds = [...campgrounds].sort((a, b) => a.price - b.price);
    } else if (option === 'priceDesc') {
      sortedCampgrounds = [...campgrounds].sort((a, b) => b.price - a.price);
    }

    setCampgrounds(sortedCampgrounds);
  };

  // Handle location filtering
  const handleLocationChange = (e) => {
    setLocationFilter(e.target.value);
  };

  // Filter campgrounds based on location
  const filteredCampgrounds = campgrounds.filter(campground =>
    campground.name.toLowerCase().includes(locationFilter.toLowerCase())
  );

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

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-900">Find Your Perfect Camping Spot</h1>

      {/* Leaflet Map with OpenStreetMap tiles */}
      <MapContainer center={[39.8283, -98.5795]} zoom={4} style={{ height: "400px", width: "100%", marginBottom: "2rem" }} className="rounded-lg shadow-lg">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {campgrounds.map(campground => (
          <Marker key={campground.id} position={[campground.lat, campground.lng]}>
            <Popup>{campground.name}</Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Location Filter */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          value={locationFilter}
          onChange={handleLocationChange}
          className="p-2 border rounded-lg shadow-sm w-full max-w-lg"
          placeholder="Find by name...."
        />
      </div>

      {/* Sorting Dropdown */}
      <div className="mb-8 flex justify-center">
        <select value={sortOption} onChange={handleSortChange} className="p-2 border rounded-lg shadow-sm w-full max-w-lg">
          <option value="">Sort by...</option>
          <option value="nameAsc">Name (A-Z)</option>
          <option value="nameDesc">Name (Z-A)</option>
          <option value="priceAsc">Price (Low to High)</option>
          <option value="priceDesc">Price (High to Low)</option>
        </select>
      </div>

      {/* List of Campgrounds */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCampgrounds.length > 0 ? (
          filteredCampgrounds.map(campground => (
            <Link
              key={campground.id}
              to={`/campgrounds/${campground.id}`}
              className="block p-6 border rounded-lg shadow-lg bg-white hover:bg-gray-50 transition"
            >
              <img src={campground.img} alt={campground.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-semibold text-blue-800">{campground.name}</h2>
                <p className="text-2xl font-bold text-green-500">₹{campground.price}</p>
              </div>
              <div className="flex items-center text-lg">
                <span className="mr-2">{campground.reviews} / 5</span>
                <div className="flex">{renderStars(Math.round(campground.reviews))}</div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-3">No campgrounds found.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
