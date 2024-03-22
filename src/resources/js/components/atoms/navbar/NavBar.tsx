import React from "react";

export default function NavBar() {
    return (
        <header className="pc-header">
            <div className="m-header">
                <a href="index.html" className="b-brand">
                    {/* ========   change your logo hear   ============ */}
                    <img
                        src="https://dashops.pcpexpress.com/images/logo/1_Logo_PCP_Express.png"
                        className="logo logo-lg max-h-5"
                    />
                </a>
                {/* ======= Menu collapse Icon ===== */}
                <div className="pc-h-item">
                    <a
                        href="#"
                        className="pc-head-link head-link-secondary m-0"
                        id="sidebar-hide"
                    >
                        <i className="ti ti-menu-2" />
                    </a>
                </div>
            </div>
            <div className="header-wrapper">
                {" "}
                {/* [Mobile Media Block] start */}
                <div className="me-auto pc-mob-drp">
                    <ul className="list-unstyled">
                        <li className="pc-h-item header-mobile-collapse">
                            <a
                                href="#"
                                className="pc-head-link head-link-secondary ms-0"
                                id="mobile-collapse"
                            >
                                <i className="ti ti-menu-2" />
                            </a>
                        </li>
                        <li className="dropdown pc-h-item d-inline-flex d-md-none">
                            <a
                                className="pc-head-link head-link-secondary dropdown-toggle arrow-none m-0"
                                data-bs-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                            >
                                <i className="ti ti-search" />
                            </a>
                            <div className="dropdown-menu pc-h-dropdown drp-search">
                                <form className="px-3">
                                    <div className="form-group mb-0 d-flex align-items-center">
                                        <i className="ti ti-search" />
                                        <input
                                            type="search"
                                            className="form-control border-0 shadow-none"
                                            placeholder="Search here..."
                                        />
                                    </div>
                                </form>
                            </div>
                        </li>
                        <li className="pc-h-item d-none d-md-inline-flex">
                            <form className="header-search">
                                <i className="ti ti-search icon-search" />
                                <input
                                    type="search"
                                    className="form-control"
                                    placeholder="Search here..."
                                />
                                <button className="btn btn-light-secondary btn-search">
                                    <i className="ti ti-adjustments-horizontal" />
                                </button>
                            </form>
                        </li>
                    </ul>
                </div>
                {/* [Mobile Media Block end] */}
                <div className="ms-auto">
                    <ul className="list-unstyled">
                        <li className="dropdown pc-h-item">
                            <a
                                className="pc-head-link head-link-secondary dropdown-toggle arrow-none me-0"
                                data-bs-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                            >
                                <i className="ti ti-bell" />
                            </a>
                            <div className="dropdown-menu dropdown-notification dropdown-menu-end pc-h-dropdown">
                                <div className="dropdown-header">
                                    <a
                                        href="#!"
                                        className="link-primary float-end text-decoration-underline"
                                    >
                                        Mark as all read
                                    </a>
                                    <h5>
                                        All Notification{" "}
                                        <span className="badge bg-warning rounded-pill ms-1">
                                            01
                                        </span>
                                    </h5>
                                </div>
                                <div
                                    className="dropdown-header px-0 text-wrap header-notification-scroll position-relative"
                                    style={{ maxHeight: "calc(100vh - 215px)" }}
                                >
                                    <div className="list-group list-group-flush w-100">
                                        <div className="list-group-item">
                                            <select className="form-select">
                                                <option value="all">
                                                    All Notification
                                                </option>
                                                <option value="new">New</option>
                                                <option value="unread">
                                                    Unread
                                                </option>
                                                <option value="other">
                                                    Other
                                                </option>
                                            </select>
                                        </div>
                                        <a className="list-group-item list-group-item-action">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        src="../assets/images/user/avatar-2.jpg"
                                                        alt="user-image"
                                                        className="user-avtar"
                                                    />
                                                </div>
                                                <div className="flex-grow-1 ms-1">
                                                    <span className="float-end text-muted">
                                                        2 min ago
                                                    </span>
                                                    <h5>John Doe</h5>
                                                    <p className="text-body fs-6">
                                                        It is a long established
                                                        fact that a reader will
                                                        be distracted{" "}
                                                    </p>
                                                    <div className="badge rounded-pill bg-light-danger">
                                                        Unread
                                                    </div>
                                                    <div className="badge rounded-pill bg-light-warning">
                                                        New
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="list-group-item list-group-item-action">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <div className="user-avtar bg-light-success">
                                                        <i className="ti ti-building-store" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-1">
                                                    <span className="float-end text-muted">
                                                        3 min ago
                                                    </span>
                                                    <h5>
                                                        Store Verification Done
                                                    </h5>
                                                    <p className="text-body fs-6">
                                                        We have successfully
                                                        received your request.
                                                    </p>
                                                    <div className="badge rounded-pill bg-light-danger">
                                                        Unread
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="list-group-item list-group-item-action">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <div className="user-avtar bg-light-primary">
                                                        <i className="ti ti-mailbox" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-1">
                                                    <span className="float-end text-muted">
                                                        5 min ago
                                                    </span>
                                                    <h5>Check Your Mail.</h5>
                                                    <p className="text-body fs-6">
                                                        All done! Now check your
                                                        inbox as you're in for a
                                                        sweet treat!{" "}
                                                    </p>
                                                    <button className="btn btn-sm btn-primary">
                                                        Mail{" "}
                                                        <i className="ti ti-brand-telegram" />
                                                    </button>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="list-group-item list-group-item-action">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        src="../assets/images/user/avatar-1.jpg"
                                                        alt="user-image"
                                                        className="user-avtar"
                                                    />
                                                </div>
                                                <div className="flex-grow-1 ms-1">
                                                    <span className="float-end text-muted">
                                                        8 min ago
                                                    </span>
                                                    <h5>John Doe</h5>
                                                    <p className="text-body fs-6">
                                                        Uploaded two file on
                                                        &nbsp;
                                                        <strong>
                                                            21 Jan 2020
                                                        </strong>
                                                    </p>
                                                    <div className="notification-file d-flex p-3 bg-light-secondary rounded">
                                                        <i className="ti ti-arrow-bar-to-down" />
                                                        <h5 className="m-0">
                                                            demo.jpg
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="list-group-item list-group-item-action">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        src="../assets/images/user/avatar-3.jpg"
                                                        alt="user-image"
                                                        className="user-avtar"
                                                    />
                                                </div>
                                                <div className="flex-grow-1 ms-1">
                                                    <span className="float-end text-muted">
                                                        10 min ago
                                                    </span>
                                                    <h5>Joseph William</h5>
                                                    <p className="text-body fs-6">
                                                        It is a long established
                                                        fact that a reader will
                                                        be distracted{" "}
                                                    </p>
                                                    <div className="badge rounded-pill bg-light-success">
                                                        Confirmation of Account
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="dropdown-divider" />
                                <div className="text-center py-2">
                                    <a href="#!" className="link-primary">
                                        Mark as all read
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown pc-h-item header-user-profile">
                            <a
                                className="pc-head-link head-link-primary dropdown-toggle arrow-none me-0"
                                data-bs-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                            >
                                <img
                                    src="../assets/images/user/avatar-2.jpg"
                                    alt="user-image"
                                    className="user-avtar"
                                />
                                <span>
                                    <i className="ti ti-settings" />
                                </span>
                            </a>
                            <div className="dropdown-menu dropdown-user-profile dropdown-menu-end pc-h-dropdown">
                                <div className="dropdown-header">
                                    <h4>
                                        Good Morning,{" "}
                                        <span className="small text-muted">
                                            {" "}
                                            John Doe
                                        </span>
                                    </h4>
                                    <p className="text-muted">Project Admin</p>
                                    <form className="header-search">
                                        <i className="ti ti-search icon-search" />
                                        <input
                                            type="search"
                                            className="form-control"
                                            placeholder="Search profile options"
                                        />
                                    </form>
                                    <hr />
                                    <div
                                        className="profile-notification-scroll position-relative"
                                        style={{
                                            maxHeight: "calc(100vh - 280px)",
                                        }}
                                    >
                                        <div className="upgradeplan-block bg-light-warning rounded">
                                            <h4>Explore full code</h4>
                                            <p className="text-muted">
                                                Buy now to get full access of
                                                code files
                                            </p>
                                            <a
                                                href="https://codedthemes.com/item/berry-bootstrap-5-admin-template/"
                                                target="_blank"
                                                className="btn btn-warning"
                                            >
                                                Buy Now
                                            </a>
                                        </div>
                                        <hr />
                                        <div className="settings-block bg-light-primary rounded">
                                            <div className="form-check form-switch">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    role="switch"
                                                    id="flexSwitchCheckDefault"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexSwitchCheckDefault"
                                                >
                                                    Start DND Mode
                                                </label>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    role="switch"
                                                    id="flexSwitchCheckChecked"
                                                    defaultChecked
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexSwitchCheckChecked"
                                                >
                                                    Allow Notifications
                                                </label>
                                            </div>
                                        </div>
                                        <hr />
                                        <a href="#" className="dropdown-item">
                                            <i className="ti ti-settings" />
                                            <span>Account Settings</span>
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            <i className="ti ti-user" />
                                            <span>Social Profile</span>
                                        </a>
                                        <a
                                            href="../pages/login-v3.html"
                                            className="dropdown-item"
                                        >
                                            <i className="ti ti-logout" />
                                            <span>Logout</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>{" "}
            </div>
        </header>
    );
}
