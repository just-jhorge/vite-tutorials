import React from "react";
import ReactDOM from "react-dom";

const BgOverlay = ({ showBg, style }) => {
    return (
        <>
            {ReactDOM.createPortal(
                <div
                    className={`${style} md:block fixed h-screen w-screen top-0 left-0 bg-black/80 z-30`}
                ></div>,
                document.getElementById("overlay-root")
            )}
        </>
    );
};

export default BgOverlay;
