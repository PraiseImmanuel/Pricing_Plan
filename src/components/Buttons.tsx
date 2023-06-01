import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    type: string;
}

const Buttons: React.FC<Props> = ({ type }) => {
    const navigate = useNavigate();

    const handleForeignerClick: () => void = () => {
        navigate("/foreigner");
    };

    const handleNativeClick: () => void = () => {
        navigate("/");
    };

    return (
        <div className="flex flex-col items-center xl:items-start mt-6 xl:mt-0 ">
            <div className="buttons flex">
                <button
                    className={`font-bold tracking-wide text-sm px-6 py-1 font-body rounded-l-lg border-2 border-r border-solid transition-all duratio-200 ease-linear hover:border-red ${
                        type === "foreigner" ? "text-black" : "text-button_grey"
                    } ${
                        type === "foreigner" ? "border-red" : " border-my_grey"
                    }`}
                    onClick={() => handleForeignerClick()}
                >
                    Foreigner
                </button>
                <button
                    className={`font-bold tracking-wide text-sm px-6 py-1 font-body rounded-r-lg border-2 border-l border-solid transition-all duratio-200 ease-linear hover:border-red  ${
                        type === "native" ? "text-black" : "text-button_grey"
                    } ${type === "native" ? "border-red" : " border-my_grey"}`}
                    onClick={() => handleNativeClick()}
                >
                    Native
                </button>
            </div>
        </div>
    );
};

export default Buttons;
