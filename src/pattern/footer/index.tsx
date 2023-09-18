import { Link } from 'react-router-dom';
import Logo from 'assets/images/footer_logo.svg'

import Mastercard from 'assets/images/mastercard.svg'
import Visa from 'assets/images/visa.svg'
import Bitcoin from 'assets/images/bitcoin.svg'
import Interac from 'assets/images/interac.svg'

import "./index.scss"

type LinkTypes = { to: string, name: string }

export const FooterPattern = () => {
    const quickLink = [
        { name: "Track Your Order", to: "/home" },
        { name: "Shop All", to: "/home" },
        { name: "Flower", to: "/home" },
        { name: "Edibles", to: "/home" },
        { name: "Concentrates", to: "/home" },
        { name: "Refunds", to: "/home" },
        { name: "Mushrooms", to: "/home" },
        { name: "Promotions / Bundles", to: "/home" },
        { name: "Promotions / Bundles", to: "/home" },
        { name: "Support", to: "/home" },
        { name: "Reward", to: "/home" },
        { name: "Blog", to: "/home" },
        { name: "Shipping Faq", to: "/home" },
    ];

    const moreLink = [
        { name: "Buy weed online in Canada", to: "/" },
        { name: "Buy weed online in New Brunswick", to: "/" },
        { name: "Buy weed online in Prince Edward Island", to: "/" },
        { name: "Buy weed online in Northwest Territories", to: "/" },
        { name: "Buy weed online in Saskatchewan", to: "/" },
        { name: "Buy weed online in Manitoba", to: "/" },
        { name: "Buy weed online in Quitebec", to: "/" },
        { name: "Buy weed online in British Columbia", to: "/" },
        { name: "Buy weed online in Ontario", to: "/" },
        { name: "Buy weed online in Alberta", to: "/" },
    ]

    const paymentMethod = [
        { name: "mastercard", image: Mastercard },
        { name: "visa", image: Visa },
        { name: "bitcoin", image: Bitcoin },
        { name: "interac", image: Interac },
    ]


    return (
        <div className="footerInsiderContainer">
            <div className="footerInsiderBox">
                <div className="footerTop">
                    <div className="footerLogo">
                        <h3 className="footerTitle">
                            <Link to="/home">
                                <img src={Logo} className="footerLogo" alt="logo" />
                            </Link>
                        </h3>

                        <p className="footerDescription">
                            #1 Canadian top rated online dispensary that meets the customers needs in every single medical marijuana aspect. The team here at TopShelfBC is heavily involved in the Canadian cannabis industry for over 15 years. We strive to provide the top quality products, service and care at the lowest prices you’ll ever find.
                        </p>
                    </div>
                </div>

                <div className="footerContent">
                    <div className="footerContentItem">
                        <h3 className="footerTitle">QUICK LINK</h3>
                        <ul className="listGroup list-unstyled">
                            {quickLink.map((el: any, index: number) => (
                                <li className="listGroupItem" key={'quickLink__' + index}>
                                    <Link  to={el.to} className='footerLink'>{el.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footerContentItem">
                        <h3 className="footerTitle">CONTACT US</h3>
                        <ul className="listGroup list-unstyled">
                            <li className="listGroupItem">
                                <a href='mailto:info@topshelfbc.cc' className='footerLink'>info@topshelfbc.cc</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footerContentItem">
                        <h3 className="footerTitle">MORE</h3>
                        <ul className="listGroup list-unstyled">
                            {moreLink.map((el: LinkTypes, index: number) => (
                                <li className="listGroupItem" key={index}>
                                    <Link to={el.to} className='footerLink'>{el.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footerContentItem paymentMethod">
                        <ul className="listGroup list-unstyled">
                            {paymentMethod.map((el: { image: string, name: string }, index: number) => (
                                <li className="listGroupItem" key={index}>
                                    <img decoding='async' loading='lazy' src={el.image} alt={el.name} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <hr className='spacingLine' />

            <div className="copyright">
                <div className="listGroupCopyright list-unstyled">
                    <div className="groupItem">
                        <span className="copyrightText">© 2022 Top Shelf BC. All Rights Reserved. </span>
                    </div>
                    <div className="groupItem">
                        <ul className="groupItemInner list-unstyled">
                            <li className="InnerItem">
                                <Link to="/home" className="innerItemLink">Out Of Stock</Link>
                            </li>
                            <li className="InnerItem">
                                <Link to="/home" className="innerItemLink">Privacy Policy</Link>
                            </li>
                            <li className="InnerItem">
                                <Link to="/home" className="innerItemLink">Terms & Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}