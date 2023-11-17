import { IoChevronDownOutline } from 'react-icons/io5';
import './step_2.scss';
import { useState } from 'react';
import tinh from 'hanhchinhvn/dist/tinh_tp.json';

export default function Step_2({
  setStep
}: {
  amountProduct: any;
  dataCart: any;
  windowWidth: number;
  setStep?: any;
}) {
  const countries = [
    {
      name: 'vietnam',
      fullname: 'Việt Nam'
    },
    {
      name: 'america',
      fullname: 'Mỹ'
    },
    {
      name: 'france',
      fullname: 'Pháp'
    },
    {
      name: 'thailand',
      fullname: 'Thái Lan'
    },
    {
      name: 'laos',
      fullname: 'Lào'
    },
    {
      name: 'singapore',
      fullname: 'Singapore'
    },
    {
      name: 'india',
      fullname: 'Ấn Độ'
    }
  ];

  const t = Object.values(
    tinh
  ).sort((a, b) =>
    a < b ? -1 : a < b ? 1 : 0
  );

  const [
    showSelectCountry,
    setShowSelectCountry
  ] = useState(false);

  const [
    showProvince,
    setShowProvince
  ] = useState(false);

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
              onChange={(
                e
              ) => {
                // console.log('kiennn')
              }}
              defaultValue="Hehe"
            />
          </div>
          <div className="last-name title-input">
            <p className="text-first-name text-name">
              Last name *
            </p>
            <input
              className="first-name input-text"
              onChange={(
                e
              ) => {
                // console.log('kiennn')
              }}
              defaultValue="Alola"
            />
          </div>
        </div>
        <div
          className={`group-name`}>
          <div
            className={`country-region title-input ${
              showSelectCountry
                ? 'active'
                : ''
            }`}
            onClick={() =>
              setShowSelectCountry(
                (prev) =>
                  !prev
              )
            }>
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
          <div className="list-data-country">
            <div className="list-data">
              {countries.map(
                (e) => (
                  <div
                    className="name-countries"
                    key={
                      e.name
                    }>
                    {
                      e.fullname
                    }
                  </div>
                )
              )}
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
              onChange={(
                e
              ) => {
                // console.log('kiennn')
              }}
              defaultValue={
                '3B 13OI'
              }
            />
            <input
              className="first-name input-text input-2"
              onChange={(
                e
              ) => {
                // console.log('kiennn')
              }}
              defaultValue={
                'Apartment'
              }
            />
          </div>
        </div>
        <div className="group-name">
          <div className="city-province title-input">
            <p className="text-first-name text-name">
              Town / City *
            </p>
            <input
              className="first-name input-text"
              onChange={(
                e
              ) => {
                // console.log('kiennn')
              }}
              defaultValue={
                'New York'
              }
            />
          </div>
          <div className="city-province title-input">
            <p className="text-first-name text-name">
              Province *
            </p>
            <div
              className={`dropdown-select-country province input-text ${
                showProvince
                  ? 'active'
                  : ''
              }`}
              onClick={() =>
                setShowProvince(
                  (prev) =>
                    !prev
                )
              }>
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
            <div className="list-province">
              <div className="list-data">
                {t.map(
                  (e) => (
                    <div
                      className="name-province"
                      key={
                        e.slug
                      }>
                      {e.name}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="city-province title-input">
            <p className="text-first-name text-name">
              Postcode / ZIP *
            </p>
            <input
              className="first-name input-text"
              onChange={(
                e
              ) => {}}
              defaultValue={
                '21945'
              }
            />
          </div>
        </div>
        <div className="group-name first-group">
          <div className="first-name title-input">
            <p className="text-first-name text-name">
              Phone (optional)
            </p>
            <input
              className="first-name input-text"
              onChange={(
                e
              ) => {
                // console.log('kiennn')
              }}
              defaultValue="+1 23482385025"
            />
          </div>
          <div className="last-name title-input">
            <p className="text-first-name text-name">
              Email address *
            </p>
            <input
              className="first-name input-text"
              onChange={(
                e
              ) => {
                // console.log('kiennn')
              }}
              defaultValue="johndoe@example.com"
            />
          </div>
        </div>

        <div className="difference-address">
          <label
            className="checkbox-flex"
            htmlFor="checkbox">
            <input
              type="checkbox"
              onChange={(
                e
              ) => {
                // console.log('kiennn')
              }}
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
                  onChange={(
                    e
                  ) => {
                    // console.log('kiennn')
                  }}
                  defaultValue="Hehe"
                />
              </div>
              <div className="last-name title-input">
                <p className="text-first-name text-name">
                  Last name *
                </p>
                <input
                  className="first-name input-text"
                  onChange={(
                    e
                  ) => {
                    // console.log('kiennn')
                  }}
                  defaultValue="Alola"
                />
              </div>
            </div>
            <div className="group-name">
              <div className="city-province title-input">
                <p className="text-first-name text-name">
                  Country /
                  Region *
                </p>
                <div
                  className={`dropdown-select-country input-text ${
                    showSelectCountry
                      ? 'active'
                      : ''
                  }`}
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    setShowSelectCountry(
                      (
                        prev
                      ) =>
                        !prev
                    )
                  }>
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
                <div className="list-data-country">
                  <div className="list-data">
                    {countries.map(
                      (e) => (
                        <div
                          className="name-countries"
                          key={
                            e.name
                          }>
                          {
                            e.fullname
                          }
                        </div>
                      )
                    )}
                  </div>
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
                  onChange={(
                    e
                  ) => {
                    // console.log('kiennn')
                  }}
                  defaultValue={
                    '3B 13OI'
                  }
                />
                <input
                  className="first-name input-text input-2"
                  onChange={(
                    e
                  ) => {
                    // console.log('kiennn')
                  }}
                  defaultValue={
                    'Apartment'
                  }
                />
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
                  defaultValue={
                    'New York'
                  }/>
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
                  defaultValue={
                    '21945'
                  }/>
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
                  onChange={(
                    e
                  ) => {
                    // console.log('kiennn')
                  }}
                  defaultValue={
                    'New York'
                  }
                />
              </div>
              <div className="city-province title-input">
                <p className="text-first-name text-name">
                  Province *
                </p>

                <div
                  className={`dropdown-select-country province input-text ${
                    showProvince
                      ? 'active'
                      : ''
                  }`}
                  onClick={() =>
                    setShowProvince(
                      (
                        prev
                      ) =>
                        !prev
                    )
                  }>
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
                <div className="list-province">
                  <div className="list-data">
                    {t.map(
                      (e) => (
                        <div
                          className="name-province"
                          key={
                            e.slug
                          }>
                          {
                            e.name
                          }
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="city-province title-input">
                <p className="text-first-name text-name">
                  Postcode /
                  ZIP *
                </p>
                <input
                  className="first-name input-text"
                  defaultValue={
                    '21945'
                  }
                />
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
