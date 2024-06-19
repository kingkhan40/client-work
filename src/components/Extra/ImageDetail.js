import React from 'react';
import { Link } from 'react-router-dom';

function ImageDetail({ image, onClose }) {
  return (
    <div className="image-detail-view">
      <button onClick={onClose} className="close-button">
        Close
      </button>
      <div className="image-container">
        <img src={image.src} alt={image.title} className="full-width-image" />
      </div>
      <div className="dummy-content">
        <h2>{image.title}</h2>
        <p>{image.description}</p>
        <Link to="/carousel">Back to Carousel</Link>
      </div>
    </div>
  );
}

export default ImageDetail;
