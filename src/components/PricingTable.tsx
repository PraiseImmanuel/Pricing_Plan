import React from "react";

interface IPrice {
    primary: number | null;
    secondary: number | null;
}

interface Props {
    nbLessons: number;
    price: IPrice;
}

const PricingTable: React.FC<Props> = ({ nbLessons, price }) => {
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
        <div className="pricing_table bg-white py-6 text-center text-black rounded-xl">
            <h2 className="heading mb-8 text-2xl font-bold border-b-2 border-dashed border-red w-fit m-auto">
                {nbLessons} classes
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
            <div className="slashed_total px-8 py-3 flex space-x-3 items-center justify-center bg-grey mt-6 ">
                <p className="line-through text-my_grey"> {oldPrice} ¥</p>
                <p>{price.primary} ¥</p>
            </div>
            <button className="mx-8 px-12 bg-yellow py-2 rounded-3xl font-bold text-black mt-4 ">
                Proceed
            </button>
        </div>
    );
};

export default PricingTable;
