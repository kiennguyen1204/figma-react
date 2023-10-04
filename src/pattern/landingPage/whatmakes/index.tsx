import CustomerServiceIcon from '../../../assets/images/customer-service.svg?react';
import SecurityIcon from '../../../assets/images/security.svg?react';
import DeliveryIcon from '../../../assets/images/delivery.svg?react';
import BestValueIcon from '../../../assets/images/diamond.svg?react';
import TrustIcon from '../../../assets/images/trust.svg?react';
import QualityIcon from '../../../assets/images/quality.svg?react';
import './index.scss'

export default function WhatMake() {


  const contentData = [
    {
      title:
        'CUSTOMER SERVICE',
      icon: (
        <CustomerServiceIcon />
      ),
      description: `Whether it is answering any questions you have before making a purchase, helping out with the buying process itself or taking your feedback under consideration, we are proud to provide high quality customer service that makes you – the customer – the most important person in the transaction.`
    },
    {
      title: 'SECURITY',
      icon: <SecurityIcon />,
      description: `When it comes to security, we only keep what details are necessary for you to have an account with us and make an order. When it comes to shipping your mail order marijuana out, we use only tamper-proof and discrete packaging so then what you’ve purchased is your business only.`
    },
    {
      title:
        'DELIVERY INSURANCE',
      icon: <DeliveryIcon />,
      description: `If your mail order marijuana becomes lost, stolen, or damaged during transit, we will send you a replacement completely free of charge. Free Canada Post Xpress shipping on all orders over $120`
    },
    {
      title: 'BEST VALUE',
      icon: <BestValueIcon />,
      description: `We are continually adjusting what we supply and our prices to ensure that we maintain an optimal balance of affordable and quality for our products. We invest in the best quality strains that we can find and are always on the lookout for new, affordable and high quality weed products.`
    },
    {
      title: 'TRUST',
      icon: <TrustIcon />,
      description: `With over 15 years in the weed business, you can rest assured that you will be taken care of. You can guarantee that we have your best interests in mind. Feel free to check out our reviews.`
    },
    {
      title:
        'HIGHEST QUALITY',
      icon: <QualityIcon />,
      description: `All of our cannabis products are tested to ensure that they are the highest quality possible. We work with expert suppliers and are always revising what makes a quality cannabis product to ensure that we have only the best available.`
    }
  ];


  return (
    <div className="box-container-what-make">
      <div className="wrapper-element">
        <h3 className="title">
          WHAT MAKES US THE{' '}
          <span className="num_1">
            #1
          </span>{' '}
          ONLINE MARIJUANA
          DISPENSARY IN
          CANADA?
        </h3>
        <p className="description">
          When it comes to
          what makes us the
          foremost online
          marijuana dispensary
          in Canada, we could
          wax lyrical about
          our positive
          qualities. Instead,
          to make this
          information clearer,
          we’ve highlighted
          the six prioritized
          features that we
          feel makes us a cut
          above the rest.
        </p>
        <div className="content-box-container">
            {contentData.map((e, i) => (
                <div className="item-box" key={i}>
                    <div className="icon">
                        {e.icon}
                    </div>
                    <p className="title-box">
                        {e.title}
                    </p>
                    <p className="description">
                        {e.description}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
