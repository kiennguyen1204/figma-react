import { BannerPattern } from "../pattern/banner";
import { BestSeller } from "../pattern/landingPage/bestSeller";
import { FirstServicePattern } from '../pattern/landingPage/serviceOne/index';
import { WeedEducationPattern } from '../pattern/landingPage/weedEducation/index';

export const Homepage = () => {
    return (
        <div className="containerHomepage mb-5">
            <BannerPattern />
            <FirstServicePattern />
            <BestSeller />
            <WeedEducationPattern />
        </div>
    );
}