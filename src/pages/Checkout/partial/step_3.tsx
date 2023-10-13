import { IoChevronDownOutline } from 'react-icons/io5';
import './step_3.scss';
import CompletedTick from '../../../assets/icons/completed-tick.png';

export default function Step_3({
  setStep
}: {
  amountProduct: any;
  dataCart: any;
  windowWidth: number;
  setStep?: any;
}) {
  return (
    <div className="cart-content step_3-container">
      <div className="header-content">
        <p className="title">
          Your Order
          <span className="paid">
            <img
              src={
                CompletedTick
              }
              className="ticked"
            />
            Paid
          </span>
        </p>
      </div>
      <div className="container-cart-complete">
        <div className="item-wrapper">
          <span className="img-product">
            <img
              src={
                'src/assets/images/products/bestSell.png'
              }
            />
          </span>
          <div className="content-cart">
            <div className="product">
              <div className="data-product">
                <p className="product-name">
                  1x Khalifa
                  Kush (AAAA)
                </p>
                <div className="amount">
                  <span className="amount-text">
                    2x
                    <span className="amount-per-product">
                      $120.00
                    </span>
                  </span>
                  <span className="total-amount">
                    $240.00
                  </span>
                </div>
              </div>

              <div className="data-product">
                <p className="product-name">
                  Add Integra
                  Pack - 4g
                </p>
                <div className="amount">
                  <span className="amount-text">
                    1x
                    <span className="amount-per-product">
                      $2.00
                    </span>
                  </span>
                  <span className="total-amount">
                    $2.00
                  </span>
                </div>
              </div>

              <div className="sub-total">
                <span className="sub-total-text">
                  Subtotal
                </span>
                <span className="sub-total-price">
                  $245.00
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="item-wrapper">
          <span className="img-product">
            <img
              src={
                'src/assets/images/products/bestSell.png'
              }
            />
          </span>
          <div className="content-cart">
            <div className="product">
              <div className="data-product">
                <p className="product-name">
                  1x Jungle
                  Diamond
                  (AA+)
                </p>
                <div className="amount">
                  <span className="amount-text">
                    1x
                    <span className="amount-per-product">
                      $200.00
                    </span>
                  </span>
                  <span className="total-amount">
                    $200.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="item-wrapper">
          <span className="img-product">
            <img
              src={
                'src/assets/images/products/bestSell.png'
              }
            />
          </span>
          <div className="content-cart">
            <div className="product">
              <div className="data-product">
                <p className="product-name">
                  Shipwreck
                  Edibles
                  Gummy
                </p>
                <div className="amount">
                  <span className="amount-text">
                    5x
                    <span className="amount-per-product">
                      $13.00
                    </span>
                  </span>
                  <span className="total-amount">
                    $52.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
