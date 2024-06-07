import React from "react";
import { useForm, usePage } from "@inertiajs/react";
import { on } from "events";

interface Props {
    status: number;
    error: any;
}

export default function LoginComponent(props: any) {
    const { errors, intended } = usePage<any>().props;
    const { data, setData, post } = useForm({
        username: "",
        password: "",
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        post("/login");
    };

    return (
        <main className="text-gray-700">
            <div>
                {/* [ Pre-loader ] start */}
                <div className="loader-bg">
                    <div className="loader-track">
                        <div className="loader-fill" />
                    </div>
                </div>
                {/* [ Pre-loader ] End */}
                <form onSubmit={handleSubmit}>
                    <div className="auth-main">
                        <div className="auth-wrapper v3">
                            <div className="auth-form">
                                <div className="card my-5">
                                    <div className="card-body">
                                        <a
                                            href="#"
                                            className="d-flex justify-content-center"
                                        >
                                            <img src="https://dashops.pcpexpress.com/images/logo/1_Logo_PCP_Express.png" />
                                        </a>
                                        <div className="row">
                                            <div className="d-flex justify-content-center">
                                                <div className="auth-header">
                                                    <h2 className="text-secondary mt-5">
                                                        <b>Hi, Welcome Back</b>
                                                    </h2>
                                                    <p className="f-16 mt-2">
                                                        Enter your credentials
                                                        to continue
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="d-grid">
                                        <button
                                            type="button"
                                            className="btn mt-2 btn-light-primary bg-light text-muted"
                                        >
                                            <img src="../assets/images/authentication/google-icon.svg" />
                                            Sign In With Google
                                        </button>
                                    </div> */}
                                        <div className="saprator mt-3">
                                            <span>or</span>
                                        </div>
                                        <h5 className="my-4 d-flex justify-content-center">
                                            Sign in with Username
                                        </h5>
                                        <div className="w-full mb-3">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className={`form-control ${
                                                        (errors ?? null) &&
                                                        "is-invalid"
                                                    }`}
                                                    id="floatingInput"
                                                    placeholder=" Username"
                                                    value={data.username}
                                                    onChange={(e) =>
                                                        setData(
                                                            "username",
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                <label htmlFor="floatingInput">
                                                    Username
                                                </label>
                                            </div>
                                            {errors && (
                                                <label
                                                    className="ml-2 text-red-500"
                                                    htmlFor=""
                                                >
                                                    username or password is
                                                    wrong
                                                </label>
                                            )}
                                        </div>

                                        <div className="w-full mb-3">
                                            <div className="form-floating">
                                                <input
                                                    type="password"
                                                    className={`form-control ${
                                                        (errors ?? null) &&
                                                        "is-invalid"
                                                    }`}
                                                    id="floatingInput"
                                                    placeholder="Password"
                                                    value={data.password}
                                                    onChange={(e) =>
                                                        setData(
                                                            "password",
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                <label htmlFor="floatingInput">
                                                    Password
                                                </label>
                                            </div>
                                            {errors && (
                                                <label
                                                    className="ml-2 text-red-500"
                                                    htmlFor=""
                                                >
                                                    username or password is
                                                    wrong
                                                </label>
                                            )}
                                        </div>
                                        <div className="d-flex mt-1 justify-content-between">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input input-primary"
                                                    type="checkbox"
                                                    id="customCheckc1"
                                                    defaultChecked
                                                />
                                                <label
                                                    className="form-check-label text-muted"
                                                    htmlFor="customCheckc1"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                            <h5 className="text-secondary">
                                                Forgot Password?
                                            </h5>
                                        </div>
                                        <div className="d-grid mt-4">
                                            <button
                                                type="submit"
                                                className="btn btn-secondary bg-secondary text-white"
                                            >
                                                Sign In
                                            </button>
                                        </div>
                                        <hr />
                                        {/* <h5 className="d-flex justify-content-center">
                                        Don't have an account?
                                    </h5> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}
