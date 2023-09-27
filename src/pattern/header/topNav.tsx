import { ReactElement } from "react";
import "./style.css";

export  const TopNavbar = ():ReactElement => {
    return (
        <section className="limit-toolbar-container">
            <div className="limit-toolbar-box">
                <div className="limit-toolbar-info">
                    <div className="limit-toolbar-text">
                        LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.
                    </div>
                    <div className="limit-toolbar-time">00:00:00</div>
                </div>
            </div>
        </section>
    );
};
