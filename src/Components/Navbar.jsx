import React from "react";
// import logo from "../assets/logo.png";
// import home from "../assets/home.png";

const Navbar = () => {
  return (
    <div className="mx-auto px-2 md:px-6 lg:px-12">
      <nav className="h-[90px] flex justify-center gap-96 items-center px-8 py-4 bg-white shadow-md">
        <div>
          {/* <img src={logo} alt="" className="h-12" /> */}
        </div>
        <div>
          <p className=" flex space-x-6 text-black font-semibold">
            Bharat & Ruchitha
          </p>
        </div>
        <div>
          <button className="flex items-center space-x-4 text-black">
            Click
          </button>
        </div>
      </nav>
      <div className="m-2 border-2 h-full">
        <div>
          {/* <img src={home} alt="" className="h-1/5" /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;