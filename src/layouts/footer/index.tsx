import { CTA } from "../../pattern/cta";
import { FooterPattern } from "../../pattern/footer";
import "./index.css"


export const Footer = () => {
    return (
        <footer className="footer-container">
            <CTA />
            <FooterPattern />
        </footer>
    );
}