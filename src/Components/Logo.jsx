// // import React, { useEffect, useRef } from "react";
// // import "./Logo.css";
// // import gsap from "gsap";
// // import ScrollTrigger from "gsap/ScrollTrigger";

// // const Logo = () => {
// //   const logoRef = useRef(null);
// //   const contentRef = useRef(null);

// //   useEffect(() => {
// //     gsap.registerPlugin(ScrollTrigger);

// //     ScrollTrigger.create({
// //       animation: gsap.from(logoRef.current, {
// //         y: "40vh",
// //         scale: 6,
// //         yPercent: -50,
// //       }),
// //       scrub: true,
// //       trigger: contentRef.current,
// //       start: "top bottom",
// //       end: "top center",
// //     });

// //     return () => {
// //       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// //     };
// //   }, []);

// //   return (
// //     <div>
// //       {/* Navigation */}
// //       <div className="nav">
// //         <div className="item-left">
// //           <a href="#">services</a>
// //           <a href="#">room</a>
// //         </div>
// //         <div className="item-right">
// //           <a href="#">booking</a>
// //           <a href="#">contact</a>
// //         </div>
// //       </div>

// //       {/* Logo */}
// //       <div className="logo-cantainer">
// //         <h1 className="logo" ref={logoRef}>
// //           <div style={{ whiteSpace: "pre" }}>
// //             <i>Bharat</i>        
// //           </div>
// //           <div style={{ whiteSpace: "pre" }}>
// //                 <i>        Ruchitha</i>
// //           </div>
// //         </h1>
// //       </div>

// //       {/* Spacer */}
// //       <div className="container"></div>

// //       {/* Scroll Content */}
// //       <div className="content" ref={contentRef}>
// //         <img src="/images/img-1.jpg" alt="img1" />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Logo;
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import './Logo.css'
// const Logo = () => {
//   const logoRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     ScrollTrigger.create({
//       animation: gsap.from(logoRef.current, {
//         y: "40vh",
//         scale: 6,
//         yPercent: -50,
//       }),
//       scrub: true,
//       trigger: contentRef.current,
//       start: "top bottom",
//       end: "top center",
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 w-full h-24 px-16 bg-white z-50 flex items-center justify-between">
//         <div className="flex gap-6">
//           <a href="#" className="uppercase text-black text-sm font-serif">services</a>
//           <a href="#" className="uppercase text-black text-sm font-serif">room</a>
//         </div>
//         <div className="flex gap-6">
//           <a href="#" className="uppercase text-black text-sm font-serif">booking</a>
//           <a href="#" className="uppercase text-black text-sm font-serif">contact</a>
//         </div>
//       </nav>

//       {/* Logo */}
//       <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 p-6 font-serif text-center" ref={logoRef}>
//         <h1>
//           <div><i>Bharat</i></div>
//           <div><i>Ruchitha</i></div>
//         </h1>
//       </div>

//       {/* Spacer */}
//       <div className="w-full h-screen bg-white"></div>

//       {/* Content */}
//       <div ref={contentRef} className="w-full h-screen bg-white relative px-16">
//         <img
//           src="/images/img-1.jpg"
//           alt="img"
//           className="w-full h-auto object-cover mb-16"
//         />
//       </div>
//     </div>
//   );
// };

// export default Logo;
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Logo() {
  const logoRef = useRef(null);
  const contentRef = useRef(null);
  
  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Logo animation on scroll
    const logoAnimation = gsap.from(logoRef.current, {
      y: "40vh",
      scale: 6,
      yPercent: -50,
      ease: "power2.out"
    });
    
    ScrollTrigger.create({
      animation: logoAnimation,
      trigger: contentRef.current,
      start: "top bottom",
      end: "top center",
      scrub: true,
    });
    
    // Navbar fade-in animation
    gsap.from(".nav-item", {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out"
    });
    
    // Content image reveal animation
    gsap.from(".content-image", {
      opacity: 0,
      y: 100,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".content-image",
        start: "top bottom",
        end: "top center",
        scrub: false
      }
    });
    
    // Hover effects for nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, {
          y: -5,
          color: "#6366F1",
          fontWeight: "bold",
          duration: 0.3
        });
      });
      
      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          y: 0,
          color: "#000000",
          fontWeight: "normal",
          duration: 0.3
        });
      });
    });
    
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      navItems.forEach(item => {
        item.removeEventListener('mouseenter', () => {});
        item.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className="fixed w-full h-24 flex items-center justify-between px-16 bg-white z-50 shadow-sm">
        <div className="flex items-center space-x-8">
          <a href="#" className="nav-item uppercase font-serif text-sm tracking-wider hover:text-indigo-500 transition-all duration-300">
            services
          </a>
          <a href="#" className="nav-item uppercase font-serif text-sm tracking-wider hover:text-indigo-500 transition-all duration-300">
            room
          </a>
        </div>
        
        <div className="flex items-center space-x-8">
          <a href="#" className="nav-item uppercase font-serif text-sm tracking-wider hover:text-indigo-500 transition-all duration-300">
            booking
          </a>
          <a href="#" className="nav-item uppercase font-serif text-sm tracking-wider hover:text-indigo-500 transition-all duration-300">
            contact
          </a>
        </div>
      </nav>
      
      {/* Logo Container */}
      <div className="logo-container fixed top-0 left-1/2 transform -translate-x-1/2 z-50 p-6">
        <h1 
          ref={logoRef} 
          className="font-serif text-4xl bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
        >
          <div className="flex justify-between items-center">
            <span className="italic pr-8">Bharat</span>
            <span className="italic pl-8">Ruchitha</span>
          </div>
        </h1>
      </div>
      
      {/* Container */}
      <div className="w-full h-screen bg-white"></div>
      
      {/* Content */}
      <div 
        ref={contentRef} 
        className="w-full min-h-screen bg-white relative px-16 py-8"
      >
        <div className="content-image-container overflow-hidden rounded-lg shadow-xl transform hover:scale-[1.02] transition-transform duration-500 ease-in-out">
          <img 
            src="/api/placeholder/1200/800" 
            alt="Hotel Interior" 
            className="content-image w-full h-auto object-cover"
          />
        </div>
        
        {/* Additional Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md transform hover:translate-y-[-8px] transition-all duration-500">
            <h2 className="text-2xl font-serif mb-4 text-indigo-700">Luxurious Experience</h2>
            <p className="text-gray-700">
              Indulge in our premium accommodations designed for comfort and elegance.
              Each room is carefully crafted to provide an unforgettable stay.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md transform hover:translate-y-[-8px] transition-all duration-500">
            <h2 className="text-2xl font-serif mb-4 text-indigo-700">Exquisite Dining</h2>
            <p className="text-gray-700">
              Experience culinary excellence with our world-class chefs who prepare
              delicious meals using only the freshest local ingredients.
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Bharat Ruchitha</h3>
            <p className="text-gray-300">
              Luxury accommodation for the discerning traveler.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Room Booking
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Contact Us</h3>
            <p className="text-gray-300">
              Email: info@bharatruchitha.com<br />
              Phone: +1 234 567 890<br />
              Address: 123 Luxury Avenue, Prestige City
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Bharat Ruchitha. All rights reserved.
        </div>
      </footer>
    </div>
  );
}