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
                        <input type="text" className="form-control" placeholder="Enter your email"/>
                    </div>
                    <div className="ctaButton">
                        <button className="btn ctaButton">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}