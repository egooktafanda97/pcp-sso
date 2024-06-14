import React, { useEffect, useState } from "react";
import Layouts from "../../components/layouts/Layout";
import { usePage } from "@inertiajs/inertia-react";
import ElementState from "@/components/molecules/ElemetState";
const Home = (props: any) => {
    const { appServiceData } = props;
    const [app, setApp] = useState([]);
    useEffect(() => {
        setApp(appServiceData);
    });
    return (
        <Layouts>
            <div className="row">
                <ElementState
                    useState={{
                        app: [],
                    }}
                    init={({ state, set }) => {
                        set({
                            app: app,
                        });
                    }}
                >
                    {({ state }) => (
                        <div>
                            {console.log(state)}

                            {/* {state?.app?.map((x: any) => (
                                <div key={x.id}>{x.name}</div>
                            ))} */}
                        </div>
                    )}
                </ElementState>
            </div>
        </Layouts>
    );
};

export default Home;
