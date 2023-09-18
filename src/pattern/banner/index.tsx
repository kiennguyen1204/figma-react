import { ReactElement } from "react";
import Button from "../../components/common/Button";
import "./index.scss"

export const BannerPattern = ():ReactElement => {
    return (
        <div className="bannerContainer">
            <div className="bannerBoxBackground">
                <picture className="bannerBackground">
                    <source media="(max-width: 575.98px)" srcSet="/src/assets/images/banner/sm_bg.jpg" />
                    <img src="/src/assets/images/banner/lg_bg.jpg" alt="banner" />
                </picture>
            </div>

            <div className="bannerBoxContainer">
                <div className="bannerBox">
                    <div className="bannerBoxContent">
                        <div className="bannerBoxTitle">
                            <h4 className="bannerSubtitle">BEST SELLER</h4>
                            <h2 className="bannerTitle">BEST DISPENSARY TO BUY WEED ONLINE </h2>
                        </div>
                        <div className="bannerBoxDescription">
                            <p className="bannerDescription">Vitamins & Supplements</p>
                        </div>
                    </div>

                    <div className="bannerBoxService">
                        <ul className="bannerBoxServiceGroup list-unstyled">
                            <li className="serviceItem">
                                <span className="text">Get 25% off</span>
                            </li>
                            <li className="serviceItem">
                                <span className="text">Free Shipping</span>
                            </li>
                        </ul>

                        <div className="bannerBoxServiceButton">
                            <Button
                                size={"big"}
                                label={"Shop All"}
                                variant={"primary"}
                                classes={"bannerButton"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BannerPattern;