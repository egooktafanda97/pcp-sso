import React, { useEffect } from "react";

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
            (async () => {
                const res = await fetch(props.apiFetching);
                const data = await res.json();
                setState(data);
                setLoading(false);
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
