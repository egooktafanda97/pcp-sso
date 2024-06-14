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
                    init={({ state, set }) => {
                        console.log("statesss", appServiceData);

                        set({
                            app: appServiceData,
                        });
                    }}
                >
                    {({ state }) => (
                        <div>
                            {console.log("state", state)}
                            {state?.app?.map((x: any) => (
                                <div key={x.id}>{x.name}</div>
                            ))}
                        </div>
                    )}
                </ElementState>
            </div>
        </Layouts>
    );
};

export default Home;
