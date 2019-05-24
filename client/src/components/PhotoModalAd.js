import React from 'react';

const PhotoModalAd = function (props) {
  return (
    <div className="photo-modal__ad">
      <div className="photo-modal__ad-border" />
      <div className="photo-modal__ad-title">
        <div className="photo-modal__ad-title-ADicon">
          <p>Ad</p>
        </div>
        <h3>Coco&apos;s Sushi &#38; Izakaya</h3>
        <svg>
          <path d="M9 17A8 8 0 1 1 9 1a8 8 0 0 1 0 16zM9 2C5.14 2 2 5.14 2 9s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zM8 8h2v5H8V8zm0-3h2v2H8V5z" />
        </svg>
      </div>
      <div className="photo-modal__ad-reviews">
        <div className="rating-stars" />
        <p>74 reviews</p>
      </div>
      <div className="photo-modal__ad-comment">
        <p><span className="commentor">Ever S. said </span>&quot;This place is a Gem. The food quality is amazing and the price is remarkable. The service was okay. They only had one waitress...&quot; <span className="read-more">read more</span></p>
      </div>
    </div>
  );
};

export default PhotoModalAd;
