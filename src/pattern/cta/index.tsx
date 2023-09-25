import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

import "./index.css";
import Card from '../../components/common/Card/index';

export const CTA = () => {
    return (
        <Card classes={"ctaContainer"}>
            <div className="card-wrapper">
                <div className="ctaText">
                    <h3 className="ctaTitle">UNLOCK 20% OFF YOUR FIRST ORDER</h3>
                    <p className="ctaDescription">Get 20% off your first purchase when you sign up for our newsletter.</p>
                </div>

                <hr className="spacingLine" />

                <div className="ctaFooterFlex">
                    <div className="ctaInput">
                        <Input type="text" size={"md"} value={""} inputClass="w-100" placeholder="Email Address" />
                    </div>
                    <div className="ctaButton">
                        <Button label={"Reveal coupon"} classes={"ctaButton"} variant={"primary"} size={"big"} />
                    </div>
                </div>
            </div>
        </Card>
    );
}