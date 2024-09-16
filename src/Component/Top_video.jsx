import React, { useEffect, useRef, useState } from 'react';

function Top_video() {
  const videos = [
    {
      "src": "../../img/IMG_5394.mov",
      "alt": "Video 1 for carousel"
    },
    {
      "src": "../../img/IMG_5376.mov",
      "alt": "Video 2 for carousel"
    },
    {
      "src": "../../img/IMG_5387.mov",
      "alt": "Video 3 for carousel"
    },
    {
      "src": "../../img/IMG_5390.mov",
      "alt": "Video 4 for carousel"
    },
    {
      "src": "../../img/IMG_5393.mov",
      "alt": "Video 5 for carousel"
    }
  ];

  const [thumbnails, setThumbnails] = useState({});
  const videoRefs = useRef([]); // To store references to all videos

  useEffect(() => {
    // Attach metadata loaded event listeners for each video
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.addEventListener('loadedmetadata', () => generateThumbnail(video, index));
      }
    });
  }, []);

  const generateThumbnail = (video, index) => {
    // Ensure duration is loaded
    if (video.duration) {
      video.currentTime = 0; // Set random time in video
      const canvas = document.createElement('canvas');
      canvas.width = 200; // Set thumbnail width
      canvas.height = 100; // Set thumbnail height
      const ctx = canvas.getContext('2d');
      
      video.addEventListener('seeked', () => {
        // Draw the current frame of the video onto the canvas
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataURL = canvas.toDataURL(); // Get the thumbnail as base64 image URL
        setThumbnails((prev) => ({
          ...prev,
          [index]: dataURL // Store thumbnail for each video
        }));
      });
    }
  };

  const handleMouseEnter = (e) => {
    e.target.play();
  };

  const handleMouseLeave = (e) => {
    e.target.pause();
    e.target.currentTime = 0; // Reset video to the beginning
  };

  return (
    <section className='text-[30px] my-[50px] mx-[50px] text-black'>
      <header className='leading-[40px] w-fit'>Top Video Picks</header>
      <hr className='w-[320px] h-1 bg-black'/>
      <article>
        <div className="carousel-container flex flex-row gap-5 my-5">
          {videos.map((video, index) => (
            <div key={index} className="carousel-slide">
              <video
                ref={(el) => videoRefs.current[index] = el} // Set reference for each video
                muted
                loop
                playsInline
                preload="metadata"
                className="carousel-video"
                alt={video.alt}
                width="240"
                onMouseEnter={handleMouseEnter} // Play on hover
                onMouseLeave={handleMouseLeave} // Pause and reset on mouse leave
                poster={thumbnails[index]} // Use dynamically generated thumbnail
                src={video.src}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default Top_video;
