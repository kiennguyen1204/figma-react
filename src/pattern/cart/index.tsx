import React, {
  useState
} from 'react';
import CartSvg from 'assets/images/cart.svg?react';
import XCircle from 'assets/images/x-circle.svg?react';
import './index.scss';
import { dataCart } from '../../constants/fakeData';
import Payments from '../payments';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const [
    isEmpty,
    setIsEmpty
  ] = useState(false);
  const [
    amountProduct,
    setAmountProduct
  ] = useState(0);
  const navigation = useNavigate();
  return (
    <div className="cart-container">
      <div className="header">
        <p className="title">
          Your Cart
        </p>
        <p className="amount">
          ({amountProduct})
        </p>
      </div>

      {isEmpty ? (
        <div className="empty-content">
          <div className="cart-image">
            <CartSvg />
          </div>
          <button className="btn show-product-btn">
            Show Product
          </button>
        </div>
      ) : (
        <div className="content">
          <div className="list-item-cart">
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
                      <div className="product-info">
                        <p>
                          {
                            e.name
                          }
                        </p>
                        <div className="amount-price">
                          <p className="amount">
                            {
                              e.amount
                            }
                            x
                          </p>
                          <p className="price">
                            $
                            {
                              e.price
                            }
                          </p>
                        </div>
                      </div>
                      <div className="product-total">
                        <XCircle />
                        <p className="price-total">
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
                          <div className="product-info">
                            <p className="integra">
                              {
                                pack.namePack
                              }
                            </p>
                            <div className="amount-price">
                              <p className="amount">
                                {
                                  pack.amount
                                }

                                x
                              </p>
                              <p className="price">
                                $
                                {
                                  pack.price
                                }
                              </p>
                            </div>
                          </div>
                          <div className="product-total">
                            <XCircle />
                            <p className="price-total">
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
                      <p className="title">
                        Subtotal
                      </p>
                      <p className="price-total">
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
            <div className="list-total">
              <p className="total">
                TOTAL
              </p>
              <p className="total-price">
                $
                {
                  dataCart.total
                }
              </p>
            </div>
          </div>
          <button className="btn checkout-btn" onClick={() => navigation('/checkout')}>
            Checkout
          </button>
          <div className="divider"></div>
          <Payments />
        </div>
      )}
    </div>
  );
}