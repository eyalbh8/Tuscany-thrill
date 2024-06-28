import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop-type validation
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

// Prop type validation
Lightbox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentIndex: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Lightbox;
