import './CategoryPage.css'
import {TopNavbar}from '..//..//pattern/header/topNav'
import { JSX } from 'react/jsx-runtime';
import car from '..//..//assets/images/truck-fast.png'
import sale from '..//..//assets/images/safe-home.png'
import coin from '..//..//assets/images/coin.png'
import './CategoryPage.css'
function CategoryPage() {
    return ( <div className='wrapper'>
        {/* contact */}
        <div className="contact">
           <div className="contact-item flex">
           <div className="contact-border default-height flex dedault-color">
           <div className=" default-item flex" >
                <img src={car} alt='car'  />
                </div>
                Reliable Shipping
            </div>
            <div className="contact-border default-height flex dedault-color">
                <div className="default-item flex" >
                <img src={sale} alt='sale'  />
                </div>
                You’re Safe With Us
            </div>
            <div className="contact-border default-height flex dedault-color">
            <div className="default-item flex" >
                <img src={coin} alt='coin'  />
                </div>
                Best Quality & Pricing
            </div>
           </div>
        </div>
    </div> );
}

export default CategoryPage;