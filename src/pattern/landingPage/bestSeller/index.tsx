import { useState } from "react";
import "./index.scss"
import { Sellers } from "./Sellers";

export const BestSeller = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const tabsList = [{
        title: "Best Sellers",
        to: "populate"
    }, {
        title: "Bundles & Promotions",
        to: "Promotions"
    }, {
        title: "On Sale",
        to: "Sale"
    }];

    const changeTab = (index: number) => {
        setCurrentTab(index);
    };

    return (
        <div className="bestSellerContainer">
            <div className="bestSellerContainerBox">
                <h2 className="bestSellerTitle">BEST DISPENSARY TO BUY WEED ONLINE IN CANADA</h2>

                <div className="bestSellerBoxWrapper">
                    <ul className="navPill">
                        {tabsList.map((tab, index) => {
                            return <li className={`navItem ${index === currentTab ? "active" : ""}`} onClick={() => changeTab(index)} key={index}>
                                <button className="btn navLink" >{tab.title}</button>

                            </li>
                        })}
                    </ul>
                </div>

                <div className="tab-content">
                    <div className={`tab-pane fade ${currentTab === 0 ? "show active" : ""}`} tabIndex={0}>
                        <Sellers />
                    </div>
                    <div className={`tab-pane fade ${currentTab === 1 ? "show active" : ""}`} tabIndex={0}>b</div>
                    <div className={`tab-pane fade ${currentTab === 2 ? "show active" : ""}`} tabIndex={0}>c</div>
                </div>
            </div>

        </div>
    );
}