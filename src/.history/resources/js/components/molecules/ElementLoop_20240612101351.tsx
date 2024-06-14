import React, { useEffect } from "react";
import axios from "axios";
interface ElementLoopProps {
    data?: any[];
    children: React.ReactNode;
    apiFetching?: string | any;
}

export default function ElementLoop(props: ElementLoopProps) {
    const [state, setState] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    useEffect(() => {
        if (props.apiFetching) {
            let header = {};
            if (props.apiFetching?.header) {
                header = props.apiFetching.header;
            }
            (async () => {
                const axs: any = await axios
                    .get(props.apiFetching.url, {
                        headers: {
                            ...header,
                        },
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                if (axs.status === 200) {
                    setState(axs.data.data);
                    setLoading(false);
                }
            })();
        }
    }, [props.apiFetching]);
    return (
        <>
            {state.map((x, i) => (
                <React.Fragment key={i}>{props.children}</React.Fragment>
            ))}
        </>
    );
}
