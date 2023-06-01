import React from "react";
// import chevron_down from "../assets/chevron_down.png";

interface Props {
    heading?: string;
    children?: React.ReactNode;
}

const ClassesInfo: React.FC<Props> = ({ heading, children }) => {
    return (
        <div className="flex flex-col items-center xl:items-start mt-4 xl:mt-0 ">
            <div className="class_info">
                <h3 className="hidden lg:block my-2 text-my_grey">{heading}</h3>
                <div className="bg-white px-6 py-2 flex flex-col items-center space-x-2 rounded-lg justify-between">
                    <form onSubmit={(event) => event.preventDefault()}>
                        {children}
                        {/* <img src={chevron_down} alt="" className="h-full" /> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ClassesInfo;
