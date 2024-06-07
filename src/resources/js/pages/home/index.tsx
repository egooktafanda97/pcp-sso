import React, { useEffect, useState } from "react";
import Layouts from "../../components/layouts/Layout";
import { usePage } from "@inertiajs/inertia-react";

const Home = () => {
    const { appServiceData } = usePage().props;

    useEffect(() => {
        console.log(appServiceData);
    });
    return (
        <Layouts>
            <div className="row">
                <div className="col-md-4">
                    <div className="w-full grid mt-12  lg:mt-5 ">
                        <a
                            href="https://dashfin.pcpexpress.com/callback"
                            className="transition-all pb-5 duration-1000  bg-[#fff] rounded-sm overflow-hidden shadow-md  hover:bg-[#1c76da]  hover:shadow-xl m-2 relative z-40 group"
                        >
                            <img
                                src="/img/items/dashops.png"
                                alt=""
                                className="w-full h-[300px]"
                            />
                            <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                            <div className="py-2 px-9 relative  ">
                                <h3 className="mt-8 text-lg font-semibold text-gray-800 group-hover:text-white  ">
                                    DASHBOARD OPERASIONAL
                                </h3>
                                <p className="mt-4 text-base text-gray-600 group-hover:text-white  ">
                                    Dashboard operasional untuk memantau seluruh
                                    kegiatan operasional base data Airwaybill
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </Layouts>
    );
};

export default Home;
