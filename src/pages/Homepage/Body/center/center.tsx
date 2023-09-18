import { ReactElement } from "react";
import './center.css'
import star from '..//..//..//..//assets/images/homepage/star.png'
import nostar from '..//..//..//..//assets/images/star.png'
import human1 from '..//..//..//..//assets/images/homepage/human1.png'
import human2 from '..//..//..//..//assets/images/homepage/human2.png'
import human3 from '..//..//..//..//assets/images/homepage/human3.png'
import Advertisement from "../Advertisement/advertisement";
import Information from "../Information/Information";
import Weekeducation from "../Weekeducation/weekeducation";
import InfoProduct from "../InfoProduct/InfoProduct";
function Center() {
    return ( <div className="wrapper-center">
        <h1>CUSTOMER TESTIMONIALS</h1>
        <div className="box-lists">
            <div className="box-lists_main mr-20">
                <h3>VOTED BEST <br /> ONLINE <br /> DISPENSARY IN <br /> CANADA</h3>
                <div>Google</div>
                <div className="box-lists_main-items ">
                    <p>EXELLENCET</p>
                    <div>
                    <div className="star">
                        {/* star */}
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <p><b>on 135</b> <span>Reviews</span></p>
                    </div>

                </div>
               
            </div>
             {/* section */}
             <div className="box-lists flex">
             <div className="box-lists_items mr-20">
                    <div className="box-lists_items-img">
                        <img src={human1} alt="" />
                        Vikki Starr
                    </div>
                    <div className="box-lists_items-star">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={nostar} alt="" />
                    </div>
                    <p>Absolutely love TopShelfBC; <br />
                    affordable on any budget and such <br />
                     fast delivery, straight to my door! I <br />
                      recommend them to all my friends <br />
                       and family for their 420 needs.
                    </p>
                    <span>January 15, 2023</span>
                </div>
                {/* item 2 */}
                <div className="box-lists_items mr-20">
                    <div className="box-lists_items-img">
                        <img src={human2} alt="" />
                        Vikki Starr
                    </div>
                    <div className="box-lists_items-star">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <p>Absolutely love TopShelfBC; <br />
                    affordable on any budget and such <br />
                     fast delivery, straight to my door! I <br />
                      recommend them to all my friends <br />
                       and family for their 420 needs.
                    </p>
                    <span>January 15, 2023</span>
                </div>
                {/* item 3 */}
                <div className="box-lists_items mr-20">
                    <div className="box-lists_items-img">
                        <img src={human3} alt="" />
                        Vikki Starr
                    </div>
                    <div className="box-lists_items-star">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <p>Absolutely love TopShelfBC; <br />
                    affordable on any budget and such <br />
                     fast delivery, straight to my door! I <br />
                      recommend them to all my friends <br />
                       and family for their 420 needs.
                    </p>
                    <span>January 15, 2023</span>
                </div>
             </div>
                {/* arrow */}
                <img src="" className="btn-left"></img>
                <img src="" className="btn-rihgt"></img>
        </div>
        {/* Advertisement */}
        <div className="advertisement"><Advertisement/></div>
        
        {/* information */}
       <div className="information">
       <Information/>
       </div>
       {/* InfoProduct */}
       <InfoProduct/>
       
       {/* weekeducation */}
       <Weekeducation/>

    </div> );
}

export default Center;