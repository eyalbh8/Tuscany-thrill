import React from 'react';
import './LightBox.css';

const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  return (
    <div className="lightbox">
      <button className="lightbox-close" onClick={onClose}>×</button>
      <div className="lightbox-content">
        <button className="lightbox-prev" onClick={onPrev}>‹</button>
        <img src={images[currentIndex]} alt={`Lightbox-${currentIndex}`} />
        <button className="lightbox-next" onClick={onNext}>›</button>
      </div>
    </div>
  );
};

export default Lightbox;
