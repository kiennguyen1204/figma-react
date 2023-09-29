import './index.scss';
import Star from 'assets/images/star.svg?react';
import { Item } from '../../../constants/type';
import { MAX_STAR } from '../../../constants/enums';
import { Link } from 'react-router-dom';

export default function ItemCard({
  item,
  index
}: {
  item: Item;
  index: any;
}) {
  return (
    <div
      onClick={() =>
        `/detail/${index}`
      }
      className="item-card"
      key={index}>
      <div className="image-card">
        {item.perPrice && (
          <p className="per-price">
            {item.perPrice}
          </p>
        )}
        {item.isSoldOut && (
          <p className="sold-out">
            Sold Out
          </p>
        )}
        <img
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className="content-item">
        <p className="cate-item">
          {item.category}
        </p>
        <p className="title-item">
          {item.title}
        </p>
        <div className="star-review">
          <span className="voted">
            <Star />
            {item.voted}/
            {MAX_STAR.TOTAL}
          </span>
          <span className="review">
            {item.reviews}
            <span className="reviewsText">
              Reviews
            </span>
          </span>
        </div>
        <div className="purity">
          {item.purity}
        </div>
        <div className="discount-n-price">
          {item.discount && (
            <p className="discount">
              {item.discount}
            </p>
          )}
          <p className="price">
            {item.price}
            {!item.discount &&
              item.unit &&
              item.unit
                .length >
                0 && (
                <span className="unit">
                  {` / ${item.unit}`}
                </span>
              )}
          </p>
        </div>
        <div className="volumes">
          {item.volume.map(
            (
              e: any,
              i: any
            ) => (
              <div
                className="volume-child"
                key={i}>
                {e}
              </div>
            )
          )}
        </div>
        <div className="button-buy">
          <button
            className="btn btn-add-cart"
            onClick={(e) =>
              e.preventDefault()
            }>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
