import React from "react";

export default function Sidebar() {
    return (
        <nav className="pc-sidebar">
            <div className="navbar-wrapper">
                <div className="m-header">
                    <a href="index.html" className="b-brand">
                        {/* ========   Change your logo from here   ============ */}
                        <img
                            src="https://dashops.pcpexpress.com/images/logo/1_Logo_PCP_Express.png"
                            className="logo logo-lg"
                        />
                    </a>
                </div>
                <div className="navbar-content">
                    <ul className="pc-navbar">
                        <li className="pc-item pc-caption">
                            <label>Dashboard</label>
                            <i className="ti ti-dashboard" />
                        </li>
                        <li className="pc-item">
                            <a
                                href="../dashboard/index.html"
                                className="pc-link"
                            >
                                <span className="pc-micon">
                                    <i className="ti ti-dashboard" />
                                </span>
                                <span className="pc-mtext">Dashboard</span>
                            </a>
                        </li>
                        <li className="pc-item pc-caption">
                            <label>Pages</label>
                            <i className="ti ti-news" />
                        </li>
                        <li className="pc-item">
                            <a href="/user-management" className="pc-link">
                                <span className="pc-micon">
                                    <i className="ti ti-dashboard" />
                                </span>
                                <span className="pc-mtext">
                                    User Management
                                </span>
                            </a>
                        </li>

                        <li className="pc-item">
                            <a href="/app-services" className="pc-link">
                                <span className="pc-micon">
                                    <i className="ti ti-dashboard" />
                                </span>
                                <span className="pc-mtext">App Services</span>
                            </a>
                        </li>
                        <li className="pc-item">
                            <a href="/role-management" className="pc-link">
                                <span className="pc-micon">
                                    <i className="ti ti-dashboard" />
                                </span>
                                <span className="pc-mtext">
                                    Role Management
                                </span>
                            </a>
                        </li>
                        {/* <li className="pc-item">
                            <a href="/article" className="pc-link">
                                <span className="pc-micon">
                                    <i className="ti ti-dashboard" />
                                </span>
                                <span className="pc-mtext">Article</span>
                            </a>
                        </li>

                        <li className="pc-item">
                            <a
                                href="../dashboard/index.html"
                                className="pc-link"
                            >
                                <span className="pc-micon">
                                    <i className="ti ti-dashboard" />
                                </span>
                                <span className="pc-mtext">Iso form</span>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
