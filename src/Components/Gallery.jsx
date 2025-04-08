import React, { useEffect, useRef, useMemo, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Gallery.css';

const numberOfImages = 10;

const getRandomLeft = () => {
  const values = [-15, -7.5, 0, 7.5, 15];
  return values[Math.floor(Math.random() * values.length)] + 'px';
};

const Gallery = () => {
  const minimapRef = useRef(null);
  const imagesRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const imageData = useMemo(() => {
    return Array.from({ length: numberOfImages }, (_, i) => ({
      id: i + 1,
      path: `/images/img-${i + 1}.webp`,
      left: getRandomLeft(),
      top: i * 80
    }));
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    imageData.forEach((img, index) => {
      const trigger = imagesRef.current.querySelector(`#img-${index}`);
      ScrollTrigger.create({
        trigger,
        start: 'top center',
        end: 'bottom center',
        fastScrollEnd: true,
        anticipatePin: 1,
        onToggle: (self) => {
          if (self.isActive) setActiveIndex(index);
        }
      });
    });
  }, [imageData]);

  return (
    <div className="gallery">
      <div className="minimap">
        <div className="preview" ref={minimapRef}>
          {imageData.map((img, index) => (
            <div
              key={img.id}
              className="img-thumbnail"
              style={{
                top: `${img.top}px`,
                left: img.left,
                opacity: activeIndex === index ? 1 : 0.5,
                transform: activeIndex === index ? 'scale(1.3)' : 'scale(1)',
                zIndex: activeIndex === index ? 1000 : 0,
                border: activeIndex === index ? '1px solid #fff' : 'none',
              }}
            >
              <img src={img.path} loading="lazy" alt={`Thumbnail ${img.id}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="images" ref={imagesRef}>
        {imageData.map((img, index) => (
          <div
            key={img.id}
            id={`img-${index}`}
            className="img"
            style={{ left: img.left }}
          >
            <img src={img.path} loading="lazy" alt={`Image ${img.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
