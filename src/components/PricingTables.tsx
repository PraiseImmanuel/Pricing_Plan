import React from "react";

interface Props {
    children: React.ReactNode;
}

const PricingTables: React.FC<Props> = ({ children }) => {
    return (
        <div className="pricing_tables flex space-x-6 md:space-x-3 mt-8 xl:mt-0 overflow-x-scroll xl:overflow-hidden md:mx-10">
            {children}
        </div>
    );
};

export default PricingTables;
