import { Link } from 'react-router-dom';

import './index.scss';
import '@splidejs/react-splide/css';
import { Item } from '../../../constants/type';
import ItemCard from '../../../components/common/item';
import { useState } from 'react';
import { OPTION_WEED } from '../../../constants/enums';

export default function RecentlyAdded() {
  const [option, setOption] =
    useState(
      OPTION_WEED.FLOWERS
    );

  const dataList: Item[] = [
    {
      category: 'FLOWER',
      isSoldOut: false,
      title:
        '2 Oz Deal Watermelon Zkittles + Purple Gushers',
      voted: 4.6,
      reviews: 135,
      perPrice: '$60 ounce',
      purity: 'Sativa 100%',
      discount: '',
      price: '$80.00',
      unit: 'gram',
      volume: [
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
      isSoldOut:
        'Out Of Stock',
      title:
        'Mix And Match Shatter/Budder 28g (4 X 7G)',
      voted: 4.6,
      reviews: 135,
      perPrice: '$60 ounce',
      purity: 'Indica 70%',
      discount: '$200.00',
      price: '$102.00',
      unit: '',
      volume: [
        '28g',
        '1/2lb',
        '1/4lb'
      ],
      image:
        '/src/assets/images/products/image_12_prev_ui_2.png'
    },
    {
      category: 'FLOWER',
      isSoldOut:
        'Out Of Stock',
      title:
        '2 Oz Deal Ahi Tuna + Master Tuna',
      voted: 4.6,
      reviews: 135,
      perPrice: '$60 ounce',
      purity: 'hehe',
      discount: '$120.00',
      price: '$102.00',
      unit: '',
      volume: [
        '28g',
        '1/2lb',
        '1/4lb'
      ],
      image:
        '/src/assets/images/products/image_13_prev_ui_2.png'
    },
    {
      category: 'FLOWER',
      isSoldOut: false,
      title:
        '2 Oz Deal Watermelon Zkittles + Purple Gushers',
      voted: 4.6,
      reviews: 135,
      perPrice: '$60 ounce',
      purity: 'Sativa 100%',
      discount: '',
      price: '$80.00',
      unit: 'gram',
      volume: [
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
      isSoldOut:
        'Out Of Stock',
      title:
        'Mix And Match Shatter/Budder 28g (4 X 7G)',
      voted: 4.6,
      reviews: 135,
      perPrice: '$60 ounce',
      purity: 'Indica 70%',
      discount: '$200.00',
      price: '$102.00',
      unit: '',
      volume: [
        '28g',
        '1/2lb',
        '1/4lb'
      ],
      image:
        '/src/assets/images/products/image_12_prev_ui_2.png'
    },
    {
      category: 'FLOWER',
      isSoldOut:
        'Out Of Stock',
      title:
        '2 Oz Deal Ahi Tuna + Master Tuna',
      voted: 4.6,
      reviews: 135,
      perPrice: '$60 ounce',
      purity: 'hehe',
      discount: '$120.00',
      price: '$102.00',
      unit: '',
      volume: [
        '28g',
        '1/2lb',
        '1/4lb'
      ],
      image:
        '/src/assets/images/products/image_13_prev_ui_2.png'
    },
    {
      category: 'FLOWER',
      isSoldOut: false,
      title:
        '2 Oz Deal Watermelon Zkittles + Purple Gushers',
      voted: 4.6,
      reviews: 135,
      perPrice: '$60 ounce',
      purity: 'Sativa 100%',
      discount: '',
      price: '$80.00',
      unit: 'gram',
      volume: [
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
      isSoldOut:
        'Out Of Stock',
      title:
        'Mix And Match Shatter/Budder 28g (4 X 7G)',
      voted: 4.6,
      reviews: 135,
      perPrice: '$60 ounce',
      purity: 'Indica 70%',
      discount: '$200.00',
      price: '$102.00',
      unit: '',
      volume: [
        '28g',
        '1/2lb',
        '1/4lb'
      ],
      image:
        '/src/assets/images/products/image_12_prev_ui_2.png'
    },
    {
      category: 'FLOWER',
      isSoldOut:
        'Out Of Stock',
      title:
        '2 Oz Deal Ahi Tuna + Master Tuna',
      voted: 4.6,
      reviews: 135,
      perPrice: '$60 ounce',
      purity: 'hehe',
      discount: '$120.00',
      price: '$102.00',
      unit: '',
      volume: [
        '28g',
        '1/2lb',
        '1/4lb'
      ],
      image:
        '/src/assets/images/products/image_13_prev_ui_2.png'
    },
    {
      category: 'FLOWER',
      isSoldOut: false,
      title:
        '2 Oz Deal Watermelon Zkittles + Purple Gushers',
      voted: 4.6,
      reviews: 135,
      perPrice: '$60 ounce',
      purity: 'Sativa 100%',
      discount: '',
      price: '$80.00',
      unit: 'gram',
      volume: [
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
      isSoldOut:
        'Out Of Stock',
      title:
        'Mix And Match Shatter/Budder 28g (4 X 7G)',
      voted: 4.6,
      reviews: 135,
      perPrice: '$60 ounce',
      purity: 'Indica 70%',
      discount: '$200.00',
      price: '$102.00',
      unit: '',
      volume: [
        '28g',
        '1/2lb',
        '1/4lb'
      ],
      image:
        '/src/assets/images/products/image_12_prev_ui_2.png'
    },
    {
      category: 'FLOWER',
      isSoldOut:
        'Out Of Stock',
      title:
        '2 Oz Deal Ahi Tuna + Master Tuna',
      voted: 4.6,
      reviews: 135,
      perPrice: '$60 ounce',
      purity: 'hehe',
      discount: '$120.00',
      price: '$102.00',
      unit: '',
      volume: [
        '28g',
        '1/2lb',
        '1/4lb'
      ],
      image:
        '/src/assets/images/products/image_13_prev_ui_2.png'
    },
    {
      category: 'FLOWER',
      isSoldOut: false,
      title:
        '2 Oz Deal Watermelon Zkittles + Purple Gushers',
      voted: 4.6,
      reviews: 135,
      perPrice: '$60 ounce',
      purity: 'Sativa 100%',
      discount: '',
      price: '$80.00',
      unit: 'gram',
      volume: [
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
      isSoldOut:
        'Out Of Stock',
      title:
        'Mix And Match Shatter/Budder 28g (4 X 7G)',
      voted: 4.6,
      reviews: 135,
      perPrice: '$60 ounce',
      purity: 'Indica 70%',
      discount: '$200.00',
      price: '$102.00',
      unit: '',
      volume: [
        '28g',
        '1/2lb',
        '1/4lb'
      ],
      image:
        '/src/assets/images/products/image_12_prev_ui_2.png'
    },
    {
      category: 'FLOWER',
      isSoldOut:
        'Out Of Stock',
      title:
        '2 Oz Deal Ahi Tuna + Master Tuna',
      voted: 4.6,
      reviews: 135,
      perPrice: '$60 ounce',
      purity: 'hehe',
      discount: '$120.00',
      price: '$102.00',
      unit: '',
      volume: [
        '28g',
        '1/2lb',
        '1/4lb'
      ],
      image:
        '/src/assets/images/products/image_13_prev_ui_2.png'
    },
    {
      category: 'FLOWER',
      isSoldOut: false,
      title:
        '2 Oz Deal Watermelon Zkittles + Purple Gushers',
      voted: 4.6,
      reviews: 135,
      perPrice: '$60 ounce',
      purity: 'Sativa 100%',
      discount: '',
      price: '$80.00',
      unit: 'gram',
      volume: [
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
      isSoldOut:
        'Out Of Stock',
      title:
        'Mix And Match Shatter/Budder 28g (4 X 7G)',
      voted: 4.6,
      reviews: 135,
      perPrice: '$60 ounce',
      purity: 'Indica 70%',
      discount: '$200.00',
      price: '$102.00',
      unit: '',
      volume: [
        '28g',
        '1/2lb',
        '1/4lb'
      ],
      image:
        '/src/assets/images/products/image_12_prev_ui_2.png'
    },
    {
      category: 'FLOWER',
      isSoldOut:
        'Out Of Stock',
      title:
        '2 Oz Deal Ahi Tuna + Master Tuna',
      voted: 4.6,
      reviews: 135,
      perPrice: '$60 ounce',
      purity: 'hehe',
      discount: '$120.00',
      price: '$102.00',
      unit: '',
      volume: [
        '28g',
        '1/2lb',
        '1/4lb'
      ],
      image:
        '/src/assets/images/products/image_13_prev_ui_2.png'
    },
    {
      category: 'FLOWER',
      isSoldOut: false,
      title:
        '2 Oz Deal Watermelon Zkittles + Purple Gushers',
      voted: 4.6,
      reviews: 135,
      perPrice: '$60 ounce',
      purity: 'Sativa 100%',
      discount: '',
      price: '$80.00',
      unit: 'gram',
      volume: [
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
      isSoldOut:
        'Out Of Stock',
      title:
        'Mix And Match Shatter/Budder 28g (4 X 7G)',
      voted: 4.6,
      reviews: 135,
      perPrice: '$60 ounce',
      purity: 'Indica 70%',
      discount: '$200.00',
      price: '$102.00',
      unit: '',
      volume: [
        '28g',
        '1/2lb',
        '1/4lb'
      ],
      image:
        '/src/assets/images/products/image_12_prev_ui_2.png'
    },
    {
      category: 'FLOWER',
      isSoldOut:
        'Out Of Stock',
      title:
        '2 Oz Deal Ahi Tuna + Master Tuna',
      voted: 4.6,
      reviews: 135,
      perPrice: '$60 ounce',
      purity: 'hehe',
      discount: '$120.00',
      price: '$102.00',
      unit: '',
      volume: [
        '28g',
        '1/2lb',
        '1/4lb'
      ],
      image:
        '/src/assets/images/products/image_13_prev_ui_2.png'
    }
  ];

  return (
    <div className="boxContainer">
      <h3 className="title">
        RECENTLY ADDED
      </h3>
      <p className="filter">
        Filter by Interest
      </p>
      <div className="optionFilter">
        <div className="wrapperOption">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOption(
                OPTION_WEED.FLOWERS
              );
            }}
            className={`btn btnAction btnOptionWeed ${
              option ==
              OPTION_WEED.FLOWERS
                ? 'active'
                : ''
            }`}>
            Flowers
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOption(
                OPTION_WEED.MUSHROOMS
              );
            }}
            className={`btn btnAction btnOptionWeed ${
              option ==
              OPTION_WEED.MUSHROOMS
                ? 'active'
                : ''
            }`}>
            Mushrooms
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOption(
                OPTION_WEED.CONCENTRACE
              );
            }}
            className={`btn btnAction btnOptionWeed ${
              option ==
              OPTION_WEED.CONCENTRACE
                ? 'active'
                : ''
            }`}>
            Concentrace
          </button>
        </div>
      </div>
      <div className="containerListItem">
        {dataList.map(
          (e, i) => (
            <ItemCard
              item={e}
              index={i}
            />
          )
        )}
      </div>
    </div>
  );
}
