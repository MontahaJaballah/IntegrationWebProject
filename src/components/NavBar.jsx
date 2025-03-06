import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/images/navbar/logo.png'
import Chat from '../assets/images/navbar/chat.png'
import Coin from '../assets/images/navbar/coin.png'
import Heart from '../assets/images/navbar/heart.png'
import Menu from '../assets/images/navbar/menu.png'
import Cart from '../assets/images/navbar/picnic.png'
import Serach from '../assets/images/navbar/search.png'
import User from '../assets/images/navbar/user.png'

function Header() {
    // NavItem component functionality
    const NavItem = ({ iconSrc, altText, label, textColor = "text-black", to }) => {
        return (
            <Link to={to}>
                <div className="flex flex-col gap-1.5 items-center">
                    <img
                        src={iconSrc}
                        className="h-[62px] w-[63px] max-sm:w-10 max-sm:h-10"
                        alt={altText}
                    />
                    <p
                        className={`text-xl font-medium tracking-normal leading-5 text-center ${textColor}`}
                    >
                        {label}
                    </p>
                </div>
            </Link>
        );
    };

    // ActionIcon component functionality
    const ActionIcon = ({ src, alt, size }) => {
        return (
            <img src={src} className={`${size} max-sm:w-10 max-sm:h-10`} alt={alt} />
        );
    };

    return (
        <>
            <header className="flex relative items-start p-0 mx-auto my-0 max-w-[1144px] max-md:flex-wrap max-md:px-5 max-md:py-0 max-sm:justify-between max-sm:p-2.5 mb-8">
                <img
                    src={Logo}
                    className="h-[200px] w-[192px] object-contain max-sm:h-[100px] max-sm:w-auto"
                    alt="Exotica logo"
                />
                <nav className="flex gap-8 mt-6 ml-12 max-md:ml-5 max-sm:hidden">
                    <NavItem
                        iconSrc={Menu}
                        altText="Menu icon"
                        label="Menu"
                        to="/menu"
                    />
                    <NavItem
                        iconSrc={Coin}
                        altText="Loyalty icon"
                        label="Loyalty"
                        to="/loyalty"
                    />
                    <NavItem
                        iconSrc={Chat}
                        altText="Forum icon"
                        label="Forum"
                        to="/forum"
                    />
                </nav>
                <div className="flex gap-12 mt-12 ml-auto max-md:gap-8 max-md:mt-8 max-sm:gap-5 max-sm:mt-2.5">
                    <ActionIcon
                        src={Serach}
                        alt="Search"
                        size="h-[45px] w-[45px]"
                    />
                    <ActionIcon
                        src={Cart}
                        alt="Basket"
                        size="h-[50px] w-[50px]"
                    />
                    <ActionIcon
                        src={Heart}
                        alt="Favorites"
                        size="h-[50px] w-[50px]"
                    />
                    <ActionIcon
                        src={User}
                        alt="User profile"
                        size="h-[50px] w-[50px]"
                    />
                </div>
            </header>
            {/* Optional divider line */}
            <div className="w-full max-w-[1144px] mx-auto border-b border-gray-200 mb-6"></div>
        </>
    );
}

export default Header;