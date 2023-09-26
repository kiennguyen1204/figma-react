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
      to: '',
      dropdown: [
        {
          name: 'Strains',
          to: ''
        },
        {
          name: 'Edibles',
          to: ''
        },
        {
          name: 'Concentrates',
          to: ''
        }
      ]
    },
    {
      name: 'Edibles',
      to: ''
    },
    {
      name: 'Concentrates',
      to: '',
      dropdown: [
        {
          name: 'Hybrid',
          to: ''
        },
        {
          name: 'Sativa',
          to: ''
        },
        {
          name: 'Indica',
          to: ''
        },
        {
          name: 'CBD',
          to: ''
        }
      ]
    },
    {
      name: 'Mushrooms',
      to: ''
    },
    {
      name: 'Promotions/Bundles',
      to: '',
      dropdown: [
        {
          name: 'Sale',
          to: ''
        },
        {
          name: 'Bundle',
          to: ''
        }
      ]
    },
    {
      name: 'Support',
      to: '',
      dropdown: [
        {
          name: 'FAQ',
          to: ''
        },
        {
          name: 'Contact',
          to: ''
        },
        {
          name: 'About',
          to: ''
        },
        {
          name: 'Privacy Policy',
          to: ''
        },
        {
          name: 'Terms of Service',
          to: ''
        },
        {
          name: 'Cookie Policy',
          to: ''
        },
        {
          name: 'Cookie Settings',
          to: ''
        }
      ]
    },
    {
      name: 'Rewards',
      to: ''
    },
    { name: 'Blog', to: '' }
  ];

  const [
    position,
    setPosition
  ] = useState(0);

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

    setPosition(index);
  };

  useEffect(() =>{

    const el = document.querySelectorAll('.dropdown-menu-box.active')
    if(el && el.length > 0) {
        for(const e of el){

        }
    }
  }, [position])


  const dropdownMenuBox = (
    el: any,
    index: any
  ) => {
    return (
      <>
        <button
          type="button"
          className={`btn dropdown-menu-box ${
            position == index
              ? 'active'
              : ''
          }`}
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
