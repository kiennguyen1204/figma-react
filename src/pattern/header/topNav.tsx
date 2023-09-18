import { ReactElement } from "react";
import "./style.css";

export  const TopNavbar = ():ReactElement => {
    return (
        <section className="limitToolbarContainer">
            <div className="limitToolbarBox">
                <div className="limitToolbarInfo">
                    <div className="limitToolbarText">
                        LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.
                    </div>
                    <div className="limitToolbarTime">00:00:00</div>
                </div>
            </div>
        </section>
    );
};
