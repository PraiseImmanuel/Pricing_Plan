import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ForeignerPlan from "./ForeignerPlan";

import Intro from "./Intro";
import Native from "./Native";

const PageWrapper = () => {
    return (
        <BrowserRouter>
            <div className="page_wrapper font-body px-10 lg:px-20 py-14 md:p-8 xl:p-20 bg-bg_color">
                <Intro />
                <Routes>
                    <Route path="/" element={<Native />} />

                    <Route path="/foreigner" element={<ForeignerPlan />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default PageWrapper;
