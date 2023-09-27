import { BannerPattern } from "../pattern/banner";
import { BestSeller } from "../pattern/landingPage/bestSeller";
import ChooseYourWeed from "../pattern/landingPage/chooseYourWeed";
import InfoBottom from "../pattern/landingPage/info";
import RecentlyAdded from "../pattern/landingPage/recentlyAdded";
import ReferFriend from "../pattern/landingPage/refer";
import { FirstServicePattern } from '../pattern/landingPage/serviceOne/index';
import CustomerTestinmonials from "../pattern/landingPage/testimonials";
import { WeedEducationPattern } from '../pattern/landingPage/weedEducation/index';
import WhatMake from "../pattern/landingPage/whatmakes";

export const Homepage = () => {
    return (
        <div className="container-homepage">
            <BannerPattern />
            <FirstServicePattern />
            <BestSeller />
            <CustomerTestinmonials/>
            <ChooseYourWeed/>
            <ReferFriend/>
            <WhatMake/>
            <RecentlyAdded/>
            <InfoBottom/>
            <WeedEducationPattern />
            

        </div>
    );
}