import React from "react";

interface ElementLoopProps {
    data?: any[];
    children: React.ReactNode;
    apiFetching?: string;
}

export default function ElementLoop({
    data,
    apiFetching,
    children,
}: ElementLoopProps) {
    const [state, setState] = React.useState<any[]>([]);

    return (
        <>
            {state.map((x, i) => (
                <React.Fragment key={i}>{children}</React.Fragment>
            ))}
        </>
    );
}
