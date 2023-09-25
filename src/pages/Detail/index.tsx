import React, {
  useState
} from 'react';
import { useParams } from 'react-router-dom';
import './index.scss';
import Star from 'assets/images/star.svg?react';
import Description from '../../pattern/landingPage/detailProduct/description';
import Reviews from '../../pattern/landingPage/detailProduct/reviews';
import ReferFriend from '../../pattern/landingPage/detailProduct/referFriend';

const fakeData = {
  category: 'CONCENTRATES',
  soldOut: 'Out Of Stock',
  title:
    'Mix And Match Shatter/Budder 28g (4 X 7G)',
  rate: '4.6/5',
  sale: 'Indica 70%',
  discount: '$200.00',
  price: '$102.00',
  kg: [
    '28g',
    '1/2lb',
    '1/4lb'
  ],
  image:
    '/src/assets/images/products/image_12_prev_ui_2.png',
  totalReviews: '135',
  unit: 'gram',
  earnPoint: 80,
  sku: 'N/A',
  integraPack: [
    '4g(+$2.00)',
    '8g(+$3.00)'
  ],
  effects: [
    {
      title: 'effects',
      image:
        '/src/assets/images/products/colorfilter.png',
      content:
        'Calming, Creative, Happy, Relaxing, Sleepy, Uplifting'
    },
    {
      title: 'relieve',
      image:
        '/src/assets/images/products/mdi_brain-freeze-outline.png',
      content:
        'Anxiety, Arthritis, Chronic Pain, Depression, Fatigue, Inflammation, Insomnia, Irregular Bowel Movements, Migraines, Mood Swings'
    },
    {
      title: 'aromas',
      image:
        '/src/assets/images/products/carbon_smoke.png',
      content:
        'Chemical, Citrus, Earthy, Pungent, Sour'
    }
  ],
  listImage: [
    '/src/assets/images/products/image_12_prev_ui_1.png',
    '/src/assets/images/products/image_12_prev_ui_1.png',
    '/src/assets/images/products/image_12_prev_ui_1.png',
    '/src/assets/images/products/image_12_prev_ui_1.png'
  ],
  descrip:
    'Jungle Diamonds is a slightly indica dominant hybrid strain (60% indica/40% sativa) created through crossing the infamous Slurricane X Gorilla Glue #4 strains.',
  descripDetail: [
    'Jungle Diamonds is a slightly indica dominant hybrid strain (60% indica/40% sativa) created through crossing the infamous Slurricane X Gorilla Glue #4 strains. Named for its gorgeous appearance and breeder, Jungle Diamonds is a favorite of indica and hybrid lovers alike thanks to its delicious taste and tingly, arousing high. Jungle Diamonds buds have sparkling oversized spade-shaped olive green nugs with vivid amber hairs and a thick frosty blanket of glittering tiny blue-tinted white crystal trichomes. As you pull apart each sticky little nugget, aromas of spicy mocha coffee and fruity herbs are released.',
    'The flavor is of sweet chocolate with hints of fresh ripe berries to it, too. The Jungle Diamonds high is just as delicious, with happy effects that will boost the spirits and kick negative thoughts and moods to the curb. You’ll feel a tingly sense in your body from start to finish that serves to remove any aches or pains while leaving you pretty aroused at times. This is accompanied by a blissfully unfocused heady lift that leaves your head in the clouds without causing sedation. With these effects and its pretty high 17-24% THC level, Jungle Diamonds is ideal for experienced patients with chronic pain, cramps or muscle spasms and appetite loss or nausea.'
  ],
  reviews: [
    {
      userName: 'Vikki Starr',
      avatar:
        '/src/assets/images/products/reviews/VikkiStarr.png',
      date: 'January 15, 2023',
      rating: 4,
      comment:
        'Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.'
    },
    {
      userName:
        'Terry Baskey',
      avatar:
        '/src/assets/images/products/reviews/TerryBaskey.png',
      date: 'January 15, 2023',
      rating: 5,
      comment:
        'Best damn place to buy your canabis at great prices.'
    }
  ]
};

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
  return (
    <div className="container-detail">
      <div className="image-container">
        <div className="image-product">
          <img
            src={
              fakeData.image
            }
          />
        </div>
        <div className="thumb-list">
          {fakeData.listImage.map(
            (item) => (
              <a className="thumb-item">
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
              fakeData.category
            }
          </p>
          <p className="title">
            {fakeData.title}
          </p>
          <div className="sale">
            <p>
              {fakeData.sale}
            </p>
          </div>
          <div className="numeral-container">
            <div className="price-container">
              <p className="discount">
                {
                  fakeData.discount
                }
              </p>
              <p className="price">
                {
                  fakeData.price
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
                    fakeData.rate
                  }
                </span>
              </div>
              <div className="divider"></div>
              <div className="review-box">
                <div className="review-text">
                  {
                    fakeData.totalReviews
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
          {fakeData.effects.map(
            (e) => (
              <div className="effects-box">
                <img
                  src={
                    e.image
                  }
                />
                <div className="effects-text">
                  <p className="title">
                    {e.title}
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
              fakeData.descripDetail
            }
          </p>
        </div>
        <div className="weight-container">
          <div className="weight-box">
            <div className="title">
              weight
            </div>
            <div className="content">
              {fakeData.kg.map(
                (e) => (
                  <div className="option">
                    <p>{e}</p>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="integra-pack">
            <div className="title">
              add integra pack
            </div>
            <div className="content">
              {fakeData.integraPack.map(
                (e) => (
                  <div className="option">
                    <img src="/src/assets/images/Box.png" />
                    <p>{e}</p>
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
                fakeData.earnPoint
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
                  fakeData.price
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
                  fakeData.soldOut
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
                ordering open
                7 day a week
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
              {fakeData.sku}
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
              {fakeData.sale}
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
                  fakeData.descripDetail
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
              <Reviews reviews={fakeData.reviews}/>
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
  );
}
