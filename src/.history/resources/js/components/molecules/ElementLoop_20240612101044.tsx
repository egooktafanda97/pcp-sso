import React from "react";

interface ElementLoopProps {
    data?: any[];
    children: React.ReactNode;
    apiFetching?: string;
}

export default function ElementLoop(props: ElementLoopProps) {
    const [state, setState] = React.useState<any[]>([]);

    return (
        <>
            {state.map((x, i) => (
                <React.Fragment key={i}>{props.children}</React.Fragment>
            ))}
        </>
    );
}
