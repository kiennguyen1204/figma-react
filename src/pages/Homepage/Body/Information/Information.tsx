import './Information.css'
import img from '..//..//..//..//assets/images/homepage/car-1.png'
import img1 from '..//..//..//..//assets/images/homepage/check.png'
import img2 from '..//..//..//..//assets/images/homepage/dymon.png'
import img3 from '..//..//..//..//assets/images/homepage/human_call.png'
import img4 from '..//..//..//..//assets/images/homepage/huychuong.png'
function Information() {
    return (<div className="wrapper-information">
        <div className="heading">
            <div className='heading-text'><h1> WHAT MAKES US THE</h1>
        <p> #1</p></div>
                <h1><span className='texts'>#1</span>ONLINE MARIJUANA</h1> 
           <h1> DISPENSARY IN CANADA?</h1>

            <p>When it comes to what makes us the foremost online marijuana dispensary in Canada, we could wax <br />
            lyrical about our positive qualities. Instead, to make this information clearer, we’ve highlighted the <br />
            six prioritized features that we feel makes us a cut above the rest.</p>
        </div>
        {/* info */}
        <div className="info">
            <div className="info-items ">
                <img src={img3} alt="" />
                <h4>CUSTOMER SERVICE</h4>
                <p>Whether it is answering any questions you <br />
                have before making a purchase, helping out <br />
                 with the buying process itself or taking your <br />
                 feedback under consideration, we are proud <br />
                  to provide high quality customer service that <br />
                  makes you – the customer – the most <br />
                   important person in the transaction.</p>
            </div>
            {/* item 2 */}
            <div className="info-items ">
                <img src={img1} alt="" />
                <h4>SECURITY</h4>
                <p>When it comes to security, we only keep what <br />
                 details are necessary for you to have an <br />
                  account with us and make an order. When it <br />
                    comes to shipping your mail order marijuana <br />
                     out, we use only tamper-proof and discrete <br />
                      packaging so then what you’ve purchased is <br />
                       your business only.</p>
                </div>
            {/* item 3 */}
            <div className="info-items ">
                <img src={img2} alt="" />
                <h4>BEST VALUE</h4>
                <p>We are continually adjusting what we supply <br />
                 and our prices to ensure that we maintain an <br />
                  optimal balance of affordable and quality for <br />
                   our products. We invest in the best quality <br />
                    strains that we can find and are always on the <br />
                     lookout for new, affordable and high quality <br />
                     weed products.</p>
            </div>
            {/* item 4 */}
            <div className="info-items ">
                <img src={img} alt="" />
                <h4>DELIVERY INSURANCE</h4>
                <p>If your mail order marijuana becomes lost, <br />
                 stolen, or damaged during transit, we will <br />
                  send you a replacement completely free of <br />
                   charge. Free Canada Post Xpress shipping on <br />
                   all orders over $120.</p>
            </div>
            {/* item 5 */}
            <div className="info-items ">
                <img src={img4} alt="" />
                <h4>HIGHEST QUALITY</h4>
                <p>All of our cannabis products are tested to <br />
                 ensure that they are the highest quality <br />
                  possible. We work with expert suppliers and <br />
                   are always revising what makes a quality <br />
                    cannabis product to ensure that we have only <br />
                     the best available.</p>
            </div>
        </div>
    </div>  );
}

export default Information;