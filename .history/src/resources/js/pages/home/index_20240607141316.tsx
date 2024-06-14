import React, { useEffect, useState } from "react";
import Layouts from "../../components/layouts/Layout";
import { usePage } from "@inertiajs/inertia-react";
import ElementState from "@/components/molecules/ElemetState";
const Home = (props: any) => {
    const { appServiceData } = props;
    useEffect(() => {
        console.log(props);
    });
    return (
        <Layouts>
            <div className="row">
                <ElementState
                    useState={{
                        app: [],
                    }}
                    onClick={({ state, set }) => {
                        set({
                            app: appServiceData,
                        });
                    }}
                ></ElementState>
            </div>
        </Layouts>
    );
};

export default Home;
