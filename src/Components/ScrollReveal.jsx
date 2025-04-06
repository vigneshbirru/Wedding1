import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../assets/photos/img-1.jpg';
import img2 from '../assets/photos/img-2.jpg';
import img3 from '../assets/photos/img-3.jpg';
import img4 from '../assets/photos/img-4.jpg';
import img5 from '../assets/photos/img-5.jpg';
import img6 from '../assets/photos/img-6.jpg';
import img7 from '../assets/photos/img-7.jpg';
import img8 from '../assets/photos/img-8.jpg';
import img9 from '../assets/photos/img-9.jpg';
import img10 from '../assets/photos/img-10.jpg';
import "./ScrollReveal.css";


gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = () => {
  const imgRefs = useRef([]);
  const textRefs = useRef([]);
  const rows = [
    { id: 1, height: 400, align: 'right', image: img1 },
    { id: 2, height: 500, align: 'left', image: img2 },
    { id: 3, height: 150, align: 'right', image: img3 },
    { id: 4, height: 400, align: 'left', image: img4 },
    { id: 5, height: 700, align: 'right', image: img5 },
    { id: 6, height: 300, align: 'left', image: img6 },
    { id: 7, height: 200, align: 'right', image: img7 },
    { id: 8, height: 600, align: 'left', image: img8 },
    { id: 9, height: 300, align: 'right', image: img9 },
    { id: 10, height: 500, align: 'left', image: img10 },
  ];

  useEffect(() => {
    // Image animations
    imgRefs.current.forEach((img) => {
      if (!img) return;
      gsap.to(img, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power1.out",
        duration: 1.2,
        scrollTrigger: {
          trigger: img,
          start: "top 75%",
          end: "bottom 70%",
          scrub: true,
        },
      });
    });

    // Text animations
    textRefs.current.forEach((text) => {
      if (!text) return;
      gsap.from(text, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        scrollTrigger: {
          trigger: text,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div className="container">
      <div className="header">
        <p>Scroll to reveal</p>
        <p>Codegrid</p>
      </div>

      {rows.map((row, index) => (
        <div 
          key={row.id}
          className="row" 
          style={{ height: `${row.height}px` }}
          id={`row-${row.id}`}
        >
          {row.align === 'right' ? (
            <>
              <div className="col left-col">
                <div className="img-container right">
                <img
                    ref={el => (imgRefs.current[index] = el)}
                    src={row.image}
                    alt={`Image alt${row.id}`}
                    />
                  <p ref={el => (textRefs.current[index] = el)}>
                    Image alt{row.id}
                  </p>
                </div>
              </div>
              <div className="col right-col"></div>
            </>
          ) : (
            <>
              <div className="col left-col"></div>
              <div className="col right-col">
                <div className="img-container left">
                  <img
                    ref={el => (imgRefs.current[index] = el)}
                    src={index % 2 === 0 ? img2 : img1}
                    alt={`Image alt${row.id}`}
                  />
                  <p ref={el => (textRefs.current[index] = el)}>
                    Image alt{row.id}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
      
      <div className="whitespace"></div>
    </div>
  );
};

export default ScrollReveal;
