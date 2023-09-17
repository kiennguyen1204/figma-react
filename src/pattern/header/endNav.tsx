import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./style.css";
import { DropdownBox } from "./dropdown";

export const EndNavbar = ({ isDrawerOpen, isOpenDrawer }: { isDrawerOpen: boolean, isOpenDrawer: () => void }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const listItem = [
        { name: "Shop All", to: "/about" },
        { name: "Flower", to: "", dropdown: [
            { name: "Strains", to: "", },
            { name: "Edibles", to: "", },
            { name: "Concentrates", to: "", },
        ] },
        { name: "Edibles", to: "" },
        { name: "Concentrates", to: "", dropdown: [
            { name: "Hybrid", to: "", },
            { name: "Sativa", to: "", },
            { name: "Indica", to: "", },
            { name: "CBD", to: "", },
        ] },
        { name: "Mushrooms", to: "" },
        { name: "Promotions/Bundles", to: "", dropdown: [
            { name: "Sale", to: "", },
            { name: "Bundle", to: "", },
        ] },
        { name: "Support", to: "", dropdown: [
            { name: "FAQ", to: "", },
            { name: "Contact", to: "", },
            { name: "About", to: "", },
            { name: "Privacy Policy", to: "", },
            { name: "Terms of Service", to: "", },
            { name: "Cookie Policy", to: "", },
            { name: "Cookie Settings", to: "", },
        ] },
        { name: "Rewards", to: "" },
        { name: "Blog", to: "" },
    ];
    
    
    useEffect(() => { setIsDropdownOpen(isDropdownOpen) }, [isDropdownOpen]);
    
    const openList = () => {
        if (window.innerWidth > 992) {
            return;
        }

        setIsDropdownOpen(!isDropdownOpen);
    }


    const dropdownMenuBox = (el: any) => {

        return (
            <button type="button" className="btn dropdownMenuBox" onClick={openList}>
                <span className="navLink">{el.name}</span>
                {el.dropdown.length > 0 && (
                    <svg
                        width="13"
                        height="12"
                        viewBox="0 0 13 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="dropdownChevron">
                        <path
                            d="M10.46 4.47461L7.20004 7.73461C6.81504 8.11961 6.18504 8.11961 5.80004 7.73461L2.54004 4.47461"
                            stroke="#46494F"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"/>
                    </svg>
                )}

                <DropdownBox children={el.dropdown} />
            </button>
        );
    };

    return (
        <div className={`navbarBoxEndContainer ${isDrawerOpen ? 'showDrawer' : ''}`}>

            <button className="btn closeDrawer" onClick={isOpenDrawer}>
                <i className="bi bi-x"></i>
            </button>

            <div className="navbarBox">
                <ul className="navGroup list-unstyled">
                    {
                        listItem.map((el, index : number) => (
                            <li className="navItem" key={index}>
                                {
                                    !el.hasOwnProperty("dropdown") ? (
                                        <Link to={el.to} className="navLink">{el.name}</Link>
                                    ) : (
                                        dropdownMenuBox(el)
                                    )
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};
