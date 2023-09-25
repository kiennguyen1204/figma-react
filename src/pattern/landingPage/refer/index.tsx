import './index.scss';
import ReferFriendSVG from '../../../assets/images/ReferFriend.svg?react';
import RegisterIcon from '../../../assets/images/register.svg?react';
import ShopIcon from '../../../assets/images/shop.svg?react';
import WalletIcon from '../../../assets/images/wallet.svg?react';
import RelaxIcon from '../../../assets/images/relax.svg?react';

export default function ReferFriend() {
  const dataBottom = [
    {
      title: 'REGISTER',
      icon: <RegisterIcon />,
      description: `Sign up for an account with us. This is quick and simple. We don’t require any more details from you than the bare minimum needed for you to place an order and get your product delivered.`
    },
    {
      title: 'SHOP',
      icon: <ShopIcon />,
      description: `Decide on what you want to purchase. We stock a wide range of edibles,flowers , concentrates and mushrooms there is bound to be something for everyone.`
    },
    {
      title: 'MAKE PAYMENT',
      icon: <WalletIcon />,
      description: `Pay securely. Our site boasts sturdy protection certificates to keep your card details and related data safe.`
    },
    {
      title: 'RELAX',
      icon: <RelaxIcon />,
      description: `Your product will be packaged discretely and shipped by Canada Post Xpresspost. We will provide you with a tracking number so then you can follow your mail order marijuana every step of the way.`
    }
  ];
  return (
    <>
      <div className="referbox-container">
        <div className="cardbox-container">
          <div className="cardBox">
            <div className="card-box-element">
              <div className="svg">
                <ReferFriendSVG />
              </div>
              <div className="card-wrapper">
                <p className="title">
                  REFER A
                  FRIENDS
                </p>
                <p className="get">
                  And get
                  <span className="percent">
                    30%
                  </span>
                </p>
                <button className="btn btn-action custom-button">
                  Refer Here
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="content-full-card">
          <h3 className="title-bottom">
            HOW TO ORDER WEED
            ONLINE FROM TOP
            SHELF BC - MAIL
            ORDER MARIJUANA
          </h3>
          <p className="description">
            Ordering weed
            online from Top
            Shelf BC is easy.
            We are proud to
            have made the
            process accessible
            across multiple
            platforms and
            simple to
            understand,
            meaning that more
            people can come to
            us to buy their
            cannabis products
            online.
          </p>
          <div className="content-bottom">
            {dataBottom.map(
              (e, i) => (
                <div className="item-bottom">
                  <div className="top-header">
                    <div className="index-circle">
                      {i + 1}
                    </div>
                    <div className="icon">
                      {e.icon}
                    </div>
                  </div>
                  <div className="item-content">
                    <p className="title">
                      {
                        e.title
                      }
                    </p>
                    <p className="description">
                      {
                        e.description
                      }
                    </p>
                  </div>
                </div>
              )
            )}

            <button className="btn btn-action custom-button">
              Refer Here
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
