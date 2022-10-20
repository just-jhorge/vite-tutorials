import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import BgOverlay from "../ui/BgOverlay";
import SneakersContext from "../../store/sneakers-context";
import Cart from "../cart/Cart";

import hamburger from "../../assets/images/icon-menu.svg";
import logo from "../../assets/images/logo.svg";
import close from "../../assets/images/icon-close.svg";
import cartIcon from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";

const Header = () => {
    const [nav, setNav] = useState(false);
    const [cart, setCart] = useState(false);
    const { cartValue } = useContext(SneakersContext);

    const showNav = () => {
        setNav(!nav);
    };

    const showCart = () => {
        setCart(!cart);
    };

    return (
        <header>
            {nav && <BgOverlay style="lg:hidden" showBg={showNav} />}
            <div className=" flex gap-x-5 md:gap-x-14 items-center">
                <img
                    src={hamburger}
                    alt="Menu"
                    className="lg:hidden cursor-pointer"
                    onClick={showNav}
                />
                <img src={logo} alt="logo" />

                <nav className="hidden lg:flex gap-x-8 items-center text-gray-500 text-lg font-medium">
                    {[
                        { id: 1, text: "Collections" },
                        { id: 2, text: "Men" },
                        { id: 3, text: "Women" },
                        { id: 4, text: "About" },
                        { id: 5, text: "Contact" },
                    ].map((linkText) => (
                        <a href="/" className="afterLink" key={linkText.id}>
                            {linkText.text}
                        </a>
                    ))}
                </nav>

                {ReactDOM.createPortal(
                    <nav
                        className={`mobileNav ${
                            nav ? "left-0 w-[70%]" : "left-[-100vw] w-full"
                        }`}
                    >
                        <img
                            src={close}
                            alt="Close"
                            className="w-[15px] lg:hidden cursor-pointer"
                            onClick={showNav}
                        />
                        {[
                            { id: 1, text: "Collections" },
                            { id: 2, text: "Men" },
                            { id: 3, text: "Women" },
                            { id: 4, text: "About" },
                            { id: 5, text: "Contact" },
                        ].map((linkText) => (
                            <a
                                href="/"
                                className="hover:border-b-2 hover:pb-2 duration-100 hover:border-orange-500"
                                key={linkText.id}
                            >
                                {linkText.text}
                            </a>
                        ))}
                    </nav>,
                    document.getElementById("backdrop-root")
                )}
            </div>
            <div className="flex gap-x-5 md:gap-x-10 items-center relative">
                <img
                    src={cartIcon}
                    alt="Cart Icon"
                    className="h-6 cursor-pointer"
                    onClick={showCart}
                />
                {cartValue > 0 && (
                    <div className="bg-orange-500 px-1.5 text-white rounded-full text-[12px] font-bold absolute top-[-1px] md:top-[7px] left-[13px]">
                        {cartValue}
                    </div>
                )}
                <img
                    src={avatar}
                    alt="User"
                    className="h-10 md:h-14 cursor-pointer border-2 border-transparent hover:border-orange-500 rounded-full transition-colors duration-300"
                />
            </div>
            {cart && <Cart showCart={showCart} />}
        </header>
    );
};

export default Header;
