import ItemCard from '../../components/common/item';
import { MAX_STAR } from '../../constants/enums';
import { dataList } from '../../constants/fakeData';
import { FirstServicePattern } from '../../pattern/landingPage/serviceOne';
import './index.scss';
import {
  Splide,
  SplideTrack,
  SplideSlide
} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {
  HiMiniChevronLeft,
  HiMiniChevronRight
} from 'react-icons/hi2';
import Star from 'assets/images/star.svg?react';
import WhiteStar from 'assets/images/white-star.svg?react';
import { IoChevronDownOutline } from 'react-icons/io5';

export default function CategoryProduct() {
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
      1100: { perPage: 3 },
      1400: { perPage: 3 },
      1920: {
        perPage: 4,
        padding: 0
      }
    }
  };

  const listProductCategory =
    [
      {
        name: 'Sales',
        value: 12,
        isChecked: false
      },
      {
        name: 'Cannabis',
        value: 430,
        isChecked: true
      },
      {
        name: 'Pre-Rolls',
        value: 40,
        isChecked: false
      },
      {
        name: 'CBD Oil',
        value: 12,
        isChecked: false
      },
      {
        name: 'Magic Mushrooms',
        value: 34,
        isChecked: false
      },
      {
        name: 'Extracts',
        value: 26,
        isChecked: false
      },
      {
        name: 'Edibles',
        value: 32,
        isChecked: false
      },
      {
        name: 'Vape Pens',
        value: 12,
        isChecked: false
      },
      {
        name: 'Accessories',
        value: 10,
        isChecked: false
      },
      {
        name: 'Bath & Body',
        value: 8,
        isChecked: false
      },
      {
        name: 'Bundles',
        value: 24,
        isChecked: false
      },
      {
        name: 'Wholesale',
        value: 28,
        isChecked: false
      }
    ];

  const listOrderBy = [
    {
      name: 'Default',
      isChecked: false
    },
    {
      name: 'Review',
      isChecked: true
    },
    {
      name: 'Popularity',
      isChecked: false
    },
    {
      name: 'Average Rating',
      isChecked: false
    },
    {
      name: 'Newness',
      isChecked: false
    },
    {
      name: 'Price: Low to High',
      isChecked: false
    },
    {
      name: 'Price: High to Low',
      isChecked: false
    },
    {
      name: 'Random Products',
      isChecked: false
    },
    {
      name: 'Product Name',
      isChecked: false
    }
  ];

  const listStar = [
    MAX_STAR.TOTAL,
    4,
    3,
    2,
    1
  ];

  return (
    <div className="category-product-container">
      <FirstServicePattern />
      <div className="top-title-wrapper">
        <p className="first-title">
          Shop
        </p>
        <div className="flex-title">
          <p className="two-title title-filter">
            Filter
          </p>
          <p className="three-title title-filter">
            Short By Lates
          </p>
        </div>
      </div>
      <div className="two-row-container">
        <div className="left-filter-container">
          <p className="title-filter">
            Filters
          </p>
          <div className="list-cate-item">
            <p className="cate-title">
              PRODUCT CATEGORY
            </p>
            <div className="list-check">
              {listProductCategory.map(
                (e, i) => (
                  <label
                    key={i}
                    className="check-item block"
                    htmlFor={e.name
                      .toLowerCase()
                      .replace(
                        /\s/g,
                        ''
                      )}>
                    <input
                      type="radio"
                      value={
                        e.value
                      }
                      checked={
                        e.isChecked
                      }
                      id={e.name
                        .toLowerCase()
                        .replace(
                          /\s/g,
                          ''
                        )}
                      hidden
                    />
                    <span className="radio"></span>
                    <span className="name">
                      {e.name}
                    </span>
                    <span className="line"></span>
                    <span className="value">
                      {
                        e.value
                      }
                    </span>
                  </label>
                )
              )}
            </div>
          </div>
          <div className="list-cate-item">
            <p className="cate-title">
              FILTER BY PRICE
            </p>
            <div className="slider">
              <div className="slide-price">
                <div className="min-max-price">
                  <span className="min-price price">
                    $0
                  </span>
                  <span className="max-price price">
                    $50,000.00
                  </span>
                </div>
                <div className="slide-line">
                  <div className="dot-left dot-slide"></div>
                  <div className="dot-right dot-slide"></div>
                </div>
              </div>
              <button className="btn btn-action btn-apply">
                Apply
              </button>
            </div>
          </div>
          <div className="list-cate-item">
            <p className="cate-title">
              ORDER BY
            </p>
            <div className="list-check">
              {listOrderBy.map(
                (e, i) => (
                  <label
                    key={i}
                    className="check-item block"
                    htmlFor={e.name
                      .toLowerCase()
                      .replace(
                        /\s/g,
                        ''
                      )}>
                    <input
                      type="radio"
                      id={e.name
                        .toLowerCase()
                        .replace(
                          /\s/g,
                          ''
                        )}
                      checked={
                        e.isChecked
                      }
                      hidden
                    />
                    <span className="radio"></span>
                    <span className="name">
                      {e.name}
                    </span>
                  </label>
                )
              )}
            </div>
          </div>
          <div className="list-cate-item">
            <p className="cate-title">
              FILTER BY
              REVIEWS
            </p>
            <div className="list-check">
              {listStar.map(
                (e, i) => (
                  <label
                    key={i}
                    htmlFor={
                      i + 'a'
                    }
                    className="check-item block">
                    <input
                      type="checkbox"
                      id={
                        i +
                        'a'
                      }
                      hidden
                    />
                    <span className="checkbox"></span>
                    <span className="stars">
                      {Array.from(
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
                      ).map(
                        (
                          r: any
                        ) => {
                          return r <=
                            e ? (
                            <Star
                              key={
                                r +
                                'b'
                              }
                            />
                          ) : (
                            <WhiteStar
                              key={
                                r +
                                'b'
                              }
                            />
                          );
                        }
                      )}
                    </span>
                  </label>
                )
              )}
            </div>
          </div>
          <div className="button-clear">
            <button className="btn clear-all-filter btn-action">
              Clear Filters
            </button>
          </div>
        </div>
        <div className="content-cate-product">
          <p className="title-shop">
            <span className="shop-title">
              Shop
            </span>
            <span className="filter-title">
              Short By Lates
              <IoChevronDownOutline
                size={14}
                color={
                  'var(--color-neutral-lighter)'
                }
              />
            </span>
          </p>
          <p className="title">
            Cannabis
          </p>
          <div className="description">
            Here at
            WestCoastSupply’s
            “ cannabis
            section, we
            showcase the best
            Indica, Hybrid,
            and Sativa medical
            cannabis strain
            selections at the
            best prices
            online. You can be
            assured that all
            our strains go
            through a strict
            screening process
            to ensure that all
            your cannabis
            needs are
            top-quality. All
            of our flowers are
            sourced from
            reputable growers,
            based in British
            Columbia, Canada.
            We have hige grade
            selection comes
            from growers that
            produce AAAA+
            quality cannabis
            flowers and have
            many years of
            experience in the
            cannabis industry.
            You are guaranteed
            to be receiving
            high-quality
            flowers at the
            best prices online
            with our
            unbeatable sales!
          </div>
          <div className="main-content">
            <div className="list-item-selling list-data">
              <p className="title-top-selling">
                Top Selling
              </p>
              <div className="splide-list">
                <Splide
                  hasTrack={
                    false
                  }
                  options={
                    splideOpts
                  }
                  aria-label="My Favorite Images">
                  <SplideTrack>
                    {dataList
                      .slice(
                        0,
                        3
                      )
                      .map(
                        (
                          el,
                          index
                        ) => (
                          <SplideSlide
                            key={
                              index
                            }>
                            <ItemCard
                              item={
                                el
                              }
                              index={
                                index
                              }
                            />
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
            <div className="list-item-data list-first">
              {dataList.map(
                (
                  e,
                  index
                ) => (
                  <ItemCard
                    item={e}
                    index={
                      index
                    }
                    key={
                      index
                    }
                  />
                )
              )}
            </div>
            <div className="banner-bottom relative">
              <div className="blur"></div>
              <div className="banner-item-wrapper">
                <div className="wrapper-left">
                  <p className="cate">
                    CONCENTRATES
                  </p>
                  <p className="title">
                    Mix And
                    Match
                    Shatter/Budder
                    28g (4 X
                    7G)
                  </p>
                  <p className="rating-n-review">
                    <span className="rating">
                      <Star />
                      <span className="star-text">
                        4.6/
                        {
                          MAX_STAR.TOTAL
                        }
                      </span>
                    </span>
                    <span className="sign"></span>
                    <span className="reviews">
                      135
                      <span className="text-review">
                        Reviews
                      </span>
                    </span>
                  </p>
                  <div className="volumes">
                    <span className="volume-child">
                      28g
                    </span>
                    <span className="volume-child">
                      1/2lb
                    </span>
                    <span className="volume-child">
                      1/4lb
                    </span>
                  </div>
                  <div className="button-n-price">
                    <button className="btn button-cart">
                      Add to
                      Cart
                    </button>
                    <p className="price">
                      <span className="sale-price">
                        $102.00
                      </span>
                      <span className="real-price">
                        $200.00
                      </span>
                    </p>
                  </div>
                </div>
                <div className="wrapper-right">
                  <div className="background-blur-item relative">
                    <div className="arrow-next-prev">
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
                    </div>
                    <img
                      src="/src/assets/images/category/Buddha-Bomb-Green-Apple-Gummies.png"
                      alt=""
                    />
                  </div>
                  <div className="dots">
                    <span className="dot active"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-item-data">
              {dataList.map(
                (
                  e,
                  index
                ) => (
                  <ItemCard
                    item={e}
                    index={
                      index
                    }
                    key={
                      index
                    }
                  />
                )
              )}
            </div>
            <div className="bottom-page">
              <p className="result-text">
                Showing 1-30
                of 393 results
              </p>
              <p className="pagination">
                <HiMiniChevronLeft
                  size={16}
                />
                <span className="number-page">
                  1
                </span>
                <span className="number-page">
                  2
                </span>
                <span className="number-page">
                  3
                </span>
                <span className="number-page">
                  4
                </span>
                <span className="number-page">
                  ...
                </span>
                <span className="number-page">
                  55
                </span>
                <HiMiniChevronRight
                  size={16}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
