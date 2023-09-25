import './index.scss';
import Star from 'assets/images/star.svg?react';
import { Item } from '../../../constants/type';
import { MAX_STAR } from '../../../constants/enums';

export default function ItemCard({
  item,
  index
}: {
  item: Item;
  index: any;
}) {
  return (
    <div
      className="itemCard"
      key={index}>
      <div className="imageCard">
        {item.perPrice && (
          <p className="perPrice">{item.perPrice}</p>
        )}
        {item.isSoldOut && (
          <p className="soldOut">
            Sold Out
          </p>
        )}
        <img
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className="contentItem">
        <p className="cateItem">
          {item.category}
        </p>
        <p className="titleItem">
          {item.title}
        </p>
        <div className="starReview">
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
        <div className="discounNPrice">
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
                className="volumeChild"
                key={i}>
                {e}
              </div>
            )
          )}
        </div>
        <div className="buttonBuy">
          <button
            className="btn btnAddCart"
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
