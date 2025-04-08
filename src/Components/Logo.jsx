// import React, { useEffect, useRef } from "react";
// import "./Logo.css";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

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
//       {/* Navigation */}
//       <div className="nav">
//         <div className="item-left">
//           <a href="#">services</a>
//           <a href="#">room</a>
//         </div>
//         <div className="item-right">
//           <a href="#">booking</a>
//           <a href="#">contact</a>
//         </div>
//       </div>

//       {/* Logo */}
//       <div className="logo-cantainer">
//         <h1 className="logo" ref={logoRef}>
//           <div style={{ whiteSpace: "pre" }}>
//             <i>Bharat</i>        
//           </div>
//           <div style={{ whiteSpace: "pre" }}>
//                 <i>        Ruchitha</i>
//           </div>
//         </h1>
//       </div>

//       {/* Spacer */}
//       <div className="container"></div>

//       {/* Scroll Content */}
//       <div className="content" ref={contentRef}>
//         <img src="/images/img-1.jpg" alt="img1" />
//       </div>
//     </div>
//   );
// };

// export default Logo;
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import './Logo.css'
const Logo = () => {
  const logoRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      animation: gsap.from(logoRef.current, {
        y: "40vh",
        scale: 6,
        yPercent: -50,
      }),
      scrub: true,
      trigger: contentRef.current,
      start: "top bottom",
      end: "top center",
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full h-24 px-16 bg-white z-50 flex items-center justify-between">
        <div className="flex gap-6">
          <a href="#" className="uppercase text-black text-sm font-serif">services</a>
          <a href="#" className="uppercase text-black text-sm font-serif">room</a>
        </div>
        <div className="flex gap-6">
          <a href="#" className="uppercase text-black text-sm font-serif">booking</a>
          <a href="#" className="uppercase text-black text-sm font-serif">contact</a>
        </div>
      </nav>

      {/* Logo */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 p-6 font-serif text-center" ref={logoRef}>
        <h1>
          <div><i>Bharat</i></div>
          <div><i>Ruchitha</i></div>
        </h1>
      </div>

      {/* Spacer */}
      <div className="w-full h-screen bg-white"></div>

      {/* Content */}
      <div ref={contentRef} className="w-full h-screen bg-white relative px-16">
        <img
          src="/images/img-1.jpg"
          alt="img"
          className="w-full h-auto object-cover mb-16"
        />
      </div>
    </div>
  );
};

export default Logo;
