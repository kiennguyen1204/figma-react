import List from "components/common/List";

import "./index.scss";

import TruckFast from 'assets/images/service/truckFast.svg?react';
import SafeHome from 'assets/images/service/safeHome.svg?react';
import Money from 'assets/images/service/money.svg?react';


export const FirstServicePattern = () => {
    const serviceList = [{
            title: 'Reliable Shipping',
            description: 'Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!',
            icon: <TruckFast />
        }, {
            title: 'You’re Safe With Us',
            description: 'Our secure payment system accepts the most common forms of payments making the checkout process quicker! The payments we accept are debit, all major credit cards, and cryptocurrency.',
            icon: <SafeHome />
        }, {
            title: 'Best Quality & Pricing',
            description: 'Here at Green Society, we take pride in the quality of our products and service. Our prices are set to ensure you receive your medication at a reasonable price and safely',
            icon: <Money />
        }
    ]

    return (
        <List classes="serviceListContainer" direction="row">
            {serviceList.map((el: any, index) => (
                <div className="serviceListContainerBox" key={index}>
                    <div className="serviceListBoxLeft">
                        <div className="icon-box">

                        {el.icon}
                        </div>
                    </div>
                    <div className="serviceListBoxRight">
                        <div className="serviceListTitle">{el.title}</div>
                        <div className="serviceListDescription">{el.description}</div>
                    </div>
                </div>
            ))}
        </List>
    );
};
