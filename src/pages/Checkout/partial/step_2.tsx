import { IoChevronDownOutline } from 'react-icons/io5';
import './step_2.scss';

export default function Step_2({
  setStep
}: {
  amountProduct: any;
  dataCart: any;
  windowWidth: number;
  setStep?: any;
}) {
  return (
    <div className="cart-content">
      <div className="header-content">
        <p className="title">
          Shipping
        </p>
      </div>
      <div className="info-shipping">
        <div className="group-name first-group">
          <div className="first-name title-input">
            <p className="text-first-name text-name">
              First name *
            </p>
            <input
              className="first-name input-text"
              value="Hehe"></input>
          </div>
          <div className="last-name title-input">
            <p className="text-first-name text-name">
              Last name *
            </p>
            <input
              className="first-name input-text"
              value="Alola"></input>
          </div>
        </div>
        <div className="group-name">
          <div className="country-region title-input">
            <p className="text-first-name text-name">
              Country / Region
              *
            </p>
            <div className="dropdown-select-country input-text">
              <span className="country">
                Vietnam
              </span>
              <IoChevronDownOutline
                size={18}
                color={
                  'var(--color-neutral-mid)'
                }
              />
            </div>
          </div>
        </div>
        <div className="group-name">
          <div className="city-province title-input">
            <p className="text-first-name text-name">
              Country / Region
              *
            </p>
            <input
              className="first-name input-text"
              value={
                '3B 13OI'
              }></input>
            <input
              className="first-name input-text input-2"
              value={
                'Apartment'
              }></input>
          </div>
        </div>
        <div className="group-name">
          <div className="city-province title-input">
            <p className="text-first-name text-name">
              Town / City *
            </p>
            <input
              className="first-name input-text"
              value={
                'New York'
              }></input>
          </div>
          <div className="city-province title-input">
            <p className="text-first-name text-name">
              Province *
            </p>
            <div className="dropdown-select-country input-text">
              <span className="country">
                Ho Chi Minh
                City
              </span>
              <IoChevronDownOutline
                size={18}
                color={
                  'var(--color-neutral-mid)'
                }
              />
            </div>
          </div>
          <div className="city-province title-input">
            <p className="text-first-name text-name">
              Postcode / ZIP *
            </p>
            <input
              className="first-name input-text"
              value={
                '21945'
              }></input>
          </div>
        </div>
        {/* <div className="group-name">
          <div className="city-province title-input">
            <p className="text-first-name text-name">
              Province *
            </p>
            <div className="dropdown-select-country input-text">
              <span className="country">
                Ho Chi Minh
                City
              </span>
              <IoChevronDownOutline
                size={18}
                color={
                  'var(--color-neutral-mid)'
                }
              />
            </div>
          </div>
        </div>
        <div className="group-name">
          <div className="city-province title-input">
            <p className="text-first-name text-name">
              Postcode / ZIP *
            </p>
            <input
              className="first-name input-text"
              value={
                '21945'
              }></input>
          </div>
        </div> */}
        <div className="group-name first-group">
          <div className="first-name title-input">
            <p className="text-first-name text-name">
              Phone (optional)
            </p>
            <input
              className="first-name input-text"
              value="+1 23482385025"></input>
          </div>
          <div className="last-name title-input">
            <p className="text-first-name text-name">
              Email address *
            </p>
            <input
              className="first-name input-text"
              value="johndoe@example.com"></input>
          </div>
        </div>

        <div className="difference-address">
          <label
            className="checkbox-flex"
            htmlFor="checkbox">
            <input
              type="checkbox"
              hidden
              id="checkbox"
            />
            <span className="checkbox-address"></span>
            <span className="text-check">
              Ship to a
              different
              Address?
            </span>
          </label>

          <div className="info-differ">
            <div className="group-name first-group">
              <div className="first-name title-input">
                <p className="text-first-name text-name">
                  First name *
                </p>
                <input
                  className="first-name input-text"
                  value="Hehe"></input>
              </div>
              <div className="last-name title-input">
                <p className="text-first-name text-name">
                  Last name *
                </p>
                <input
                  className="first-name input-text"
                  value="Alola"></input>
              </div>
            </div>
            <div className="group-name">
              <div className="city-province title-input">
                <p className="text-first-name text-name">
                  Country /
                  Region *
                </p>
                <div className="dropdown-select-country input-text">
                  <span className="country">
                    Vietnam
                  </span>
                  <IoChevronDownOutline
                    size={18}
                    color={
                      'var(--color-neutral-mid)'
                    }
                  />
                </div>
              </div>
            </div>
            <div className="group-name">
              <div className="city-province title-input">
                <p className="text-first-name text-name">
                  Country /
                  Region *
                </p>
                <input
                  className="first-name input-text"
                  value={
                    '3B 13OI'
                  }></input>
                <input
                  className="first-name input-text input-2"
                  value={
                    'Apartment'
                  }></input>
              </div>
            </div>
            {/* <div className="group-name">
              <div className="city-province title-input">
                <p className="text-first-name text-name">
                  Town / City
                  *
                </p>
                <input
                  className="first-name input-text"
                  value={
                    'New York'
                  }></input>
              </div>
            </div>
            <div className="group-name">
              <div className="city-province title-input">
                <p className="text-first-name text-name">
                  Province *
                </p>
                <div className="dropdown-select-country input-text">
                  <span className="country">
                    Ho Chi
                    Minh City
                  </span>
                  <IoChevronDownOutline
                    size={18}
                    color={
                      'var(--color-neutral-mid)'
                    }
                  />
                </div>
              </div>
            </div>
            <div className="group-name">
              <div className="city-province title-input">
                <p className="text-first-name text-name">
                  Postcode /
                  ZIP *
                </p>
                <input
                  className="first-name input-text"
                  value={
                    '21945'
                  }></input>
              </div>
            </div> */}
            <div className="group-name">
              <div className="city-province title-input">
                <p className="text-first-name text-name">
                  Town / City
                  *
                </p>
                <input
                  className="first-name input-text"
                  value={
                    'New York'
                  }></input>
              </div>
              <div className="city-province title-input">
                <p className="text-first-name text-name">
                  Province *
                </p>
                <div className="dropdown-select-country input-text">
                  <span className="country">
                    Ho Chi
                    Minh City
                  </span>
                  <IoChevronDownOutline
                    size={18}
                    color={
                      'var(--color-neutral-mid)'
                    }
                  />
                </div>
              </div>
              <div className="city-province title-input">
                <p className="text-first-name text-name">
                  Postcode /
                  ZIP *
                </p>
                <input
                  className="first-name input-text"
                  value={
                    '21945'
                  }></input>
              </div>
            </div>
            <div className="group-name first-group">
              <div className="first-name title-input text-area">
                <p className="text-first-name text-name">
                  Order Notes
                  (optional)
                </p>
                <textarea
                  className="input-text"
                  rows={5}
                  placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
              </div>
            </div>

            <div className="info-contact">
              <p className="text-contact">
                What would you
                like us to do
                if an Item is
                out os Stock?
              </p>
              <div className="contact-me input-text">
                <span className="">
                  Contact me
                  (With delay)
                </span>
                <IoChevronDownOutline
                  size={18}
                  color={
                    'var(--color-neutral-mid)'
                  }
                />
              </div>
              <div className="hear-about">
                <p className="text-hear-about">
                  Where did
                  you hear
                  About Us?
                </p>
                <textarea
                  rows={5}
                  className="text-area input-text"
                  placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
