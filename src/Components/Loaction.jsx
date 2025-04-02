
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "10px",
  cursor: "pointer",
};

// Locations Array
const locations = [
  {
    name: "Home",
    lat: 19.278510200135127,
    lng: 73.06252894154686,
  },
  {
    name: "Wedding Hall",
    lat: 19.28740264037169,  // Replace with actual latitude
    lng: 73.05824349165613, // Replace with actual longitude
  },
];

const Location = () => {
  const handleMapClick = (lat, lng) => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDAKrhTYGzatmdxvgT3EGAUEin91QboKLk">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        {locations.map((loc, index) => (
          <div 
            key={index} 
            className="bg-gray-100 p-4 rounded-xl shadow-lg cursor-pointer hover:shadow-2xl transition"
            onClick={() => handleMapClick(loc.lat, loc.lng)}
          >
            <h3 className="text-xl font-semibold text-center mb-2">{loc.name}</h3>
            <GoogleMap 
              mapContainerStyle={containerStyle} 
              center={{ lat: loc.lat, lng: loc.lng }} 
              zoom={15}
            >
              <Marker position={{ lat: loc.lat, lng: loc.lng }} />
            </GoogleMap>
          </div>
        ))}
      </div>
    </LoadScript>
  );
};

export default Location;
