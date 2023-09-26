import React from 'react';
import Copy from 'assets/images/copy.svg?react';
import Facebook from 'assets/images/facebook.svg?react';
import Twitter from 'assets/images/twitter.svg?react';
import Whatsapp from 'assets/images/whatsapp.svg?react';
import AddGreen from 'assets/images/add-green.svg?react';
import './index.scss';
import Button from '../../../../components/common/Button';

export default function ReferFriend() {
  return (
    <div className="refer-container">
      <div className="refer-box">
        <p className="title">
          Referral Program
        </p>
        <p className="description">
          Absolutely love
          TopShelfBC;
          affordable on any
          budget and such fast
          delivery, straight
          to my door! I
          recommend them to
          all my friends and
          family for their 420
          needs.
        </p>
      </div>
      <div className="divider"></div>
      <div className="refer-code-box">
        <div className="refer-text">
          <p className="title">
            Your Referral URL
          </p>
          <p className="description">
            Referral code is
            available only to
            users with at
            least one order.
          </p>
        </div>
        <div className="copy-btn">
          <Copy />
        </div>
      </div>
      <div className="refer-code-box">
        <div className="refer-text">
          <p className="title">
            Your Coupon Code
            to share
          </p>
          <p className="description">
            Referral code is
            available only to
            users with at
            least one order.
          </p>
        </div>
        <div className="copy-btn">
          <Copy />
        </div>
      </div>
      <div className="divider"></div>
      <div className="social-container">
        <div className="social-box">
          <div className="logo">
            <Facebook />
          </div>
          <p className="social-text">
            Share Via Facebook
          </p>
        </div>
        <div className="social-box">
          <div className="logo twitter">
            <Twitter />
          </div>
          <p className="social-text">
            Share Via Twitter
          </p>
        </div>
        <div className="social-box">
          <div className="logo whatsapp">
            <Whatsapp />
          </div>
          <p className="social-text">
            Share Via Whatsapp
          </p>
        </div>
      </div>
      <p className="or-email-text">
        Or share via email
      </p>
      <div className="form-input-info">
        <div className="gr-input">
          <div className="item-input">
            <p className="label">
              Email
            </p>
            <input placeholder="Enter your email" />
          </div>
          <div className="item-input name">
            <div className="form-input">
              <p className="label">
                Name
              </p>
              <input placeholder="Enter your name" />
            </div>
            <div className="add-btn">
              <AddGreen />
            </div>
          </div>
        </div>
        <div className="gr-info">
          <div className="gr-info-item">
            <p>
              johndoe@example.com
            </p>
          </div>
          <div className="gr-info-item">
            <p>John Doe</p>
          </div>
        </div>
      </div>
      <a className='send-email-btn'>Send Emails</a>
    </div>
  );
}
