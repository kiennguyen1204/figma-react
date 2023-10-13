import React, {
  useEffect,
  useRef,
  useState
} from 'react';
import CartSvg from 'assets/images/checkout/cart.svg?react';
import CheckoutSvg from 'assets/images/checkout/checkout.svg?react';
import OrderSvg from 'assets/images/checkout/order.svg?react';
import TickSvg from 'assets/images/checkout/tick.svg?react';
import Deli3 from 'assets/images/checkout/deli-3.svg?react';
import './index.scss';
import { dataCart } from '../../constants/fakeData';
import Payments from '../../pattern/payments';
import { STEPS_CART } from '../../constants/enums';
import Step_1 from './partial/step_1';
import Step_2 from './partial/step_2';
import Step_3 from './partial/step_3';
export default function Checkout() {
  const steps = [
    {
      title: 'Shopping Cart',
      icon: <CartSvg />,
      id: STEPS_CART.SHOPPING_CART
    },
    {
      title: 'Checkout',
      icon: <CheckoutSvg />,
      id: STEPS_CART.CHECKOUT
    },
    {
      title:
        'Order Complete ',
      icon: <OrderSvg />,
      id: STEPS_CART.ORDER_COMPLETE
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

  const [step, setStep] =
    useState(steps[0]);

  return (
    <div className="checkout-container">
      <div
        className={`checkout-header ${
          windowWidth > 767 &&
          'pc-header'
        }`}>
        {steps.map((e, i) => (
          <>
            <div
              className="step-item pe-auto"
              key={i}
              onClick={() => {
                setStep(e);
                setCurrentStep(
                  i
                );
              }}>
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
        {step.id ==
          STEPS_CART.SHOPPING_CART && (
          <Step_1
            // setStep={}
            windowWidth={
              windowWidth
            }
            amountProduct={
              amountProduct
            }
            dataCart={
              dataCart
            }
          />
        )}
        {step.id ==
          STEPS_CART.CHECKOUT && (
          <Step_2
            dataCart={
              dataCart
            }
            amountProduct={
              amountProduct
            }
            windowWidth={
              windowWidth
            }
          />
        )}
        {step.id ==
          STEPS_CART.ORDER_COMPLETE && (
          <Step_3
            amountProduct={
              amountProduct
            }
            dataCart={
              dataCart
            }
            windowWidth={
              windowWidth
            }
          />
        )}
        {step.id !=
          STEPS_CART.ORDER_COMPLETE && (
          <>
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
                    Shipping
                    Costs
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
                      width:
                        '70%'
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
                <p>
                  Checkout
                </p>
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
          </>
        )}
      </div>
    </div>
  );
}
