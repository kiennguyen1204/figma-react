import { Link } from 'react-router-dom';
import './style.css';
import Logo from '..//..//assets/images/Logo.png';
import DrawerComponent from '../../components/common/Drawer';
import {
  useRef,
  useState
} from 'react';
import Cart from '../cart';

export const MiddleNavbar = ({
  onClick
}: {
  onClick: () => void;
}) => {
  const [openCart, setOpenCart] =
    useState(false);
  const windowWidth = useRef(
    window.innerWidth
  ).current;

  return (
    <div className="navbar-container">
      <div className="navbar-box">
        <div className="navbar-brand">
          <button
            className="btn menu-button-hamburger"
            onClick={onClick}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 7H21"
                stroke="#062A09"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 12H21"
                stroke="#062A09"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 17H21"
                stroke="#062A09"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <Link to="/home">
            <img
              src={Logo}
              className="navbarLogo"
              alt="logo"
            />
          </Link>
        </div>

        <div className="navbar-search-box">
          <div className="form-group">
            <div className="floating-form">
              <input
                type="search"
                className="form-control floating-custom-control"
                placeholder="Search..."
              />
              <button className="btn search-button">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5 16.5L15 15"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="navbar-box-end">
          <div className="navbar-group-info">
            <div className="navbar-item">
              <Link
                to="/"
                className="item-link">
                <span className="text">
                  Your account
                </span>
                <span className="icon">
                  <i className="bi bi-person-fill"></i>
                </span>
              </Link>
            </div>
            <div className="navbar-item">
              <button className="btn cart-button" onClick={() => setOpenCart(true)}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.5 7.66952V6.69952C7.5 4.44952 9.31 2.23952 11.56 2.02952C14.24 1.76952 16.5 3.87952 16.5 6.50952V7.88952"
                    stroke="#46494F"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.99983 22H14.9998C19.0198 22 19.7398 20.39 19.9498 18.43L20.6998 12.43C20.9698 9.99 20.2698 8 15.9998 8H7.99983C3.72983 8 3.02983 9.99 3.29983 12.43L4.04983 18.43C4.25983 20.39 4.97983 22 8.99983 22Z"
                    stroke="#46494F"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.4955 12H15.5045"
                    stroke="#46494F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.49451 12H8.50349"
                    stroke="#46494F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <span className="product-quality">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
      <DrawerComponent
        open={openCart}
        setOpen={setOpenCart}
        size={
          windowWidth > 767
            ? 'sm'
            : 'full'
        }
        placement={
          windowWidth > 767
            ? 'right'
            : 'bottom'
        }
        isMobile={windowWidth < 767}
      >
        <Cart />
      </DrawerComponent>
    </div>
  );
};
