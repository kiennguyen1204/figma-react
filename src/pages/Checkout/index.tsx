import React, {
  useRef,
  useState
} from 'react';
import CartSvg from 'assets/images/checkout/cart.svg?react';
import CheckoutSvg from 'assets/images/checkout/checkout.svg?react';
import OrderSvg from 'assets/images/checkout/order.svg?react';
import TickSvg from 'assets/images/checkout/tick.svg?react';
import Deli1 from 'assets/images/checkout/deli-1.svg?react';
import Deli2 from 'assets/images/checkout/deli-2.svg?react';
import Deli3 from 'assets/images/checkout/deli-3.svg?react';
import './index.scss';
import { dataCart } from '../../constants/fakeData';
import Payments from '../../pattern/payments';
export default function Checkout() {
  const steps = [
    {
      title: 'Shopping Cart',
      icon: <CartSvg />
    },
    {
      title: 'Checkout',
      icon: <CheckoutSvg />
    },
    {
      title:
        'Order Complete ',
      icon: <OrderSvg />
    }
  ];
  const [
    currentStep,
    setCurrentStep
  ] = useState(0);
  const [
    amountProduct,
    setAmountProduct
  ] = useState(3);
  const windowWidth = useRef(
    window.innerWidth
  ).current;

  return (
    <div className="checkout-container">
      <div
        className={`checkout-header ${
          windowWidth > 767 &&
          'pc-header'
        }`}>
        {steps.map((e, i) => (
          <>
            <div className="step-item">
              <div
                className={`step-icon ${
                  i ==
                  currentStep
                    ? 'active'
                    : ''
                } ${
                  i <
                  currentStep
                    ? 'complete'
                    : ''
                }`}>
                {i <
                currentStep ? (
                  <TickSvg />
                ) : (
                  e.icon
                )}
              </div>
              {windowWidth <
              767 ? (
                i ==
                  currentStep && (
                  <p className="step-title">
                    {e.title}
                  </p>
                )
              ) : (
                <p className="step-title">
                  {e.title}
                </p>
              )}
            </div>
            {i <
              steps.length -
                1 && (
              <div className="step-divider"></div>
            )}
          </>
        ))}
      </div>
      <div className="checkout-content">
        <div className="cart-content">
          <div className="header-content">
            <p className="title">
              Your Cart
            </p>
            <p className="amount">
              ({amountProduct}
              )
            </p>
          </div>
          <div className="list-cart">
            {dataCart.cart.map(
              (e) => (
                <div className="item-cart">
                  <img
                    src={
                      e.image
                    }
                    className="item-image"
                  />
                  <div className="content-item">
                    <div className="product-box">
                      <div className="title">
                        {
                          e.name
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
                      (
                        pack
                      ) => (
                        <div className="product-box">
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
                  Order by
                  10pm for
                  free next
                  day delivery
                  on Orders
                  overs $100
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
                Home delivery
                is $4.99 for
                orders under
                $100 and is
                FREE for all
                orders over
                $100
              </p>
            </div>
            <div className="delivery-content">
              <p className="title">
                Delivery
              </p>
              <div className="delivery-box">
                <div className="deli-icon">
                  <Deli1 />
                </div>
                <p className="deli-text">
                  30 days to
                  return it to
                  us for a
                  refund. We
                  have made
                  returns SO
                  EASY - you
                  can now
                  return your
                  order to a
                  store or
                  send it with
                  FedEx FOR
                  FREE
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="payments-container">
          <div className="price-group">
            <div className="price-box">
              <p className="title">
                Subtotal
              </p>
              <div className="price">
                $
                {
                  dataCart.total
                }
              </div>
            </div>
            <div className="price-box">
              <p className="title">
                Discount
              </p>
              <div className="price">
                $
                {
                  dataCart.discount
                }
              </div>
            </div>
            <div className="price-box">
              <p className="title">
                Shipping Costs
              </p>
              <div className="price">
                $
                {
                  dataCart.shipping
                }
              </div>
            </div>
          </div>
          <div className="coupon-group">
            <div className="coupon-input">
              <input placeholder="Coupon Code" />
            </div>
            <button className="btn coupon-btn">
              Apply Coupon
            </button>
          </div>
          <div className="free-ship">
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: '70%'
                }}></div>
            </div>
            <div className="text-group">
              <p>
                Get Free
                <span>
                  {' '}
                  Shipping{' '}
                </span>
                for orders
                over
                <span className="costs">
                  {' '}
                  $100
                </span>
              </p>
              <a>
                Continue
                Shopping
              </a>
            </div>
          </div>
          <button className="btn checkout-btn">
            <p>Checkout</p>
            <div className="divider"></div>
            <p>
              $
              {
                dataCart.payTotal
              }
            </p>
          </button>
          <div className="divider"></div>
          <Payments />
        </div>
      </div>
    </div>
  );
}
