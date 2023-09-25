import React from 'react';
import Star from 'assets/images/star.svg?react';
import WhiteStar from 'assets/images/white-star.svg?react';

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
              <p className="date">
                {e.date}
              </p>
            </div>
            <div className="divider"></div>
            <div className="rating">
              {Array.from(
                { length: 5 },
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
    </div>
  );
}