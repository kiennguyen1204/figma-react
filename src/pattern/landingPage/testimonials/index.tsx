import { Link } from 'react-router-dom';

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
    perPage: 3,
    perMove: 1,
    gap: '24px',
    padding: '15%',
    pagination: false,
    breakpoints: {
      576: { perPage: 1 },
      690: { perPage: 2 },
      768: { perPage: 3 },
      992: { perPage: 3 },
      1100: { perPage: 1.5 },
      1200: { perPage: 2.5 }
    }
  };

  return (
    <div className="testimonialsListContainer">
      <div className="testimonialsListContainerBox">
        <div className="topHeaderTestitmonials">
          <h3 className="titleHeader">
            CUSTOMER
            TESTIMONIALS
          </h3>
          <div className="boxVoted">
            <p className="votedBoxTtitle">
              VOTED BEST
              ONLINE
              DISPENSARY IN
              CANADA
            </p>
            <div className="lineHor"></div>
            <div className="googleGrey">
              <Google />
            </div>
            <div className="bottomBoxVoted">
              <p className="exellencet">
                EXELLENCET
              </p>
              <div className="ratingBottom">
                <div className="listStar">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <div className="totalReviews">
                  on 135{' '}
                  <span className="reviewText">
                    Reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonialsList">
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
                        i + 1
                    );
                  return (
                    <SplideSlide
                      key={
                        index
                      }>
                      <div className="testimonialsContainerBox">
                        <div className="testimonialsContainerBoxHeader">
                          <div className="cardImage">
                            <img
                              decoding="async"
                              loading="lazy"
                              src={
                                el.avatar
                              }
                              className="splideProductImage"
                              alt="Image 1"
                            />
                            <span className="userName">
                              {
                                el.userName
                              }
                            </span>
                          </div>
                        </div>
                        <div className="boxContentTestimonials">
                          <div className="ratingStar">
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
                          <p className="commentContent">
                            {
                              el.comment
                            }
                          </p>
                          <p className="dateComment">
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
  );
}
