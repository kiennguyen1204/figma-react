import Input from 'components/common/Input';
import './index.css';
import Button from 'components/common/Button';
import { BUTTON_VARIANT } from 'constants/enums';

const Header = () => {
  return (
    <div className="header">
      <div className="notification d-flex justify-content-center align-items-center">
        <span className="notification-text">LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.</span>
        <span className="countdown-text countdown">23 : 15 : 00</span>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="navbar-brand d-flex align-items-center">
          <div className="navbar-logo"></div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="navbar-cart d-flex justify-content-end align-items-center">
          <div className="navbar-text">Your Account</div>
          <div className="navbar-divider"></div>
          <div className="navbar-cart-icon">
            <div className="shopping-cart"></div>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="search-bar">
        <form className="form-inline my-2 my-lg-0">
          <Input name={''} value={''} placeholder="Search" />
          <button>
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
