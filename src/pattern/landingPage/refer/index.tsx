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
      <div className="referBoxContainer">
        <div className="cardBoxContainer">
          <div className="cardBox">
            <div className="cardBoxElement">
              <div className="svg">
                <ReferFriendSVG />
              </div>
              <div className="cardWrapper">
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
                <button className="btn btnAction customButton">
                  Refer Here
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="contentFullCard">
          <h3 className="titleBottom">
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
          <div className="contentBottom">
            {dataBottom.map(
              (e, i) => (
                <div className="itemBottom">
                  <div className="topHeader">
                    <div className="indexCircle">
                      {i + 1}
                    </div>
                    <div className="icon">
                      {e.icon}
                    </div>
                  </div>
                  <div className="itemContent">
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

            <button className="btn btnAction customButton">
              Refer Here
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
