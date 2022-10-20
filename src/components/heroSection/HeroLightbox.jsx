import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import BgOverlay from "../ui/BgOverlay";
import HeroImages from "./HeroImages";

import shoe2 from "../../assets/images/shoe2.jpg";
import shoe3 from "../../assets/images/shoe3.jpg";
import shoe4 from "../../assets/images/shoe4.jpg";

const HeroLightbox = ({ shoes, shoe1, lightbox, onLightbox }) => {
    const [activeImage, setActiveImage] = useState(1);

    const handleImage = (id) => {
        setActiveImage(id);
    };

    useEffect(() => {
        if (activeImage > 4) {
            setActiveImage(1);
        } else if (activeImage < 1) {
            setActiveImage(4);
        }
    }, [activeImage]);

    const prevBtn = () => {
        setActiveImage(activeImage - 1);
    };

    const nextBtn = () => {
        setActiveImage(activeImage + 1);
    };

    return (
        <>
            {ReactDOM.createPortal(
                <>
                    {lightbox && <BgOverlay style="hidden" />}

                    {lightbox && (
                        <div className="hidden md:block absolute left-0 right-0 top-[50px] mx-auto w-[37%] z-40">
                            <button
                                className="lightboxBtn top-[40%] left-[-30px]"
                                onClick={prevBtn}
                            >
                                &#60;
                            </button>
                            <button
                                className="lightboxBtn top-[40%] right-[-30px]"
                                onClick={nextBtn}
                            >
                                &#62;
                            </button>
                            <p
                                className="font-bold text-right pb-4 text-2xl text-white hover:text-orange-500 cursor-pointer"
                                onClick={onLightbox}
                            >
                                X
                            </p>
                            <div>
                                <div className="h-[300px] object-contain md:h-auto overflow-hidden md:rounded-3xl cursor-pointer">
                                    {activeImage === 1 && (
                                        <img src={shoe1} alt="shoe" />
                                    )}
                                    {activeImage === 2 && (
                                        <img src={shoe2} alt="shoe" />
                                    )}
                                    {activeImage === 3 && (
                                        <img src={shoe3} alt="shoe" />
                                    )}
                                    {activeImage === 4 && (
                                        <img src={shoe4} alt="shoe" />
                                    )}
                                </div>
                                <HeroImages
                                    shoes={shoes}
                                    active={activeImage}
                                    handleImage={handleImage}
                                />
                            </div>
                        </div>
                    )}
                </>,
                document.getElementById("backdrop-root")
            )}
        </>
    );
};

export default HeroLightbox;
