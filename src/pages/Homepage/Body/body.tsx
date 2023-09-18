import './body.css'
import stone1 from '..//..//..//assets/images/homepage/image 13_prev_ui 1.png'
import stone2 from '..//..//..//assets/images/homepage/image 12_prev_ui 1.png'
import star from '..//..//..//assets/images/homepage/star.png'
import arrowleft from'..//..//..//assets/images/arrow-left.png'
import arrowright from'..//..//..//assets/images/arrow-right.png'
import { ReactElement } from "react";
import Center from './center/center'
function Body():ReactElement {
    return ( <div className='wrapper'>
        <div className="review-product">
            <h1 className='flex'>BEST DISPENSARY TO BUY <br />
             WEED ONLINE IN CANADA</h1>
             <div className="review-products_select flex">
                <button className='review-products_select__items'>Best Sellers</button>
                <button className='review-products_select__items'>Bundles & Promotions</button>
                <button className='review-products_select__items'>On Sale</button>
             </div>
            <div className="review-products-list flex">
                <div className="review-product_main mr-30">
                    <img src={stone1} className='flex' alt="stone" ></img>
                    <div className="review-product_main--info ">
                    <h4>Shop our Best Sellers</h4>
                    <p>Lorem ipsum dolor sit amet <br />
                        consectetur. Ullamcorper ipsum <br />
                         varius lorem blandit lectus <br />
                         magnis feugiat.</p>
                    <span>View All</span>
                    </div>
                <div/>
                
            </div>
                             {/* sản phẩm bán đầu trang */}
             <div className="review-products_items mr-30">
                <div className="review-products_items__imgs flex">
                <img src={stone2} alt="" />
                </div>
                <p>Flower</p>
                <span>2 Oz Deal Watermelon Zkittles + <br />
                    Purple Gushers</span>
                <div className="review-products_items-evaluates flex">
                    <img src={star} className='star' alt="" />
                    <p>4.6/5</p>
                    <span> 135 
                        <div>Reviews</div>
                    </span>
                </div>
                <div className="review-products_items-percents flex">
                    Sativa 100%
                </div>
                <div className="review-products_items-coins flex">
                    <p>$80</p>
                    <span>/ gram</span>
                </div>
                <div className="review-products_items-selects flex">
                    <button className='flex'>1/2lb</button>
                    <button className='flex'>1/4lb</button>
                </div>
                <button className='btn flex'>Add to Cart</button>
                </div>
                                        {/* item 2 */}
            <div className="review-products_items mr-30">
                <div className="review-products_items__imgs flex">
                <img src={stone1} alt="" />
                </div>
                <p>CONCENTRATES</p>
                <span>Mix And Match Shatter/Budder <br />
                 28g (4 X 7G)</span>
                <div className="review-products_items-evaluates flex">
                    <img src={star} className='star' alt="" />
                    <p>4.6/5</p>
                    <span> 135 
                        <div>Reviews</div>
                    </span>
                </div>
                <div className="review-products_items-percents flex">
                    Indica 70%
                </div>
                <div className="review-products_items-coins flex">
                    <span>$200.00</span>
                    <p>$102.00</p>
                </div>
                <div className="review-products_items-selects flex">
                    <button className='flex'>1/2lb</button>
                    <button className='flex'>1/4lb</button>
                </div>
                <button className='btn flex'>Add to Cart</button>
                </div>
                                        {/* item 3 */}
                <div className="sale-now review-products_items mr-30">
                    <div className="sale flex">$60 ounce</div>
                <div className="review-products_items__imgs flex">
                <img src={stone2} alt="" />
                </div>
                <p>Flower</p>
                <span>2 Oz Deal Watermelon Zkittles + <br />
                    Purple Gushers</span>
                <div className="review-products_items-evaluates flex">
                    <img src={star} className='star' alt="" />
                    <p>4.6/5</p>
                    <span> 135 
                        <div>Reviews</div>
                    </span>
                </div>
                <div className="review-products_items-coins flex mb-51">
                    <p>$80</p>
                    <span>/ gram</span>
                </div>
                <div className="review-products_items-selects flex">
                    <button className='flex'>1/2lb</button>
                    <button className='flex'>1/4lb</button>
                </div>
                <button className='btn flex'>Add to Cart</button>
                </div>
            {/* view */}
            <div className="view flex">Out Of Stack</div>
            {/* button */}
            <img src={arrowleft} className="review-products_btn--left"></img>
            <img src={arrowright} className="review-products_btn--right"></img>
            </div>
        </div>
        {/* customer */}
        <Center/>
    </div> );
}

export default Body;