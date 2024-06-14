import Layouts from "@/components/layouts/Layout";
import React from "react";
import ElementState from "@/components/molecules/ElemetState";
import { useForm } from "@inertiajs/inertia-react";

export default function User() {
    const { data, setData, post, progress } = useForm();

    const submit = (e: any) => {
        e.preventDefault();
        // post("/user-management", data);
        post("/user-management", {
            onSuccess: () => {
                alert("Data Berhasil disimpan");
            },
            onError: () => {
                alert("Data Gagal disimpan");
            },
        });
    };
    const handlingSave = (state: any) => {
        setData(state);
    };
    return (
        <Layouts>
            <ElementState
                elemet="div"
                useState={{
                    name: "",
                    username: "",
                    email: "",
                    password: "",
                }}
            >
                {({ state, set }) => (
                    <form
                        onSubmit={submit}
                        action=""
                        encType="multipart/form-data"
                    >
                        <div className="xl:w-1/2 lg:w-full bg-white rounded-md text-white shadow-sm m-auto py-3 px-3">
                            <div className="w-full text-center items-center mb-3">
                                <h3 className="text-lg text-bold">
                                    Form Entry Users
                                </h3>
                                <hr className="border-1 border-gray-500 w-1/2 m-auto" />
                            </div>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="title"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="name"
                                        className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="what is your name?"
                                        onChange={(e) => {
                                            if (set) {
                                                set({ name: e.target.value });
                                            }
                                        }}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="title"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="username"
                                        className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="username"
                                        onChange={(e) => {
                                            if (set) {
                                                set({
                                                    username: e.target.value,
                                                });
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="title"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="title"
                                        name="email"
                                        className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="email"
                                        onChange={(e) => {
                                            if (set) {
                                                set({ email: e.target.value });
                                            }
                                        }}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="title"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="title"
                                        name="password"
                                        className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="password"
                                        onChange={(e) => {
                                            if (set) {
                                                set({
                                                    password: e.target.value,
                                                });
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="w-full flex justify-end">
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    onClick={(e) => {
                                        // handlingSave(state);
                                    }}
                                >
                                    Simpan
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </ElementState>
        </Layouts>
    );
}
