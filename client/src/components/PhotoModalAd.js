import React from 'react';
import css from '../style.css';

const PhotoModalAd = function (props) {
  return (
    <div className={css['photo-modal__ad']}>
      <div className={css['photo-modal__ad-border']} />
      <div className={css['photo-modal__ad-title']}>
        <div className={css['photo-modal__ad-title-ADicon']}>
          <p>Ad</p>
        </div>
        <h3>Coco&apos;s Sushi &#38; Izakaya</h3>
        <svg>
          <path d="M9 17A8 8 0 1 1 9 1a8 8 0 0 1 0 16zM9 2C5.14 2 2 5.14 2 9s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zM8 8h2v5H8V8zm0-3h2v2H8V5z" />
        </svg>
      </div>
      <div className={css['photo-modal__ad-reviews']}>
        <div className={css['rating-stars-3_5']} />
        <p>74 reviews</p>
      </div>
      <div className={css['photo-modal__ad-comment']}>
        <p><span className={css.commentor}>Ever S. said </span>&quot;This place is a Gem. The food quality is amazing and the price is remarkable. The service was okay. They only had one waitress...&quot; <span className={css['read-more']}>read more</span></p>
      </div>
    </div>
  );
};

export default PhotoModalAd;
