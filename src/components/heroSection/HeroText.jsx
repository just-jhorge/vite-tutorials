import React, { useContext } from "react";
import { ReactComponent as CartIcon } from "../../assets/images/icon-cart-white.svg";
import { ReactComponent as Minus } from "../../assets/images/icon-minus.svg";
import { ReactComponent as Plus } from "../../assets/images/icon-plus.svg";
import SneakersContext from "../../store/sneakers-context";

const HeroText = () => {
    const { minusCart, plusCart, sneakersValue, addCartHandler } =
        useContext(SneakersContext);

    return (
        <div className="w-[90%] md:w-1/2 flex flex-col my-5 mx-auto gap-y-4">
            <p className="text-orange-500 font-bold">SNEAKER COMPANY</p>
            <p className="text-4xl lg:text-5xl font-bold">
                Fall Limited Edition Sneakers
            </p>
            <p className="text-gray-500">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.
            </p>

            <div className="flex flex-row items-center md:items-start justify-between md:flex-col">
                <p className="flex items-center justify-center text-2xl font-bold md:mb-3">
                    $124.99{" "}
                    <span className="bg-orange-100 text-orange-500 ml-2 text-sm p-1 rounded-lg">
                        50%
                    </span>
                </p>
                <del className="text-gray-400 text-sm font-bold">$249.99</del>
            </div>

            <div className="flex justify-between flex-col lg:flex-row">
                <div className="heroTextBtn">
                    <div
                        className="p-4 cursor-pointer"
                        onClick={() => minusCart()}
                    >
                        <Minus />
                    </div>
                    <p>{sneakersValue}</p>
                    <div
                        className="p-4 cursor-pointer"
                        onClick={() => plusCart()}
                    >
                        <Plus />
                    </div>
                </div>
                <button className="addCart" onClick={() => addCartHandler()}>
                    <CartIcon />
                    <p className="text-white font-bold">Add to cart</p>
                </button>
            </div>
        </div>
    );
};

export default HeroText;
