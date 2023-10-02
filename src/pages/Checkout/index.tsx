import React, {
  useRef,
  useState
} from 'react';
import CartSvg from 'assets/images/checkout/cart.svg?react';
import CheckoutSvg from 'assets/images/checkout/checkout.svg?react';
import OrderSvg from 'assets/images/checkout/order.svg?react';
import TickSvg from 'assets/images/checkout/tick.svg?react';
import XCircle from 'assets/images/x-circle.svg?react';
import './index.scss';
import { dataCart } from '../../constants/fakeData';
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
                        <p className="total">
                          $
                          {
                            e.total
                          }
                        </p>
                      </div>
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
                        <p className="total">
                          $
                          {
                            pack.total
                          }
                        </p>
                      </div>
                    </div>
                      )
                    )}
                    <div className="subtotal">
                      <p className='sub-title'>Subtotal</p>
                      <p className='subtotal-price'>${e.subTotal}</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
