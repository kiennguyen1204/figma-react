import React from 'react'
import MasterCard from 'assets/images/payments/master-card.svg?react';
import Visa from 'assets/images/payments/visa.svg?react';
import Bitcoin from 'assets/images/payments/bitcoin.svg?react';
import Interact from 'assets/images/payments/interact.svg?react';
import './index.scss'

export default function Payments() {
  return (
    <div className="payments">
            <p className="title-payments">
              SECURE PAYMENTS
              PROVIDED BY
            </p>
            <div className="list-payments">
              <div className="item-payment">
                <MasterCard />
              </div>
              <div className="item-payment">
                <Visa />
              </div>
              <div className="item-payment">
                <Bitcoin />
              </div>
              <div className="item-payment">
                <Interact />
              </div>
            </div>
          </div>
  )
}
