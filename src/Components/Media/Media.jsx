import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa'; // Import icons
import medVideo from '../../assets/images/meal.mp4';

const Media = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative w-full h-[70vh] flex justify-center items-center overflow-hidden">
      {/* Video as background */}
      <video
        ref={videoRef}
        src={medVideo}
        className="absolute inset-0 w-full h-full object-cover"
        onClick={togglePlayPause}
        autoPlay
        muted
        loop
      />
      {/* Play/Pause Overlay with Icons */}
      <div
        className="absolute inset-0 flex justify-center items-center bg-black/50 cursor-pointer"
        onClick={togglePlayPause}
      >
        <button className="text-white text-4xl bg-transparent border-none">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </div>
  );
};

export default Media;