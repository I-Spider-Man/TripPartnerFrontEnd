import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
function ZoomInVideoLoop({videos}) {
    const videoRef = useRef(null);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
    const zoomIn = useSpring({
      from: { transform: 'scale(1)' },
      to: async (next, cancel) => {
        while (true) {
          await next({ transform: 'scale(1.1)' });
          await next({ transform: 'scale(1)' });
        }
      },
    });
  
    const handleVideoEnded = useCallback(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, [videos]);
  
    useEffect(() => {
      videoRef.current.addEventListener('ended', handleVideoEnded);
      return () => {
        videoRef.current.removeEventListener('ended', handleVideoEnded);
      };
    }, [handleVideoEnded]);
  
    return (
      <animated.video
        ref={videoRef}
        style={zoomIn}
        autoPlay
        muted
        loop
        src={videos[currentVideoIndex]}
      />
    );
}

export default ZoomInVideoLoop