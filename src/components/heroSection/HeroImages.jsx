import React from "react";

const HeroImages = ({ shoes, handleImage, active }) => {
    return (
        <div className="hidden md:flex justify-between md:mt-5 gap-1">
            {shoes.map((shoe) => {
                return (
                    <div
                        key={shoe.id}
                        className={`cursor-pointer rounded-xl bg-white overflow-hidden ${
                            active == shoe.id &&
                            "bg-white outline-2 outline outline-orange-500 duration-200"
                        }`}
                        onClick={() => {
                            handleImage(shoe.id, shoe.shoe);
                        }}
                    >
                        <img
                            src={shoe.shoe}
                            alt="shoe"
                            className={`hover:opacity-30 lg:h-[90px] xl:h-[100px] ${
                                active == shoe.id && "opacity-30"
                            }`}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default HeroImages;
