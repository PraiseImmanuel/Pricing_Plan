import React from "react";
import ForeignerTablePlan from "./ForeignerTablePlan";

import IDataItem from "../data/dataType";

interface Props {
    table: IDataItem[];
}

const MobileForeignerPlan: React.FC<Props> = ({ table }) => {
    return (
        <div className="mobile_foreigner_plan flex overflow-scroll space-x-6 lg:hidden ">
            <ForeignerTablePlan
                heading="Regular"
                nbLessons={table[0].nbLessons}
                price={table[0].price}
            />

            <ForeignerTablePlan
                heading="Plus"
                nbLessons={table[1].nbLessons}
                price={table[1].price}
            />

            <ForeignerTablePlan
                heading="Flexi"
                nbLessons={table[2].nbLessons}
                price={table[2].price}
            />
        </div>
    );
};

export default MobileForeignerPlan;
