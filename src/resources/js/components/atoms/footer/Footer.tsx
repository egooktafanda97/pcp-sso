import React from "react";

export default function Footer() {
    return (
        <footer className="pc-footer">
            <div className="footer-wrapper container-fluid">
                <div className="row">
                    <div className="col my-1">
                        <p className="m-0">
                            Copyright ©{" "}
                            <a href="https://codedthemes.com/" target="_blank">
                                Codedthemes
                            </a>
                        </p>
                    </div>
                    <div className="col-auto my-1">
                        <ul className="list-inline footer-link mb-0">
                            <li className="list-inline-item">
                                <a
                                    href="https://codedthemes.com/"
                                    target="_blank"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    href="https://codedthemes.com/privacy-policy/"
                                    target="_blank"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    href="https://codedthemes.com/contact/"
                                    target="_blank"
                                >
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
