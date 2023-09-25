import React from 'react';
import Star from 'assets/images/star.svg?react';
import WhiteStar from 'assets/images/white-star.svg?react';
import TransStar from 'assets/images/star-trans.svg?react';
import { MAX_STAR } from '../../../../constants/enums';
import './index.scss';
import Button from '../../../../components/common/Button';

export default function Reviews({
  reviews
}: {
  reviews: any;
}) {
  return (
    <div className="reviews-container">
      {reviews.map(
        (e: any) => (
          <div className="item">
            <div className="user-info">
              <img
                src={e.avatar}
              />
              <p className="user-name">
                {e.userName}
              </p>
              <div className="divider-small"></div>
              <p className="date">
                {e.date}
              </p>
            </div>
            <div className="divider"></div>
            <div className="rating">
              {Array.from(
                {
                  length:
                    MAX_STAR.TOTAL
                },
                (_, i) =>
                  i + 1
              ).map(
                (r: any) => {
                  return r <=
                    e.rating ? (
                    <Star />
                  ) : (
                    <WhiteStar />
                  );
                }
              )}
            </div>
            <div className="content">
              {e.comment}
            </div>
          </div>
        )
      )}
      <a className="show-more-btn">
        Show More
      </a>
      <div className="divider"></div>
      <div className="add-review">
        <p className="title">
          Add A Review
        </p>
        <div className="your-rating">
          <p className="label">
            Your rating
          </p>
          <p>:</p>
          <div className="rating-box">
            {Array.from(
              {
                length:
                  MAX_STAR.TOTAL
              },
              (_, i) => i + 1
            ).map(
              (r: any) => (
                <TransStar />
              )
            )}
          </div>
        </div>
        <div className="your-review-box">
          <div className="label">Your Review <span>*</span></div>
          <textarea placeholder='Enter your review' className='enter-review'></textarea>
        </div>
        <a className='submit-btn'>Submit</a>
      </div>
    </div>
  );
}
