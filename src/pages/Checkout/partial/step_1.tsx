import '../index.scss';

import Deli1 from 'assets/images/checkout/deli-1.svg?react';
import Deli2 from 'assets/images/checkout/deli-2.svg?react';


export default function Step_1({
  amountProduct,
  dataCart,
  windowWidth,
  setStep
}: {
  amountProduct: any;
  dataCart: any;
  windowWidth: number;
  setStep?: any
}) {
  return (
    <div className="cart-content">
      <div className="header-content">
        <p className="title">
          Your Cart
        </p>
        <p className="amount">
          ({amountProduct})
        </p>
      </div>
      <div className="list-cart">
        {dataCart.cart.map(
          (e: any, i:number) => (
            <div className="item-cart" key={i}>
              <img
                src={e.image}
                className="item-image"
              />
              <div className="content-item">
                <div className="product-box">
                  <div className="title">
                    {e.name}
                  </div>
                  <div className="product-value">
                    <div className="amount-price">
                      <div className="amount">
                        <button className="amount-btn">
                          -
                        </button>
                        <p>
                          {
                            e.amount
                          }
                        </p>
                        <button className="amount-btn">
                          +
                        </button>
                      </div>
                      <p className="price">
                        $
                        {
                          e.price
                        }
                      </p>
                    </div>
                    {windowWidth <=
                      767 && (
                      <p className="total total-pc">
                        $
                        {
                          e.total
                        }
                      </p>
                    )}
                  </div>
                  {windowWidth >
                    767 && (
                    <p className="total">
                      $
                      {
                        e.total
                      }
                    </p>
                  )}
                </div>
                {e.integra.map(
                  (pack: any, j:number) => (
                    <div className="product-box" key={j}>
                      <div className="title">
                        {
                          pack.namePack
                        }
                      </div>
                      <div className="product-value">
                        <div className="amount-price">
                          <div className="amount">
                            <button className="amount-btn">
                              -
                            </button>
                            <p>
                              {
                                pack.amount
                              }
                            </p>
                            <button className="amount-btn">
                              +
                            </button>
                          </div>
                          <p className="price">
                            $
                            {
                              pack.price
                            }
                          </p>
                        </div>
                        {windowWidth <=
                          767 && (
                          <p className="total total-pc">
                            $
                            {
                              pack.total
                            }
                          </p>
                        )}
                      </div>
                      {windowWidth >
                        767 && (
                        <p className="total">
                          $
                          {
                            pack.total
                          }
                        </p>
                      )}
                    </div>
                  )
                )}
                <div className="subtotal">
                  <p className="sub-title">
                    Subtotal
                  </p>
                  <p className="subtotal-price">
                    $
                    {
                      e.subTotal
                    }
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="delivery-container">
        <div className="delivery-content">
          <p className="title">
            Delivery
          </p>
          <div className="delivery-box">
            <div className="deli-icon">
              <Deli1 />
            </div>
            <p className="deli-bold">
              Order by 10pm
              for free next
              day delivery on
              Orders overs
              $100
            </p>
            <p className="deli-text">
              We deliver
              Monday to
              Saturday -
              excluding
              Holidays
            </p>
          </div>
        </div>
        <div className="delivery-content">
          {windowWidth >
            767 && (
            <p className="title"></p>
          )}
          <div className="delivery-box">
            <div className="deli-icon">
              <Deli2 />
            </div>
            <p className="deli-bold">
              Free next day
              delivery to
              stores.
            </p>
            <p className="deli-text">
              Home delivery is
              $4.99 for orders
              under $100 and
              is FREE for all
              orders over $100
            </p>
          </div>
        </div>
        <div className="delivery-content">
          <p className="title">
            Free Returns
          </p>
          <div className="delivery-box">
            <div className="deli-icon">
              <Deli1 />
            </div>
            <p className="deli-text">
              30 days to
              return it to us
              for a refund. We
              have made
              returns SO EASY
              - you can now
              return your
              order to a store
              or send it with
              FedEx FOR FREE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
