import React, { useEffect, useRef } from 'react';

const VslPlayer = ({ videoId }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Inject the script dynamically to ensure it runs correctly in React
    const script = document.createElement('script');
    script.src = "https://vsl.niuvixtool.com/embed/vsl-engine.js";
    script.defer = true;
    
    // Append the script to the body or head
    document.body.appendChild(script);
    
    // Cleanup function to remove the script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      {/* The custom element for the player needs explicit dimensions */}
      <vsl-player 
        data-id={videoId}
        style={{ display: 'block', width: '100%', maxWidth: '900px', aspectRatio: '16/9', margin: '0 auto' }}
      ></vsl-player>
    </div>
  );
};

export default VslPlayer;
