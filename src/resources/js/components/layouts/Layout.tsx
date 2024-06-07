import React from "react";
import NavBar from "../atoms/navbar/NavBar";
import Sidebar from "../atoms/sidebar/Sidebar";
import Footer from "../atoms/footer/Footer";

// react children
interface Props {
    children: React.ReactNode;
}

export default function Layouts({ children }: Props) {
    return (
        <div className="bg-white text-gray-500">
            <div className="loader-bg">
                <div className="loader-track">
                    <div className="loader-fill" />
                </div>
            </div>
            <NavBar />
            <Sidebar />
            {/* [ Main Content ] start */}
            <div className="pc-container">
                <div className="pc-content">{children}</div>
            </div>
            <Footer />
            {/* [ Main Content ] end */}
        </div>
    );
}
