import React from "react";

interface ElementLoopProps {
    data: any[];
    children: React.ReactNode;
}

export default function ElementLoop({ data, children }: ElementLoopProps) {
    return (
        <>
            {data.map((x, i) => (
                <React.Fragment key={i}>{children}</React.Fragment>
            ))}
        </>
    );
}
