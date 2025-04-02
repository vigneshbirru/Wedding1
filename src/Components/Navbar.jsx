import React from "react";
import logo from "../assets/photos/logo.png";
import location from "../assets/photos/location.png";
import Location from "./Location";

const locations = [
  {
    name: "Home",
    lat: 19.278510200135127,
    lng: 73.06252894154686,
  },
  {
    name: "Wedding Hall",
    lat: 19.28740264037169,
    lng: 73.05824349165613,
  },
];

const Navbar = () => {
  const handleLocationClick = (lat, lng) => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="flex justify-center">
      <nav className="w-[95%] max-w-[1400px] h-[60px] flex justify-between items-center bg-[#F1E7E7] shadow-lg rounded-xl px-6 md:px-12 py-3 mt-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto rounded-full" />
        </div>

        {/* Title */}
        <div>
          <p className="text-black font-bold text-lg md:text-xl tracking-wide">
            Bharat & Ruchitha
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-[10px]">
          <button
            type="button"
            style={{ padding: "10px 30px" }}
            className="px-6 py-2 bg-black text-white font-semibold text-lg rounded-full shadow-md hover:bg-gray-800 transition-all cursor-pointer"
          >
            Click
          </button>

          <button onClick={handleLocationClick} className="flex items-center">
            <img
              src={location}
              alt="location"
              className="h-12 w-[50px] cursor-pointer"
            />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
