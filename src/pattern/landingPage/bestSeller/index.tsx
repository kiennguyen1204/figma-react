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
        <div className="best-seller-container">
            <div className="best-seller-container-box">
                <h2 className="best-seller-title">BEST DISPENSARY TO BUY WEED ONLINE IN CANADA</h2>

                <div className="best-seller-box-wrapper">
                    <ul className="nav-pill">
                        {tabsList.map((tab, index) => {
                            return <li className={`nav-item ${index === currentTab ? "active" : ""}`} onClick={() => changeTab(index)} key={index}>
                                <button className="btn nav-link" >{tab.title}</button>
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