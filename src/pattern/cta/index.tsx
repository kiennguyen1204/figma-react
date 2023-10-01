import Button from "components/common/Button";
import Input from "components/common/Input";

import { Card } from 'components/common/Card/index';

import "./index.css";

export const CTA = () => {
    return (
        <Card classes={"cta-container"} color="sacramento" colorLevel="dark">
            <div className="card-wrapper">
                <div className="cta-text">
                    <h3 className="cta-title">UNLOCK 20% OFF YOUR FIRST ORDER</h3>
                    <p className="cta-description">Get 20% off your first purchase when you sign up for our newsletter.</p>
                </div>

                <hr className="spacing-line" />

                <div className="cta-footer-flex">
                    <div className="cta-input">
                        <Input type="text" size={"md"} value={""} inputClass="w-100" placeholder="Email Address" />
                    </div>
                    <div className="cta-button">
                        <Button label={"Reveal coupon"} classes={"ctaButton"} variant={"primary"} size={"big"} />
                    </div>
                </div>
            </div>
        </Card>
    );
}