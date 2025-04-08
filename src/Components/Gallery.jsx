// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import './Gallery.css';

// const Gallery = () => {
//   const minimapRef = useRef(null);
//   const imagesRef = useRef(null);
//   const numberOfImages = 10;

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const minimap = minimapRef.current;
//     const fullSizeContainer = imagesRef.current;
//     let activeThumbnail = null;

//     function getRandomLeft() {
//       const values = [-15, -7.5, 0, 7.5, 15];
//       return values[Math.floor(Math.random() * values.length)] + 'px';
//     }

//     minimap.innerHTML = '';
//     fullSizeContainer.innerHTML = '';

//     for (let i = 1; i <= numberOfImages; i++) {
//       const randomLeft = getRandomLeft();
//       const imagePath = `/images/img-${i}.jpg`; // Using public folder path

//       // Create thumbnail
//       const thumbnailDiv = document.createElement('div');
//       thumbnailDiv.className = 'img-thumbnail';
//       thumbnailDiv.style.top = `${(i - 1) * 80}px`;
//       thumbnailDiv.style.left = randomLeft;

//       const imgThumb = document.createElement('img');
//       // imgThumb.src = imagePath;
//       imgThumb.loading = 'lazy';
//       imgThumb.src = imagePath;

//       thumbnailDiv.appendChild(imgThumb);
//       minimap.appendChild(thumbnailDiv);

//       // Create full-size image
//       const imgDiv = document.createElement('div');
//       imgDiv.className = 'img';
//       imgDiv.style.left = randomLeft;

//       const imgFull = document.createElement('img');
//       // imgFull.src = imagePath;
//       imgFull.loading = 'lazy';
//       imgFull.src = imagePath;
//       imgDiv.appendChild(imgFull);
//       fullSizeContainer.appendChild(imgDiv);

//       // GSAP ScrollTrigger logic
//       ScrollTrigger.create({
//         trigger: imgDiv,
//         start: 'top center',
//         end: 'bottom center',
//         fastScrollEnd: true,
//         anticipatePin: 1,
//         onToggle: (self) => {
//           if (self.isActive) {
//             if (activeThumbnail && activeThumbnail !== thumbnailDiv) {
//               animateThumbnail(activeThumbnail, false);
//             }
//             animateThumbnail(thumbnailDiv, true);
//             activeThumbnail = thumbnailDiv;
//           } else {
//             animateThumbnail(thumbnailDiv, false);
//           }
//         }
//       });
//     }

//     function animateThumbnail(thumbnail, isActive) {
//       gsap.to(thumbnail, {
//         border: isActive ? '1px solid #fff' : 'none',
//         opacity: isActive ? 1 : 0.5,
//         scale: isActive ? 1.3 : 1,
//         zIndex: isActive ? 10000 : 0,
//         duration: 0.15,
//         ease: 'power1.out',
//       });
//     }
//   }, []);

//   return (
//     <>
//       <div className="gallery">
//         <div className="minimap">
//           <div className="preview" ref={minimapRef}></div>
//         </div>
//         <div className="images" ref={imagesRef}></div>
//       </div>
//     </>
//   );
// };

// export default Gallery;
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
      path: `/images/img-${i + 1}.jpg`,
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
