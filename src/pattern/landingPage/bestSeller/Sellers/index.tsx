import { Link } from 'react-router-dom';
import './index.scss';
import '@splidejs/react-splide/css';
import Star from 'assets/images/star.svg?react';

import {
  Splide,
  SplideTrack,
  SplideSlide
} from '@splidejs/react-splide';

import BestProduct from 'assets/images/products/bestSell.png';

export const Sellers = () => {
  const slideList = [
    {
      category: 'FLOWER',
      soldOut: '',
      title:
        '2 Oz Deal Watermelon Zkittles + Purple Gushers',
      rate: '4.6/5',
      reviews: '135',
      sale: 'Sativa 100%',
      discount: '',
      price: '$80.00',
      unit: 'gram',
      kg: [
        '28g',
        '1/2lb',
        '1/4lb'
      ],
      image:
        '/src/assets/images/products/image_12_prev_ui_1.png'
    },
    {
      category:
        'CONCENTRATES',
      soldOut: 'Out Of Stock',
      title:
        'Mix And Match Shatter/Budder 28g (4 X 7G)',
      rate: '4.6/5',
      reviews: '135',
      sale: 'Indica 70%',
      discount: '$200.00',
      price: '$102.00',
      unit: '',
      kg: [
        '28g',
        '1/2lb',
        '1/4lb'
      ],
      image:
        '/src/assets/images/products/image_12_prev_ui_2.png'
    },
    {
      category: 'FLOWER',
      soldOut: 'Out Of Stock',
      title:
        '2 Oz Deal Ahi Tuna + Master Tuna',
      rate: '4.6/5',
      reviews: '135',
      sale: '100%',
      discount: '$120.00',
      price: '$102.00',
      unit: '',
      kg: [
        '28g',
        '1/2lb',
        '1/4lb'
      ],
      image:
        '/src/assets/images/products/image_13_prev_ui_2.png'
    }
  ];

  const splideOpts = {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    gap: '32px',
    padding: '15%',

    pagination: false,
    breakpoints: {
      575: {
        perPage: 1,
        gap: '24px'
      },
      767: { perPage: 2 },
      991: { perPage: 3 },
      1100: { perPage: 1.5 },
      1200: { perPage: 2.5 },
      1920: { perPage: 2.65,padding: 0 }
    }
  };

  return (
    <div className="seller-list-container">
      <div className="seller-list-container-box">
        <div className="best-seller-card">
          <div className="best-seller-card-image">
            <img
              width={213}
              height={213}
              decoding="async"
              loading="lazy"
              src={
                BestProduct
              }
              className="best-product-image"
              alt=""
            />
          </div>

          <div className="sellerCardContent">
            <div className="best-seller-cardTitle">
              <h3>
                Shop our Best
                Sellers
              </h3>
            </div>

            <div className="best-seller-card-description">
              <p>
                Lorem ipsum
                dolor sit amet
                consectetur.
                Ullamcorper
                ipsum varius
                lorem blandit
                lectus magnis
                feugiat.{' '}
              </p>

              <div className="best-seller-card-button">
                <Link
                  to="/"
                  className="base-seller-link">
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="seller-list">
          <Splide
            hasTrack={false}
            options={
              splideOpts
            }
            aria-label="My Favorite Images">
            <SplideTrack>
              {slideList.map(
                (
                  el,
                  index
                ) => (
                  <SplideSlide
                    key={
                      index
                    }>
                    <Link
                      className="sell-container-box"
                      to={`/detail/${index}`}>
                      <div className="sell-container-box-header">
                        <div className="card-image">
                          {el.soldOut && (
                            <div className="sold-out">
                              {
                                el.soldOut
                              }
                            </div>
                          )}
                          <img
                            decoding="async"
                            loading="lazy"
                            src={
                              el.image
                            }
                            className="splide-product-image"
                            alt="Image 1"
                          />
                        </div>

                        <div className="sell-container-box-content mt-4">
                          <h5 className="category">
                            {
                              el.category
                            }
                          </h5>
                          <h3 className="title">
                            {
                              el.title
                            }
                          </h3>
                          <div className="flex-box">
                            <div className="rate-box">
                              <div className="rate-svg">
                                <Star />
                              </div>
                              <span className="rate-text">
                                {
                                  el.rate
                                }
                              </span>
                            </div>

                            <div className="review-box">
                              <div className="reviewText">
                                {
                                  el.reviews
                                }{' '}
                                <span className="reviews">
                                  Reviews
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="sale-box">
                            <span className="sale-text">
                              {
                                el.sale
                              }
                            </span>
                          </div>

                          <div className="price-box">
                            {el.discount && (
                              <span className="discount">
                                {
                                  el.discount
                                }
                              </span>
                            )}
                            <span className="price-text">
                              {
                                el.price
                              }
                              {el.unit && (
                                <span className="unit">
                                  {' '}
                                  /{' '}
                                  {
                                    el.unit
                                  }
                                </span>
                              )}
                            </span>
                          </div>

                          <div className="kgBox d-flex flex-row gap-2">
                            {el.kg.map(
                              (
                                kg,
                                index
                              ) => (
                                <span
                                  key={
                                    index
                                  }
                                  className="kg">
                                  {
                                    kg
                                  }
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="button-box">
                        <button className="btn add-cart-button">
                          Add
                          To
                          Cart
                        </button>
                      </div>
                    </Link>
                  </SplideSlide>
                )
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
};
