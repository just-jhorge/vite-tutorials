import React, { useEffect, useState } from "react";

const SneakersContext = React.createContext({
    sneakersValue: null,
    cartValue: null,
    sneakersPrice: null,
    checkoutState: false,
    addCartHandler: () => {},
    plusCart: () => {},
    minusCart: () => {},
    deleteCart: () => {},
    checkoutCart: () => {},
});

export default SneakersContext;

export const SneakersContextProvider = (props) => {
    const [sneakersValue, setSneakersValue] = useState(0);
    const [cartValue, setCartValue] = useState(null);
    const [sneakersPrice, setSneakersPrice] = useState(null);
    const [checkoutState, setCheckoutState] = useState(false);

    useEffect(() => {
        if (sneakersValue < 0) {
            setSneakersValue(0);
        }

        setTimeout(() => {
            if (checkoutState === true) {
                setCheckoutState(false);
            }
        }, 4000);
    }, [sneakersValue, checkoutState]);

    const addCartHandler = () => {
        setCartValue((prevValue) => prevValue + sneakersValue);
        const price = sneakersValue * 125;
        setSneakersPrice(price);
    };

    const plusCart = () => {
        setSneakersValue(sneakersValue + 1);
    };

    const minusCart = () => {
        setSneakersValue(sneakersValue - 1);
    };

    const deleteCart = () => {
        setCartValue(null);
    };

    const checkoutCart = () => {
        setCheckoutState(true);
        setCartValue(null);
        setSneakersValue(0);
    };

    const contextValue = {
        sneakersValue,
        cartValue,
        sneakersPrice,
        checkoutState,
        addCartHandler,
        plusCart,
        minusCart,
        deleteCart,
        checkoutCart,
    };
    return (
        <SneakersContext.Provider value={contextValue}>
            {props.children}
        </SneakersContext.Provider>
    );
};
