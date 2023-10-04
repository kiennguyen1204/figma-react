import {
  useEffect,
  useState
} from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { DropdownBox } from './dropdown';

export const EndNavbar = ({
  isDrawerOpen,
  isOpenDrawer
}: {
  isDrawerOpen: boolean;
  isOpenDrawer: () => void;
}) => {
  const [
    isDropdownOpen,
    setIsDropdownOpen
  ] = useState(false);
  const listItem = [
    {
      name: 'Shop All',
      to: '/about'
    },
    {
      name: 'Flower',
      to: '/cate',
      dropdown: [
        {
          name: 'Strains',
          to: '/cate'
        },
        {
          name: 'Edibles',
          to: '/cate'
        },
        {
          name: 'Concentrates',
          to: '/cate'
        }
      ]
    },
    {
      name: 'Edibles',
      to: '/cate'
    },
    {
      name: 'Concentrates',
      to: '/cate',
      dropdown: [
        {
          name: 'Hybrid',
          to: '/cate'
        },
        {
          name: 'Sativa',
          to: '/cate'
        },
        {
          name: 'Indica',
          to: '/cate'
        },
        {
          name: 'CBD',
          to: '/cate'
        }
      ]
    },
    {
      name: 'Mushrooms',
      to: '/cate'
    },
    {
      name: 'Promotions/Bundles',
      to: '/cate',
      dropdown: [
        {
          name: 'Sale',
          to: '/cate'
        },
        {
          name: 'Bundle',
          to: '/cate'
        }
      ]
    },
    {
      name: 'Support',
      to: '/cate',
      dropdown: [
        {
          name: 'FAQ',
          to: '/cate'
        },
        {
          name: 'Contact',
          to: '/cate'
        },
        {
          name: 'About',
          to: '/cate'
        },
        {
          name: 'Privacy Policy',
          to: '/cate'
        },
        {
          name: 'Terms of Service',
          to: '/cate'
        },
        {
          name: 'Cookie Policy',
          to: '/cate'
        },
        {
          name: 'Cookie Settings',
          to: '/cate'
        }
      ]
    },
    {
      name: 'Rewards',
      to: '/cate'
    },
    { name: 'Blog', to: '/cate' }
  ];


  useEffect(() => {
    setIsDropdownOpen(
      isDropdownOpen
    );
  }, [isDropdownOpen]);

  const openList = (
    index: any
  ) => {
    if (
      window.innerWidth > 992
    )
      return;
    const el = document.querySelector(`.dropdown-${index}`)
    if(el){
      el.classList.toggle('active')
    }
  };

  const dropdownMenuBox = (
    el: any,
    index: any
  ) => {
    return (
      <>
        <button
          type="button"
          className={`btn dropdown-menu-box dropdown-${index}`}
          onClick={() =>
            openList(index)
          }>
          <span className="nav-link">
            {el?.name}
          </span>
          {el?.dropdown
            .length > 0 && (
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="dropdownChevron">
              <path
                d="M10.46 4.47461L7.20004 7.73461C6.81504 8.11961 6.18504 8.11961 5.80004 7.73461L2.54004 4.47461"
                stroke="#46494F"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        <DropdownBox
          children={
            el.dropdown
          }
        />
      </>
    );
  };

  return (
    <div
      className={`navbar-box-end-container ${
        isDrawerOpen
          ? 'show-drawer'
          : ''
      }`}>
      <button
        className="btn close-drawer"
        onClick={
          isOpenDrawer
        }>
        <i className="bi bi-x"></i>
      </button>

      <div className="navbar-box">
        <ul className="nav-group list-unstyled">
          {listItem.map(
            (
              el,
              index: number
            ) => (
              <li
                className="nav-item"
                key={index}>
                {!el.hasOwnProperty(
                  'dropdown'
                ) ? (
                  <Link
                    to={el.to}
                    className="nav-link">
                    {el.name}
                  </Link>
                ) : (
                  dropdownMenuBox(
                    el,
                    index
                  )
                )}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};
