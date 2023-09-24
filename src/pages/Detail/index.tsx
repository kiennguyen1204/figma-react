import React from 'react';
import { useParams } from 'react-router-dom';
import './index.scss';
import Star from 'assets/images/star.svg?react';
import Button from '../../components/common/Button';

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
  descripDetail:
    'Jungle Diamonds is a slightly indica dominant hybrid strain (60% indica/40% sativa) created through crossing the infamous Slurricane X Gorilla Glue #4 strains. Named for its gorgeous appearance and breeder, Jungle Diamonds is a favorite of indica and hybrid lovers alike thanks to its delicious taste and tingly, arousing high. Jungle Diamonds buds have sparkling oversized spade-shaped olive green nugs with vivid amber hairs and a thick frosty blanket of glittering tiny blue-tinted white crystal trichomes. As you pull apart each sticky little nugget, aromas of spicy mocha coffee and fruity herbs are released.\n \nThe flavor is of sweet chocolate with hints of fresh ripe berries to it, too. The Jungle Diamonds high is just as delicious, with happy effects that will boost the spirits and kick negative thoughts and moods to the curb. You’ll feel a tingly sense in your body from start to finish that serves to remove any aches or pains while leaving you pretty aroused at times. This is accompanied by a blissfully unfocused heady lift that leaves your head in the clouds without causing sedation. With these effects and its pretty high 17-24% THC level, Jungle Diamonds is ideal for experienced patients with chronic pain, cramps or muscle spasms and appetite loss or nausea.',
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
        '/src/assets/images/products/reviews/Terry Baskey.png',
      date: 'January 15, 2023',
      rating: 5,
      comment:
        'Best damn place to buy your canabis at great prices.'
    }
  ]
};

export default function Detail() {
  const { id } = useParams();
  return (
    <div className="containerDetail">
      <div className="imageContainer">
        <div className="imageProduct">
          <img
            src={
              fakeData.image
            }
          />
        </div>
        <div className="thumbList">
          {fakeData.listImage.map(
            (item) => (
              <a className="thumbItem">
                <img
                  src={item}
                />
              </a>
            )
          )}
        </div>
      </div>
      <div className="infoContainer">
        <div className="overviewContainer">
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
          <div className="numeralContainer">
            <div className="priceContainer">
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
            <div className="reviewContainer">
              <div className="rateBox">
                <div className="rateSvg">
                  <Star />
                </div>
                <span className="rateText">
                  {
                    fakeData.rate
                  }
                </span>
              </div>
              <div className="divider"></div>
              <div className="reviewBox">
                <div className="reviewText">
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
        <div className="effectsContainer">
          {fakeData.effects.map(
            (e) => (
              <div className="effectsBox">
                <img
                  src={
                    e.image
                  }
                />
                <div className="effectsText">
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
        <div className="descripContainer">
          <p className="title">
            description
          </p>
          <p className="content">
            {
              fakeData.descripDetail
            }
          </p>
        </div>
        <div className="weightContainer">
          <div className="weightBox">
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
          <div className="integraPack">
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
        <div className="earnPoint">
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
        <div className="billContainer">
          <div className="products">
            <div className="item">
              <p className='name'>Khalifa Kush (AAAA)<span className='amount'>2x</span></p>
              <p className='price'>{fakeData.price}</p>
            </div>
            <div className="item">
              <p className='name'>Add Integra Pack - 4g</p>
              <p className='price'>$2.00</p>
            </div>
          </div>
          <div className="addCartContainer">
            <div className="stockBox">
              <div className="handleAmount">
                <a>-</a>
                <a className='amount'><p>2</p></a>
                <a>+</a>
              </div>
              <div className="divider"></div>
              <p className="inStock">{fakeData.soldOut}</p>
            </div>
            <button className='addCartBtn btn'>
              Add to Cart<span className='divider'></span>$242.00
            </button>
          </div>
          <div className="ourServices">
            <div className="item">
              <img src="/src/assets/images/tick-circle.png" />
              <p>Free Xpress Shipping on orders over <span>$149</span></p>
            </div>
            <div className="item">
              <img src="/src/assets/images/tick-circle.png" />
              <p>Order before 12:00pm for same day dispatch</p>
            </div>
            <div className="item">
              <img src="/src/assets/images/tick-circle.png" />
              <p>Support & ordering open 7 day a week</p>
            </div>
          </div>
        </div>
        <div className="skuCategories">
          <div className="item">
            <p className='key'>SKU</p>
            <p className='key colon'>:</p>
            <p className='value'>{fakeData.sku}</p>
          </div>
          <div className="item">
            <p className='key'>Categories</p>
            <p className='key colon'>:</p>
            <p className='value cate'>{fakeData.sale}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
