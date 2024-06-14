import React, { useEffect, useState } from "react";
import Layouts from "../../components/layouts/Layout";
import { usePage } from "@inertiajs/inertia-react";
import ElementState from "@/components/molecules/ElemetState";
const Home = (props: any) => {
    const { appServiceData } = props;
    const [app, setApp] = useState([]);
    useEffect(() => {
        setApp(appServiceData);
    }, []);
    return (
        <Layouts>
            <div className="row">
                {app.length > 0 &&
                    app.map((item: any, index: number) => (
                        <div className="col-md-4">
                            <div className="w-full grid mt-12  lg:mt-5 ">
                                <ElementState
                                    elemet="a"
                                    href=""
                                    useState={{}}
                                    className="transition-all pb-5 duration-1000  bg-[#fff] rounded-sm overflow-hidden shadow-md  hover:bg-[#1c76da]  hover:shadow-xl m-2 relative z-40 group"
                                >
                                    {({ state }) => (
                                        <>
                                            <img
                                                src={item?.thumbnail}
                                                alt=""
                                                className="w-full h-[300px]"
                                            />
                                            <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                                            <div className="py-2 px-9 relative  ">
                                                <h3 className="mt-8 text-lg font-semibold text-gray-800 group-hover:text-white  ">
                                                    {item?.name}
                                                </h3>
                                                <p className="mt-4 text-base text-gray-600 group-hover:text-white  ">
                                                    {item?.description}
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </ElementState>
                            </div>
                        </div>
                    ))}
            </div>
        </Layouts>
    );
};

export default Home;
