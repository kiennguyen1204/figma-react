import { ReactElement } from "react";
import './Homepage.css'
import Snack1 from '..//..//assets/images/homepage/image 11_prev_ui 1.png'
import Snack2 from '..//..//assets/images/homepage/image 9_prev_ui 1.png'
import Snack3 from '..//..//assets/images/homepage/image 8_prev_ui 1.png'
import box1 from '..//..//assets/images/truck-fast.png'
import box2 from '..//..//assets/images/safe-home.png'
import box3 from '..//..//assets/images/coin.png'
import Body from "./Body/body";
function HomePage():ReactElement {
    return ( <div className="wrapper">
        {/*head  */}
        <div className="head">
            <div className="head-info">
                <div className="dispensary">
                    <p>BEST SELLER</p>
                    <h1>BEST DISPENSARY TO <br /> BUY WEED ONLINE</h1>
                    <span>Vitamins & Supplements</span>
                </div>
            </div>
            {/* sell */}
            <div className="head-sell">
                <div className="head-sell_item flex">
                    <p>Get 25% off</p>
                    <span>Free Shipping</span>
                </div>
                <button className="head-sell_btn">
                    Shop All
                </button>
            </div>
            {/* snack */}
            <img className="snack-1" src={Snack1}></img>
            <img className="snack-2" src={Snack2}></img>
            <img className="snack-3" src={Snack3}></img>
        </div>
        {/* contact */}
        <div className="wrapp-contact">
            <div className="contact flex">
                {/* car */}
            <div className="contact-items flex">
                <div className="contact-box flex">
                    <img src={box1} alt="" />
                </div>
                <div className="contact-texts">
                    <p>Reliable Shipping</p>
                    <span>
                    Green Society provides Canada Post <br />
                     Xpress Shipping right to your <br /> doorstep! 
                    You can also opt in for <br />
                    shipping insurance. For orders over <br />
                    $149, shipping is free!
                    </span>
                </div>
            </div>
            {/* leaves */}
            <div className="contact-items flex">
                <div className="contact-box flex">
                    <img src={box2} alt="" />
                </div>
                <div className="contact-texts">
                    <p>Reliable Shipping</p>
                    <span>
                    Green Society provides Canada Post <br />
                     Xpress Shipping right to your <br /> doorstep! 
                    You can also opt in for <br />
                    shipping insurance. For orders over <br />
                    $149, shipping is free!
                    </span>
                </div>
            </div>
            {/* coins */}
            <div className="contact-items flex">
                <div className="contact-box flex">
                    <img src={box3} alt="" />
                </div>
                <div className="contact-texts">
                    <p>Reliable Shipping</p>
                    <span>
                    Green Society provides Canada Post <br />
                     Xpress Shipping right to your <br /> doorstep! 
                    You can also opt in for <br />
                    shipping insurance. For orders over <br />
                    $149, shipping is free!
                    </span>
                </div>
            </div>
            </div>
            
        </div>

        {/* body */}
        <Body/>
    </div> );
}

export default HomePage;