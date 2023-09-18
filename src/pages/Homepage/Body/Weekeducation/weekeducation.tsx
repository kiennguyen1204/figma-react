import { ReactElement } from 'react';
import './weekeducation.css'
import img from '..//..//..//..//assets/images/homepage/image 17.png'
import img1 from '..//..//..//..//assets/images/homepage/image 18.png'
import img2 from '..//..//..//..//assets/images/homepage/image 19.png'
function Weekeducation():ReactElement {
return ( <div className="weekeducation-wrapper">
        <div className="weekeducation">
                <div className="heading-items">
                    <h1>WEED EDUCATION</h1> 
                    <a href='#'>Show All</a>
                </div>
            <div className="weekeducation-list">
                <div className="weekeducation-items">
                    <img src={img} alt="" />
                    <p className='day'>January 24, 2023</p>
                    <h4 >12 Mistakes To Avoid When <br />
                    Buying Cannabis Online</h4>
                    <span>Buying cannabis online can be a great way to <br />
                    get your hands on the products you need <br />
                    without leaving the comfort of your home. But …
                    </span>
                    <a href="#">Read More</a>
                </div>
                {/* item 2 */}
                <div className="weekeducation-items">
                    <img src={img1} alt="" />
                    <p className='day'>January 20, 2023</p>
                    <h4 >How To Store Cannabis and <br />
                     Keep it Fresh and Potent?</h4>
                    <span>Cannabis packaging has advanced dramatically <br />
                     in recent years, whether your state has a <br />
                      medicinal marijuana programme, legal adult- <br />
                      use weed, or both. Most ...
                    </span>
                    <a href="#">Read More</a>
                </div>
                {/* item 3 */}
                <div className="weekeducation-items">
                    <img src={img2} alt="" />
                    <p className='day'>January 19, 2023</p>
                    <h4 className='weekeducation-items_edit' >The Ultimate Guide to Checking <br />
                    the Quality of Cannabis – 10 <br />
                     Industry Leading Tips</h4>
                    <span>Quality cannabis is a term used to describe <br />
                    cannabis products that meet specific standards <br />
                     of excellence. It is essential to understand what <br />
                      quality cannabis means, …
                    </span>
                    <a href="#">Read More</a>
                </div>
            </div>   
        </div>
</div> );
}

export default Weekeducation;