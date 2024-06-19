import React from 'react';
import { Link, useParams } from 'react-router-dom';

function ImageDetailCarousel({ images }) {
  const { id } = useParams();

  const selectedImage = images.find((image) => image.id.toString() === id);

  return (
    <div className="image-detail-carousel">
      <div className="image-detail">
        <img src={selectedImage.src} alt={selectedImage.title} />
        <h2>{selectedImage.title}</h2>
        <p>{selectedImage.description}</p>
      </div>
      <div className="carousel-pagination">
        {images.map((image) => (
          <Link to={`/image-detail/${image.id}`} key={image.id}>
            <div className="pagination-dot">
              <img src={image.src} alt={image.title} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ImageDetailCarousel;
