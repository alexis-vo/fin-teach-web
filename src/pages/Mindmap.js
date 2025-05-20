import React from 'react';
import './Mindmap.css';

import mindmap1 from '../assets/mindmaps/corporate_finance.svg';
import mindmap2 from '../assets/mindmaps/personal_finance.svg';
import mindmap3 from '../assets/mindmaps/public_finance.svg';

function Mindmap() {
  const images = [mindmap1, mindmap2, mindmap3];

  return (
    <div className="mindmap-container">
      <h1>🧠 Finance Mindmaps</h1>
      <p className="subtitle">
        Visual overviews of financial concepts to help you memorize and connect ideas.
      </p>

      <div className="mindmap-grid">
        {images.map((img, index) => (
          <div key={index} className="mindmap-card">
            <img src={img} alt={`Mindmap ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mindmap;