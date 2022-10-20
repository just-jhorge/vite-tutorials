import React, { useEffect, useState } from "react";
import HeroImages from "./HeroImages";
import shoe2 from "../../assets/images/shoe2.jpg";
import shoe3 from "../../assets/images/shoe3.jpg";
import shoe4 from "../../assets/images/shoe4.jpg";

const HeroShoes = ({ shoes, shoe1, onLightbox }) => {
    const [active, setActive] = useState(1);
    const [image, setImage] = useState(shoe1);
    const [activeCarousel, setActiveCarousel] = useState(1);

    useEffect(() => {
        if (activeCarousel > 4) {
            setActiveCarousel(1);
        } else if (activeCarousel < 1) {
            setActiveCarousel(4);
        }
    }, [activeCarousel]);

    const prevBtn = () => {
        setActiveCarousel(activeCarousel - 1);
    };

    const nextBtn = () => {
        setActiveCarousel(activeCarousel + 1);
    };

    const handleImage = (id, shoe) => {
        setActive(id);
        setImage(shoe);
    };

    return (
        <>
            <div className="w-full md:w-[40%]">
                <div className="hidden md:block h-[420px] object-contain md:h-auto overflow-hidden md:rounded-3xl cursor-pointer">
                    <img src={image} alt="shoe" onClick={onLightbox} />
                </div>
                <div className="relative md:hidden h-auto object-contain overflow-hidden cursor-pointer">
                    <button
                        className="imagesMobileBtn left-[10px]"
                        onClick={prevBtn}
                    >
                        {" "}
                        &#60;
                    </button>
                    {activeCarousel === 1 && <img src={shoe1} alt="shoe" />}
                    {activeCarousel === 2 && <img src={shoe2} alt="shoe" />}
                    {activeCarousel === 3 && <img src={shoe3} alt="shoe" />}
                    {activeCarousel === 4 && <img src={shoe4} alt="shoe" />}
                    <button
                        className="imagesMobileBtn right-[10px]"
                        onClick={nextBtn}
                    >
                        &#62;
                    </button>
                </div>
                <HeroImages
                    shoes={shoes}
                    active={active}
                    handleImage={handleImage}
                />
            </div>
        </>
    );
};

export default HeroShoes;
