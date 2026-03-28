import React from 'react';

const VslPlayer = ({ videoId }) => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <vsl-player 
        data-id={videoId}
        style={{ display: 'block', width: '100%', maxWidth: '900px', aspectRatio: '16/9', margin: '0 auto' }}
      ></vsl-player>
    </div>
  );
};

export default VslPlayer;

