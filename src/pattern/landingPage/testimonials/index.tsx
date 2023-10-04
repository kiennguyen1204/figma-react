import './index.scss';
import '@splidejs/react-splide/css';
import Star from 'assets/images/star.svg?react';

import {
  Splide,
  SplideTrack,
  SplideSlide
} from '@splidejs/react-splide';
import { MAX_STAR } from '../../../constants/enums';
import Google from 'assets/images/google-grey.svg?react';

export default function CustomerTestinmonials() {
  const testimonialsList = [
    {
      userName: 'Vikki Starr',
      avatar:
        '/src/assets/images/reviews/VikkiStarr.png',
      comment: `Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.`,
      star: 4,
      date: 'January 15, 2023'
    },
    {
      userName: 'Vikki Starr',
      avatar:
        '/src/assets/images/reviews/VikkiStarr.png',
      comment: `Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.`,
      star: 4,
      date: 'January 15, 2023'
    },
    {
      userName: 'Vikki Starr',
      avatar:
        '/src/assets/images/reviews/VikkiStarr.png',
      comment: `Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.`,
      star: 5,
      date: 'January 15, 2023'
    },
    {
      userName: 'Vikki Starr',
      avatar:
        '/src/assets/images/reviews/VikkiStarr.png',
      comment: `Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.`,
      star: 5,
      date: 'January 15, 2023'
    },
    {
      userName: 'Vikki Starr',
      avatar:
        '/src/assets/images/reviews/VikkiStarr.png',
      comment: `Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.`,
      star: 5,
      date: 'January 15, 2023'
    },
    {
      userName: 'Vikki Starr',
      avatar:
        '/src/assets/images/reviews/VikkiStarr.png',
      comment: `Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.`,
      star: 5,
      date: 'January 15, 2023'
    }
  ];

  const splideOpts = {
    type: 'loop',
    perPage: 1.8,
    perMove: 1,
    gap: '24px',
    padding: '15%',
    pagination: false,
    breakpoints: {
      576: { perPage: 1, padding: "5%" },
      991: { perPage: 2 },
      1024: {
        perPage: 1.5
      },
      1100: { perPage: 1.5 },
      1200: { perPage: 1 },
      1920: {gap: '32px'}
    }
  };

  return (
    <div className="testimonials-list-container">
      <div className="testimonials-list-containerBox">
        <div className="top-header-testitmonials">
          <h3 className="title-header">
            CUSTOMER
            TESTIMONIALS
          </h3>
        </div>
        <div className="list-data">
          <div className="box-voted">
            <p className="voted-box-title">
              VOTED BEST
              ONLINE
              DISPENSARY IN
              CANADA
            </p>
            <div className="line-hor"></div>
            <div className="google-grey">
              <Google />
            </div>
            <div className="bottom-box-voted">
              <p className="exellencet">
                EXELLENCET
              </p>
              <div className="rating-bottom">
                <div className="list-star">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <div className="total-reviews">
                  on 135{' '}
                  <span className="review-text">
                    Reviews
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials-list">
            <Splide
              hasTrack={false}
              options={
                splideOpts
              }
              aria-label="My Favorite Images">
              <SplideTrack>
                {testimonialsList.map(
                  (
                    el,
                    index
                  ) => {
                    const arrStar =
                      Array.from(
                        {
                          length:
                            MAX_STAR.TOTAL
                        },
                        (
                          _,
                          i
                        ) =>
                          i +
                          1
                      );
                    return (
                      <SplideSlide
                        key={
                          index
                        }>
                        <div className="testimonials-container-box">
                          <div className="testimonials-container-box-header">
                            <div className="card-image">
                              <img
                                decoding="async"
                                loading="lazy"
                                src={
                                  el.avatar
                                }
                                className="splide-product-image"
                                alt="Image 1"
                              />
                              <span className="user-name">
                                {
                                  el.userName
                                }
                              </span>
                            </div>
                          </div>
                          <div className="box-content-testimonials">
                            <div className="rating-star">
                              {arrStar.map(
                                (
                                  e
                                ) =>
                                  e <=
                                  el.star ? (
                                    <Star
                                      key={
                                        e
                                      }
                                    />
                                  ) : (
                                    <img
                                      src="/src/assets/images/star.png"
                                      alt="star"
                                    />
                                  )
                              )}
                            </div>
                            <p className="comment-content">
                              {
                                el.comment
                              }
                            </p>
                            <p className="date-comment">
                              {
                                el.date
                              }
                            </p>
                          </div>
                        </div>
                      </SplideSlide>
                    );
                  }
                )}
              </SplideTrack>

              <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m15 6l-6 6l6 6"
                    />
                  </svg>
                </button>
                <button className="splide__arrow splide__arrow--next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m9 6l6 6l-6 6"
                    />
                  </svg>
                </button>
              </div>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
}
