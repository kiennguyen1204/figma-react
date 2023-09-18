import './advertisement.css'
import img from '..//..//..//..//assets/images/homepage/fluent_shopping-bag-tag-20-regular.png'
import img2 from '..//..//..//..//assets/images/homepage/fluent_wallet-credit-card-20-regular.png'
import img3 from '..//..//..//..//assets/images/homepage/healthicons_health-worker-form-outline.png';
import img4 from '..//..//..//..//assets/images/homepage/ph_circle-wavy-check-light.png'
function Advertisement() {
    return ( <div className="wrapper-Advertisement">
        <div className="coins">
            <div className="wrapper-coins">
            <h1>REFER A FRIENDS</h1>
           <div className="wrapper-coins_item">
           And get
            <p>$30!</p>
           </div>
            </div>
            <button>Refer Here</button>
        </div>
        <div className="main">
            <h1>HOW TO ORDER WEED ONLINE <br /> FROM TOP SHELF BC - MAIL <br />
            ORDER MARIJUANA</h1>
            <p>Ordering weed online from Top Shelf BC is easy. We are proud to have made the process accessible <br />
            across multiple platforms and simple to understand, meaning that more people can come to us to buy <br />
            their cannabis products online.</p>
            <div className="main-items">
            <div className=" main-items_boxs">
                <div className="main-items_boxs-img">
                    <div className="label">1</div>
                    <img src={img3} alt="" />
                </div>
                <div>REGISTER</div>
                <p>Sign up for an account with us. This is quick and simple. We don’t <br />
                 require any more details from you than the bare minimum needed for <br /> 
                 you to place an order and get your product delivered.</p>
                 
            </div>
            <div className="main-items_boxs">
                <div className="main-items_boxs-img">
                    <div className="label">2</div>
                    <img src={img} alt="" />
                </div>
                <div>SHOP</div>
                <p>Decide on what you want to purchase. We stock a wide range of <br /> 
                edibles,flowers , concentrates and mushrooms there is bound to be <br />
                something for everyone.</p>
                 

            </div>
            <div className=" main-items_boxs">
                <div className="main-items_boxs-img">
                    <div className="label">3</div>
                    <img src={img2} alt="" />
                </div>
                <div>MAKE PAYMENT</div>
                <p>Pay securely. Our site boasts sturdy protection certificates to keep <br />
                 your card details and related data safe..</p>
                 

            </div>
            <div className=" main-items_boxs">
                <div className="main-items_boxs-img">
                    <div className="label">4</div>
                    <img src={img4} alt="" />
                </div>
                <div>RELAX</div>
                <p>Your product will be packaged discretely and shipped by Canada Post <br />
                 Xpresspost. We will provide you with a tracking number so then you <br />
                  can follow your mail order marijuana every step of the way.</p>
                 
            </div>
            </div>
            <button className='main-items_btn'>Choose your Weed</button>
            <button className='main-items_btn'>Refer Here</button>
        </div>
    </div> );
}

export default Advertisement;