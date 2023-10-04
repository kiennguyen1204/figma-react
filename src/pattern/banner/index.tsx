
import { ReactElement } from "react";
import Button from "../../components/common/Button";
import "./index.scss"

export const BannerPattern = ():ReactElement => {
    return (
        <div className="banner-container">
            <div className="banner-box-background">               
            </div>

            <div className="bannerbox-container">
                <div className="banner-box">
                    <div className="banner-box-content">
                        <div className="banner-box-title">
                            <h4 className="banner-subtitle">BEST SELLER</h4>
                            <h2 className="banner-title">BEST DISPENSARY TO BUY WEED ONLINE </h2>
                        </div>
                        <div className="banner-box-description">
                            <p className="banner-description">Vitamins & Supplements</p>
                        </div>
                    </div>

                    <div className="banner-box-service">
                        <ul className="banner-box-service-group list-unstyled">
                            <li className="service-item">
                                <span className="text">Get 25% off</span>
                            </li>
                            <li className="service-item">
                                <span className="text">Free Shipping</span>
                            </li>
                        </ul>

                        <div className="banner-box-service-button">
                            <Button
                                size={"big"}
                                label={"Shop All"}
                                variant={"primary"}
                                classes={"banner-button"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}