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
            <div className="row">{console.log(app)}</div>
        </Layouts>
    );
};

export default Home;
