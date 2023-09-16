import { CTA } from "../../layouts/cta";

export const Footer = () => {
    return (
        <footer className="footerContainer">
            <CTA />
            
            <div className="footerTop">
                <div className="footerLogo">
                    <h3 className="footerTitle">Logo</h3>
                </div>
            </div>

            <div className="footerContent">
                <div className="footerContentItem">
                    <h3 className="footerTitle">About us</h3>
                    <p className="footerDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="footerContentItem">
                    <h3 className="footerTitle">Contact us</h3>
                    <p className="footerDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="footerContentItem">
                    <h3 className="footerTitle">Product</h3>
                    <p className="footerDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="footerContentItem">
                    <h3 className="footerTitle">Legal</h3>
                    <p className="footerDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </footer>
    );
}