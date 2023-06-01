import React, { useState } from "react";
import Buttons from "../components/Buttons";
import ClassesInfo from "../components/ClassesInfo";
import PricingTable from "../components/PricingTable";
import PricingTables from "../components/PricingTables";
import { nativeArray } from "../data/native";

const duration = nativeArray.map((item) => item[0]?.duration);

const Native = () => {
    const [table, setTable] = useState(nativeArray[0]);

    return (
        <div className=" xl:grid xl:justify-center mt-12">
            <Buttons type="native" />

            <div className="flex flex-col xl:flex-row justify-center mt-6 xl:mt-16">
                <ClassesInfo heading="Class Duration">
                    <select
                        className="text-sm"
                        onChange={(event) =>
                            setTable(
                                nativeArray[
                                    duration.indexOf(+event.target.value)
                                ]
                            )
                        }
                    >
                        {duration.map((item) => (
                            <option key={item} value={item}>
                                {item} Minutes
                            </option>
                        ))}
                    </select>
                </ClassesInfo>
                <PricingTables>
                    {table.map((elem) => (
                        <PricingTable
                            nbLessons={elem?.nbLessons}
                            key={elem.nbLessons}
                            price={elem?.price}
                        />
                    ))}
                </PricingTables>
            </div>
        </div>
    );
};

export default Native;
