import React, {
  useState
} from 'react';
import { useParams } from 'react-router-dom';
import './index.scss';
import Star from 'assets/images/star.svg?react';
import {
  dataItemDetail,
  featuredProduct
} from '../../constants/fakeData'; 
import ItemCard from '../../components/common/item';
import Fancybox from '../../components/common/ViewImage';
import Description from '../../pattern/detailProduct/description';
import Reviews from '../../pattern/detailProduct/reviews';
import ReferFriend from '../../pattern/detailProduct/referFriend';

export default function Detail() {
  const { id } = useParams();
  const [
    currentTab,
    setCurrentTab
  ] = useState(0);
  const tabsList = [
    {
      title: 'Description',
      to: 'description'
    },
    {
      title: 'Reviews',
      to: 'reviews'
    },
    {
      title: 'Refer a Friend',
      to: 'refer'
    }
  ];
  const changeTab = (
    index: number
  ) => {
    setCurrentTab(index);
  };
  const [
    currentImage,
    setCurrentImage
  ] = useState(0);
  return (
    <div>
      <div className="container-detail">
        <div className="image-container">
          <div className="image-product">
            <Fancybox
              options={{
                Carousel: {
                  infinite:
                    false
                }
                // contentClick: "toggleZoom"
              }}>
              {dataItemDetail.listImage.map(
                (e,i) => (
                  <a
                    data-fancybox="gallery"
                    href={e} 
                    className={i == currentImage ? 'show':''} 
                    >
                    <img
                      alt=""
                      src={e}
                      width="200"
                      height="150"
                    />
                  </a>
                )
              )}
              {/* <a
                data-fancybox="gallery"
                href={
                  dataItemDetail
                    .listImage[
                    currentImage
                  ]
                }>
                <img
                  alt=""
                  src={
                    dataItemDetail
                      .listImage[
                      currentImage
                    ]
                  }
                  width="200"
                  height="150"
                />
              </a> */}
            </Fancybox>
          </div>
          <div className="thumb-list">
            {dataItemDetail.listImage.map(
              (
                item,
                index
              ) => (
                <a
                  className={`thumb-item ${
                    index ===
                    currentImage
                      ? 'choosing'
                      : ''
                  }`}
                  onClick={() =>
                    setCurrentImage(
                      index
                    )
                  }>
                  <img
                    src={item}
                  />
                </a>
              )
            )}
          </div>
        </div>
        <div className="info-container">
          <div className="overview-container">
            <p className="category">
              {
                dataItemDetail.category
              }
            </p>
            <p className="title">
              {
                dataItemDetail.title
              }
            </p>
            <div className="sale">
              <p>
                {
                  dataItemDetail.sale
                }
              </p>
            </div>
            <div className="numeral-container">
              <div className="price-container">
                <p className="discount">
                  {
                    dataItemDetail.discount
                  }
                </p>
                <p className="price">
                  {
                    dataItemDetail.price
                  }
                </p>
              </div>
              <div className="review-container">
                <div className="rate-box">
                  <div className="rate-svg">
                    <Star />
                  </div>
                  <span className="rate-text">
                    {
                      dataItemDetail.rate
                    }
                  </span>
                </div>
                <div className="divider"></div>
                <div className="review-box">
                  <div className="review-text">
                    {
                      dataItemDetail.totalReviews
                    }{' '}
                    <span className="reviews">
                      Reviews
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="effects-container">
            {dataItemDetail.effects.map(
              (e) => (
                <div className="effects-box">
                  <img
                    src={
                      e.image
                    }
                  />
                  <div className="effects-text">
                    <p className="title">
                      {
                        e.title
                      }
                    </p>
                    <p className="content">
                      {
                        e.content
                      }
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="descrip-container">
            <p className="title">
              description
            </p>
            <p className="content">
              {
                dataItemDetail.descripDetail
              }
            </p>
          </div>
          <div className="weight-container">
            <div className="weight-box">
              <div className="title">
                weight
              </div>
              <div className="content">
                {dataItemDetail.kg.map(
                  (e) => (
                    <div className="option">
                      <p>
                        {e}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="integra-pack">
              <div className="title">
                add integra
                pack
              </div>
              <div className="content">
                {dataItemDetail.integraPack.map(
                  (e) => (
                    <div className="option">
                      <img src="/src/assets/images/Box.png" />
                      <p>
                        {e}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="earn-point">
            <p>
              Purchase this
              product now and
              earn{' '}
              <span>
                {
                  dataItemDetail.earnPoint
                }
              </span>{' '}
              Points!
            </p>
          </div>
          <div className="bill-container">
            <div className="products">
              <div className="item">
                <p className="name">
                  Khalifa Kush
                  (AAAA)
                  <span className="amount">
                    2x
                  </span>
                </p>
                <p className="price">
                  {
                    dataItemDetail.price
                  }
                </p>
              </div>
              <div className="item">
                <p className="name">
                  Add Integra
                  Pack - 4g
                </p>
                <p className="price">
                  $2.00
                </p>
              </div>
            </div>
            <div className="add-cart-container">
              <div className="stock-box">
                <div className="handle-amount">
                  <a>-</a>
                  <a className="amount">
                    <p>2</p>
                  </a>
                  <a>+</a>
                </div>
                <div className="divider"></div>
                <p className="in-stock">
                  {
                    dataItemDetail.soldOut
                  }
                </p>
              </div>
              <button className="add-cart-btn btn">
                Add to Cart
                <span className="divider"></span>
                $242.00
              </button>
            </div>
            <div className="our-services">
              <div className="item">
                <img src="/src/assets/images/tick-circle.png" />
                <p>
                  Free Xpress
                  Shipping on
                  orders over{' '}
                  <span>
                    $149
                  </span>
                </p>
              </div>
              <div className="item">
                <img src="/src/assets/images/tick-circle.png" />
                <p>
                  Order before
                  12:00pm for
                  same day
                  dispatch
                </p>
              </div>
              <div className="item">
                <img src="/src/assets/images/tick-circle.png" />
                <p>
                  Support &
                  ordering
                  open 7 day a
                  week
                </p>
              </div>
            </div>
          </div>
          <div className="sku-categories">
            <div className="item">
              <p className="key">
                SKU
              </p>
              <p className="key colon">
                :
              </p>
              <p className="value">
                {
                  dataItemDetail.sku
                }
              </p>
            </div>
            <div className="item">
              <p className="key">
                Categories
              </p>
              <p className="key colon">
                :
              </p>
              <p className="value cate">
                {
                  dataItemDetail.sale
                }
              </p>
            </div>
          </div>
          <div className="tab-product">
            <ul className="nav-pill">
              {tabsList.map(
                (
                  tab,
                  index
                ) => {
                  return (
                    <li
                      className={`nav-item ${
                        index ===
                        currentTab
                          ? 'active'
                          : ''
                      }`}
                      onClick={() =>
                        changeTab(
                          index
                        )
                      }
                      key={
                        index
                      }>
                      <button className="btn nav-link">
                        {
                          tab.title
                        }
                      </button>
                    </li>
                  );
                }
              )}
            </ul>
            <div className="tab-content">
              <div
                className={`tab-pane fade ${
                  currentTab ===
                  0
                    ? 'show active'
                    : ''
                }`}
                tabIndex={0}>
                <Description
                  content={
                    dataItemDetail.descripDetail
                  }
                />
              </div>
              <div
                className={`tab-pane fade ${
                  currentTab ===
                  1
                    ? 'show active'
                    : ''
                }`}
                tabIndex={0}>
                <Reviews
                  reviews={
                    dataItemDetail.reviews
                  }
                />
              </div>
              <div
                className={`tab-pane fade ${
                  currentTab ===
                  2
                    ? 'show active'
                    : ''
                }`}
                tabIndex={0}>
                <ReferFriend />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-product">
        <p className="featured-title">
          Featured Product
        </p>
        <div className="container-list-item">
          {featuredProduct.map(
            (e, i) => (
              <ItemCard
                item={e}
                index={i}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
