import { Link } from 'react-router-dom';
import Logo from 'assets/images/footer_logo.svg';

import Mastercard from 'assets/images/mastercard.svg';
import Visa from 'assets/images/visa.svg';
import Bitcoin from 'assets/images/bitcoin.svg';
import Interac from 'assets/images/interac.svg';

import './index.scss';

type LinkTypes = {
  to: string;
  name: string;
};

export const FooterPattern =
  () => {
    const quickLink = [
      {
        name: 'Track Your Order',
        to: '/home'
      },
      {
        name: 'Shop All',
        to: '/home'
      },
      {
        name: 'Flower',
        to: '/home'
      },
      {
        name: 'Edibles',
        to: '/home'
      },
      {
        name: 'Concentrates',
        to: '/home'
      },
      {
        name: 'Refunds',
        to: '/home'
      },
      {
        name: 'Mushrooms',
        to: '/home'
      },
      {
        name: 'Promotions / Bundles',
        to: '/home'
      },
      {
        name: 'Promotions / Bundles',
        to: '/home'
      },
      {
        name: 'Support',
        to: '/home'
      },
      {
        name: 'Reward',
        to: '/home'
      },
      {
        name: 'Blog',
        to: '/home'
      },
      {
        name: 'Shipping Faq',
        to: '/home'
      }
    ];

    const moreLink = [
      {
        name: 'Buy weed online in Canada',
        to: '/'
      },
      {
        name: 'Buy weed online in New Brunswick',
        to: '/'
      },
      {
        name: 'Buy weed online in Prince Edward Island',
        to: '/'
      },
      {
        name: 'Buy weed online in Northwest Territories',
        to: '/'
      },
      {
        name: 'Buy weed online in Saskatchewan',
        to: '/'
      },
      {
        name: 'Buy weed online in Manitoba',
        to: '/'
      },
      {
        name: 'Buy weed online in Quitebec',
        to: '/'
      },
      {
        name: 'Buy weed online in British Columbia',
        to: '/'
      },
      {
        name: 'Buy weed online in Ontario',
        to: '/'
      },
      {
        name: 'Buy weed online in Alberta',
        to: '/'
      }
    ];

    const paymentMethod = [
      {
        name: 'mastercard',
        image: Mastercard
      },
      {
        name: 'visa',
        image: Visa
      },
      {
        name: 'bitcoin',
        image: Bitcoin
      },
      {
        name: 'interac',
        image: Interac
      }
    ];

    return (
      <div className="footer-insider-container">
        <div className="footer-insider-box">
          <div className="footer-top">
            <div className="footer-logo">
              <h3 className="footer-title">
                <Link to="/home">
                  <img
                    src={Logo}
                    className="footer-logo"
                    alt="logo"
                  />
                </Link>
              </h3>

              <p className="footer-description">
                #1 Canadian
                top rated
                online
                dispensary
                that meets the
                customers
                needs in every
                single medical
                marijuana
                aspect. The
                team here at
                TopShelfBC is
                heavily
                involved in
                the Canadian
                cannabis
                industry for
                over 15 years.
                We strive to
                provide the
                top quality
                products,
                service and
                care at the
                lowest prices
                you’ll ever
                find.
              </p>
            </div>
          </div>

          <div className="footer-content">
            <div className="footer-content-item">
              <h3 className="footer-title">
                QUICK LINK
              </h3>
              <ul className="list-group list-unstyled">
                {quickLink.map(
                  (
                    el: any,
                    index: number
                  ) => (
                    <li
                      className="list-group-item"
                      key={
                        'quickLink__' +
                        index
                      }>
                      <Link
                        to={
                          el.to
                        }
                        className="footer-link">
                        {
                          el.name
                        }
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="footer-content-item">
              <h3 className="footer-title">
                CONTACT US
              </h3>
              <ul className="list-group list-unstyled">
                <li className="list-group-item">
                  <a
                    href="mailto:info@topshelfbc.cc"
                    className="footer-link">
                    info@topshelfbc.cc
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-content-item">
              <h3 className="footer-title">
                MORE
              </h3>
              <ul className="list-group list-unstyled">
                {moreLink.map(
                  (
                    el: LinkTypes,
                    index: number
                  ) => (
                    <li
                      className="list-group-item"
                      key={
                        index
                      }>
                      <Link
                        to={
                          el.to
                        }
                        className="footer-link">
                        {
                          el.name
                        }
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="footer-content-item payment-method">
              <ul className="list-group list-unstyled">
                {paymentMethod.map(
                  (
                    el: {
                      image: string;
                      name: string;
                    },
                    index: number
                  ) => (
                    <li
                      className="list-group-item"
                      key={
                        index
                      }>
                      <img
                        decoding="async"
                        loading="lazy"
                        src={
                          el.image
                        }
                        alt={
                          el.name
                        }
                      />
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        <hr className="spacing-line" />

        <div className="copyright">
          <div className="list-list-group-copyright list-unstyled">
            <div className="group-item">
              <ul className="group-item-inner list-unstyled">
                <li className="inner-item">
                  <Link
                    to="/home"
                    className="inner-item-link">
                    Out Of
                    Stock
                  </Link>
                </li>
                <li className="inner-item">
                  <Link
                    to="/home"
                    className="inner-item-link">
                    Privacy
                    Policy
                  </Link>
                </li>
                <li className="inner-item">
                  <Link
                    to="/home"
                    className="inner-item-link">
                    Terms &
                    Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="group-item">
              <span className="copyright-text">
                © 2022 Top
                Shelf BC. All
                Rights
                Reserved.{' '}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };
