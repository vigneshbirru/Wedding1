import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Gallery.css';

const Gallery = () => {
  const minimapRef = useRef(null);
  const imagesRef = useRef(null);
  const numberOfImages = 10;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const minimap = minimapRef.current;
    const fullSizeContainer = imagesRef.current;
    let activeThumbnail = null;

    function getRandomLeft() {
      const values = [-15, -7.5, 0, 7.5, 15];
      return values[Math.floor(Math.random() * values.length)] + 'px';
    }

    minimap.innerHTML = '';
    fullSizeContainer.innerHTML = '';

    for (let i = 1; i <= numberOfImages; i++) {
      const randomLeft = getRandomLeft();
      const imagePath = `/images/img-${i}.jpg`; // Using public folder path

      // Create thumbnail
      const thumbnailDiv = document.createElement('div');
      thumbnailDiv.className = 'img-thumbnail';
      thumbnailDiv.style.top = `${(i - 1) * 80}px`;
      thumbnailDiv.style.left = randomLeft;

      const imgThumb = document.createElement('img');
      imgThumb.src = imagePath;
      thumbnailDiv.appendChild(imgThumb);
      minimap.appendChild(thumbnailDiv);

      // Create full-size image
      const imgDiv = document.createElement('div');
      imgDiv.className = 'img';
      imgDiv.style.left = randomLeft;

      const imgFull = document.createElement('img');
      imgFull.src = imagePath;
      imgDiv.appendChild(imgFull);
      fullSizeContainer.appendChild(imgDiv);

      // GSAP ScrollTrigger logic
      ScrollTrigger.create({
        trigger: imgDiv,
        start: 'top center',
        end: 'bottom center',
        onToggle: (self) => {
          if (self.isActive) {
            if (activeThumbnail && activeThumbnail !== thumbnailDiv) {
              animateThumbnail(activeThumbnail, false);
            }
            animateThumbnail(thumbnailDiv, true);
            activeThumbnail = thumbnailDiv;
          } else {
            animateThumbnail(thumbnailDiv, false);
          }
        }
      });
    }

    function animateThumbnail(thumbnail, isActive) {
      gsap.to(thumbnail, {
        border: isActive ? '1px solid #fff' : 'none',
        opacity: isActive ? 1 : 0.5,
        scale: isActive ? 1.3 : 1,
        zIndex: isActive ? 10000 : 0,
        duration: 0.3,
      });
    }
  }, []);

  return (
    <>
      <nav>
        <a href="#">Linear</a>
        <button>Signup</button>
      </nav>

      <div className="container">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit...</h1>
      </div>

      <div className="gallery">
        <div className="minimap">
          <div className="preview" ref={minimapRef}></div>
        </div>
        <div className="images" ref={imagesRef}></div>
      </div>

      <div className="container">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit...</h1>
      </div>
    </>
  );
};

export default Gallery;
