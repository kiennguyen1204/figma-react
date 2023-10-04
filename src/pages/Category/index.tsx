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
        perPage: 2,
        gap: '24px'
      },
      767: { perPage: 2 },
      991: { perPage: 3 },
      1100: { perPage: 3 },
      1200: { perPage: 2.5 },
      1920: {
        perPage: 2.65,
        padding: 0
      }
    }
  };

  return (
    <div className="category-product-container">
      <FirstServicePattern />
      <div className="top-title-wrapper">
        <p className="first-title">
          Shop
        </p>
        <p className="two-title title-filter">
          Filter
        </p>
        <p className="three-title title-filter">
          Short By Lates
        </p>
      </div>
      <div className="two-row-container">
        <div className="left-filter-container"></div>
      <div className="content-cate-product">
        <p className="title">
          Cannabis
        </p>
        <div className="description">
          Here at
          WestCoastSupply’s “
          cannabis section, we
          showcase the best
          Indica, Hybrid, and
          Sativa medical
          cannabis strain
          selections at the
          best prices online.
          You can be assured
          that all our strains
          go through a strict
          screening process to
          ensure that all your
          cannabis needs are
          top-quality. All of
          our flowers are
          sourced from
          reputable growers,
          based in British
          Columbia, Canada. We
          have hige grade
          selection comes from
          growers that produce
          AAAA+ quality
          cannabis flowers and
          have many years of
          experience in the
          cannabis industry.
          You are guaranteed
          to be receiving
          high-quality flowers
          at the best prices
          online with our
          unbeatable sales!
        </div>
        <div className="main-content">
          <p className="title-top-selling">
            Top Selling
          </p>
          <div className="list-item-selling list-data">
            <Splide
              hasTrack={false}
              options={
                splideOpts
              }
              aria-label="My Favorite Images">
              <SplideTrack>
                {dataList
                  .slice(0, 3)
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
          <div className="list-item-data">
            {dataList.map(
              (e, index) => (
                <ItemCard
                  item={e}
                  index={
                    index
                  }
                  key={index}
                />
              )
            )}
          </div>
          <div className="banner-bottom">
            <div className="banner-item-wrapper">
              <p className="cate">
              CONCENTRATES
              </p>
              <p className="title">
              Mix And Match Shatter/Budder 28g (4 X 7G)
              </p>
              <p className="rating-n-review">
                <span className="rating">
                  <Star/>
                  <span className="star-text">
                    4.6/{MAX_STAR.TOTAL}
                  </span>
                </span>
                <span className="sign">/</span>
                <span className="reviews">
                  135
                  <span className="text-review">
                    Reviews
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div className="list-item-data">
            {dataList.map(
              (e, index) => (
                <ItemCard
                  item={e}
                  index={
                    index
                  }
                  key={index}
                />
              )
            )}
          </div>
          <div className="bottom-page">
            <p className="result-text">
              Showing 1-30 of
              393 results
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
