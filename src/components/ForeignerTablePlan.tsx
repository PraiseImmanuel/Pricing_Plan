import React from "react";

import tick from "../assets/tick.png";

interface IPrice {
    primary: number | null;
    secondary: number | null;
}

interface Props {
    heading: string;
    nbLessons: number;
    price: IPrice;
}

const ForeignerTablePlan: React.FC<Props> = ({ heading, nbLessons, price }) => {
    const pricePerClass =
        price.primary === null ? null : (price.primary / nbLessons).toFixed(2);

    const oldPrice =
        pricePerClass === null
            ? null
            : (+((+pricePerClass * 40) / 100 + pricePerClass)).toFixed(2);

    const oldPricePerClass =
        oldPrice === null
            ? null
            : (((+oldPrice / nbLessons) * 40) / 100).toFixed(2);

    return (
        <div className="grid_foreigner_plan pricing_table pricing_table_foreigner bg-white  text-center text-black rounded-xl">
            <div className="pt-12">
                <h2 className="heading mb-8 text-2xl font-bold border-b-2 border-dashed border-red w-fit m-auto">
                    {heading}
                </h2>
                <div className="slashed px-8 flex items-center space-x-4 text-black mt-4 justify-center">
                    <p className="text-sm font-medium line-through">
                        {oldPricePerClass} ¥
                    </p>
                    <p className="rounded-xl border border-black px-1 font-semibold text-sm">
                        -40%
                    </p>
                </div>
                <h3 className="text-5xl px-8 mt-1 text-red font-bold">
                    {pricePerClass} ¥
                    <span className="block text-sm font-normal text-black">
                        per class
                    </span>
                </h3>
            </div>

            <div className="grid grid-rows-7 mt-4">
                <div className="flex justify-center text-center bg-bg_color py-3 text-base">
                    <p
                        className={`${
                            heading === "Regular"
                                ? "text-my_grey"
                                : "text-black"
                        } font-body font-normal lg:hidden`}
                    >
                        Flexible schedule
                    </p>
                    <div className="hidden  lg:flex items-center justify-center">
                        <p
                            className={`${
                                heading === "Regular" ? "block" : "hidden"
                            }`}
                        >
                            —
                        </p>
                        <img
                            className={`${
                                heading !== "Regular" ? "block" : "hidden"
                            }`}
                            src={tick}
                            alt=""
                        />
                    </div>
                </div>

                <div className="flex justify-center text-center bg-grey py-3 text-base">
                    <p
                        className={`${
                            heading === "Regular" ? "text-my_grey" : "hidden"
                        } font-body font-normal lg:hidden`}
                    >
                        Reschedule class
                    </p>
                    <div className="">
                        <p
                            className={`hidden ${
                                heading === "Regular" ? "lg:block" : "hidden"
                            } `}
                        >
                            —
                        </p>
                        <p
                            className={`${
                                heading === "Plus" ? "block" : "hidden"
                            }`}
                        >
                            4 times a month
                        </p>

                        <p
                            className={`${
                                heading === "Flexi" ? "block" : "hidden"
                            }`}
                        >
                            No limit
                        </p>
                    </div>
                </div>

                <div className="flex justify-center text-center bg-bg_color py-3 text-base ">
                    <p
                        className={`${
                            heading !== "Flexi" ? "text-my_grey" : "text-black"
                        } font-body font-normal lg:hidden`}
                    >
                        Free consultations
                    </p>
                    <div className="hidden lg:block ">
                        <p
                            className={`${
                                heading !== "Flexi" ? "block" : "hidden"
                            }`}
                        >
                            —
                        </p>
                        <img
                            className={`${
                                heading === "Flexi" ? "block" : "hidden"
                            }`}
                            src={tick}
                            alt=""
                        />
                    </div>
                </div>

                <div className="flex justify-center text-center bg-grey py-3 text-base">
                    <p className="text-black font-body font-normal lg:hidden">
                        Internal credits
                    </p>
                    <div className="hidden lg:block">
                        <p className="hidden">—</p> <img src={tick} alt="" />
                    </div>
                </div>

                <div className="flex justify-center text-center bg-bg_color py-3 text-base">
                    <p
                        className={`${
                            heading === "Regular"
                                ? "text-my_grey"
                                : "text-black"
                        } font-body font-normal lg:hidden`}
                    >
                        Bonus program
                    </p>
                    <div className="hidden lg:block">
                        <p
                            className={`${
                                heading === "Regular" ? "block" : "hidden"
                            }`}
                        >
                            —
                        </p>
                        <img
                            className={`${
                                heading !== "Regular" ? "block" : "hidden"
                            }`}
                            src={tick}
                            alt=""
                        />
                    </div>
                </div>

                <div className="flex justify-center text-center bg-grey py-3 text-base">
                    <p
                        className={`${
                            heading === "Regular"
                                ? "text-my_grey"
                                : "text-black"
                        } font-body font-normal lg:hidden`}
                    >
                        Referral program
                    </p>
                    <div className="hidden lg:block">
                        <p
                            className={`${
                                heading === "Regular" ? "block" : "hidden"
                            }`}
                        >
                            —
                        </p>
                        <img
                            className={`${
                                heading !== "Regular" ? "block" : "hidden"
                            }`}
                            src={tick}
                            alt=""
                        />
                    </div>
                </div>

                <div className="flex justify-center text-center bg-bg_color py-3 text-base">
                    <p className="text-black font-body font-normal hidden">
                        Total bundle Cost
                    </p>
                    <div className="slashed_total flex space-x-3 items-center justify-center">
                        <p className="line-through text-my_grey">
                            {oldPrice} ¥
                        </p>
                        <p>{price.primary} ¥</p>
                    </div>
                </div>
            </div>

            <button className="mx-8 px-12 bg-yellow py-2 rounded-3xl font-bold text-black mt-4 h-fit">
                Proceed
            </button>
        </div>
    );
};

export default ForeignerTablePlan;
