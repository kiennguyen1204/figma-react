import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

export const CTA = () => {
    return (
        <div className="ctaContainer">
            <div className="ctaBox">
                <div className="ctaText">
                    <h3 className="ctaTitle">Join our community</h3>
                    <p className="ctaDescription">Get 20% off your first purchase when you sign up for our newsletter.</p>
                </div>

                <hr className="spacingLine" />

                <div className="ctaFooterFlex">
                    <div className="ctaInput">
                        <Input type="text" className="form-control" placeholder="Enter your email" />
                        {/* <input type="text" className="form-control" placeholder="Enter your email"/> */}
                    </div>
                    <div className="ctaButton">
                        <Button label={"Reveal coupon"} classes={"ctaButton"} variant={"secondary"} />
                    </div>
                </div>
            </div>
        </div>
    );
}