import './InfoProduct.css'
import img from '..//..//..//..//assets/images/homepage/Photo.png'
import img1 from '..//..//..//..//assets/images/homepage/photo_2.png'
function InfoProduct() {
    return ( <div className="InfoProduct">
        <div className="InfoProduct-items">
            <img src={img} alt="" />
            <h2>Indica</h2>
            <p>This type of cannabis is commonly taken by <br />
             those who want to sink into a state of total <br />
             relaxation in every limb. This reduces stress <br />
              overall and can take your worries and fatigue <br />
               away. Because of its relaxing effects, it is <br />
                suggested to use this type of cannabis at  <br />
                night. It is particularly recommended for <br />
                 people who have trouble sleeping, be it due to <br />
                  insomnia, pain or other associated sleep <br />
                   issues.</p>
            <a href="#">Shop Indica</a>
        </div>
        {/* item 2 */}
        <div className="InfoProduct-items">
            <img src={img} alt="" />
            <h2>Sativa</h2>
            <p>Contrary to the deep all-body relaxation that <br />
             comes with the use of indica strains, sativas <br />
              are known for increasing the feeling of <br />
               creativity, enhancing focus and lessening <br />
                anxiety. This is more of a mind-centered high <br />
                 in terms of how and where you will feel the <br />
                  effects. Given its stimulating nature, it is <br />
                   recommended to use this during the day.</p>
            <a href="#">Shop Sativa</a>
        </div>
        {/* item 3 */}
        <div className="InfoProduct-items">
            <img src={img1} alt="" />
            <h2>Hybrids</h2>
            <p className='other'>Hybrid strains are just that – they combine the <br />
             head-focused high effects of sativas with the <br />
              bodily relaxation of indicas. This is ideal for <br />
               people who really want to sooth any fatigue <br />
                and worries while also clearing the mind <br />
                 ready to focus fresh on something new. <br />
                 Hybrids are expertly tailored to result in <br />
                 strains with specific effects. Useful strain <br />
                 vocabulary to familiarize yourself with when it <br />
                  comes to hybrids includes sativa-dominant <br />
                  (full, bodily relaxation), indica-dominant <br />
                   (boosting creativity, increasing mood and lessening anxiety) and <br />
                    balanced (the best of <br />
                     both worlds).</p>
            <a href="#">Shop Hybrids</a>
        </div>
    </div> );
}

export default InfoProduct;