import React, { useState } from "react";
import Buttons from "../components/Buttons";
import ClassesInfo from "../components/ClassesInfo";

import ForeignerTablePlan from "../components/ForeignerTablePlan";
import MobileForeignerPlan from "../components/MobileForeignerPlan";

import { foreignerArrayPlans } from "../data/foreigner";

const duration = foreignerArrayPlans[0][0].map((item) => item[0].duration);

const nbLessons = foreignerArrayPlans.map((item) => item[0][0][0].nbLessons);

const ForeignerPlan: React.FC = () => {
    const [durationVal, setDurationVal] = useState(0);
    const [nblessonsVal, setNblessonsVal] = useState(0);

    const [table, setTable] = useState(foreignerArrayPlans[0][0][0]);

    const handleDurationSelect: (val: number) => void = (val) => {
        setDurationVal(val);
        setTable(foreignerArrayPlans[nblessonsVal][0][val]);
    };

    const handleClassesSelect: (val: number) => void = (val) => {
        setNblessonsVal(val);
        setTable(foreignerArrayPlans[val][0][durationVal]);
    };

    return (
        <div className="mt-12 lg:grid lg:grid-cols-plan xl:justify-center lg:overflow-x-scroll xl:overflow-clip">
            <div className="grid_foreigner_plan pricing_table_foreigner pb-8 lg:pb-0">
                <div className="flex flex-col items-center lg:block lg:pr-20">
                    <Buttons type="foreigner" />
                    <ClassesInfo heading="Class Duration">
                        <select
                            className="text-sm"
                            onChange={(event) =>
                                handleDurationSelect(
                                    duration.indexOf(+event.target.value)
                                )
                            }
                        >
                            {duration.map((item) => (
                                <option key={item} value={item}>
                                    {item} minutes
                                </option>
                            ))}
                        </select>
                    </ClassesInfo>
                    <ClassesInfo heading="Number of Classes">
                        <select
                            className="text-sm"
                            onChange={(event) =>
                                handleClassesSelect(
                                    nbLessons.indexOf(+event.target.value)
                                )
                            }
                        >
                            {nbLessons.map((item) => (
                                <option key={item} value={item}>
                                    {item} clases
                                </option>
                            ))}
                        </select>
                    </ClassesInfo>
                </div>
                <div className="lg:grid grid-rows-7 mt-4 hidden">
                    <div className="flex justify-center text-center bg-bg_color py-3 text-base">
                        <p className="text-black font-body font-normal">
                            Flexible schedule
                        </p>
                    </div>

                    <div className="flex justify-center text-center bg-grey py-3 text-base">
                        <p className="text-black font-body font-normal">
                            Reschedule class
                        </p>
                    </div>

                    <div className="flex justify-center text-center bg-bg_color py-3 text-base">
                        <p className="text-black font-body font-normal">
                            Free consultations
                        </p>
                    </div>

                    <div className="flex justify-center text-center bg-grey py-3 text-base">
                        <p className="text-black font-body font-normal">
                            Internal credits
                        </p>
                    </div>

                    <div className="flex justify-center text-center bg-bg_color py-3 text-base">
                        <p className="text-black font-body font-normal">
                            Bonus program
                        </p>
                    </div>

                    <div className="flex justify-center text-center bg-grey py-3 text-base">
                        <p className="text-black font-body font-normal">
                            Referral program
                        </p>
                    </div>

                    <div className="flex justify-center text-center bg-bg_color py-3 text-base">
                        <p className="text-black font-body font-normal">
                            Total bundle Cost
                        </p>
                    </div>
                </div>

                <div className="text-center mt-10 text-lg font-semibold hidden lg:block">
                    Or, get a trial class:
                </div>

                <button className="px-12 bg-yellow py-2 rounded-3xl font-bold text-black mt-4 h-fit max-w-fit mx-auto hidden lg:block">
                    Pay 500 ¥
                </button>
            </div>

            <div className="regular pr-6 hidden lg:block">
                <ForeignerTablePlan
                    heading="Regular"
                    nbLessons={table[0].nbLessons}
                    price={table[0].price}
                />
            </div>
            <div className="plus pr-6 hidden lg:block">
                <ForeignerTablePlan
                    heading="Plus"
                    nbLessons={table[1].nbLessons}
                    price={table[1].price}
                />
            </div>

            <div className="flexi pr-6 hidden lg:block">
                <ForeignerTablePlan
                    heading="Flexi"
                    nbLessons={table[2].nbLessons}
                    price={table[2].price}
                />
            </div>

            <MobileForeignerPlan table={table} />

            <div className="text-center mt-10 text-lg font-semibold lg:hidden">
                Or, get a trial class:
            </div>

            <button className="px-12 bg-yellow py-2 rounded-3xl font-bold text-black mt-4 h-fit max-w-fit flex mx-auto lg:hidden">
                Pay 500 ¥
            </button>
        </div>
    );
};

export default ForeignerPlan;
