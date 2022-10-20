import React, { useState } from "react";
import HeroLightbox from "./HeroLightbox";
import HeroShoes from "./HeroShoes";
import HeroText from "./HeroText";

import shoe1 from "../../assets/images/shoe1.jpg";
import shoe2 from "../../assets/images/shoe2.jpg";
import shoe3 from "../../assets/images/shoe3.jpg";
import shoe4 from "../../assets/images/shoe4.jpg";

const shoes = [
    { id: 1, shoe: shoe1 },
    { id: 2, shoe: shoe2 },
    { id: 3, shoe: shoe3 },
    { id: 4, shoe: shoe4 },
];

const Hero = () => {
    const [lightbox, setLightbox] = useState(false);

    const onLightbox = () => {
        setLightbox(!lightbox);
    };

    return (
        <main className="hero">
            <HeroLightbox
                shoes={shoes}
                shoe1={shoe1}
                lightbox={lightbox}
                onLightbox={onLightbox}
            />
            <HeroShoes shoes={shoes} shoe1={shoe1} onLightbox={onLightbox} />
            <HeroText />
        </main>
    );
};

export default Hero;
