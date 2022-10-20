import React, { useContext } from "react";
import SneakersContext from "../../store/sneakers-context";

import shoe1 from "../../assets/images/shoe1.jpg";
import deleteIcon from "../../assets/images/icon-delete.svg";

const Cart = ({ showCart }) => {
    const {
        cartValue,
        checkoutState,
        checkoutCart,
        sneakersValue,
        sneakersPrice,
        deleteCart,
    } = useContext(SneakersContext);

    return (
        <div className="cartDiv">
            <h1 className="h-full py-2 pl-5 font-bold border-b-2 border-gray-300">
                Cart
            </h1>

            <div className="py-5 grid place-items-center gap-5">
                {cartValue <= 0 && !checkoutState && (
                    <>
                        <p className="font-bold text-xl">Your cart is empty</p>
                        <button
                            className="bg-orange-500 px-4 py-2 text-white font-bold"
                            onClick={() => showCart()}
                        >
                            Close
                        </button>
                    </>
                )}

                {checkoutState && (
                    <div className="flex flex-col gap-4 items-center">
                        <img
                            src="https://c.tenor.com/qM6fp_G04OwAAAAj/tick-tick-verified.gif"
                            alt="check"
                            className="h-[100px]"
                        />
                        <p className="font-bold text-xl">
                            Your order is on the way
                        </p>
                    </div>
                )}

                {cartValue > 0 && !checkoutState && (
                    <div className="flex items-center gap-x-3 justify-between w-[90%]">
                        <img
                            src={shoe1}
                            alt="Shoe 1"
                            className="h-[60px] rounded-lg"
                        />
                        <div className="font-medium text-gray-400">
                            <p>Fall Limited Edition Sneakers</p>
                            <p>
                                $124.99 x {cartValue} :{" "}
                                <span className="font-bold text-black">
                                    {sneakersPrice}
                                </span>
                            </p>
                        </div>
                        <img
                            src={deleteIcon}
                            alt="Delete"
                            className="h-[20px] cursor-pointer"
                            onClick={() => deleteCart()}
                        />
                    </div>
                )}
                {cartValue > 0 && !checkoutState && (
                    <button
                        className="checkoutBtn"
                        onClick={() => checkoutCart()}
                    >
                        Checkout
                    </button>
                )}
            </div>
        </div>
    );
};

export default Cart;
