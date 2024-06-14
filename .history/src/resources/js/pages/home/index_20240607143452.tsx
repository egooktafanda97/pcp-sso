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
                                <ElementState useState={{}} onClick={{}}>
                                    {({ state }) => <b>{state?.nama}</b>}
                                </ElementState>
                                <a className="transition-all pb-5 duration-1000  bg-[#fff] rounded-sm overflow-hidden shadow-md  hover:bg-[#1c76da]  hover:shadow-xl m-2 relative z-40 group"></a>
                            </div>
                        </div>
                    ))}
            </div>
        </Layouts>
    );
};

export default Home;
