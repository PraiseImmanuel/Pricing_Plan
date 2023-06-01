import React from "react";

const Intro: React.FC = () => {
    return (
        <div className="intro text-center max-w-xs md:max-w-sm lg:max-w-md mx-auto ">
            <h1 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-black">
                Transparent pricing
            </h1>
            <p className="font-body text-lg lg:text-xl mt-2 font-normal">
                “Regular” plan will get savings. On "Plus" you can reschedule
                and cancel lessons. On "Flexi" you will be accompanied by a
                mentor.
            </p>
        </div>
    );
};

export default Intro;
