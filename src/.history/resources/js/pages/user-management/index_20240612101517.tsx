import Layouts from "@/components/layouts/Layout";
import React from "react";
import ElementState from "@/components/molecules/ElemetState";
import { useForm } from "@inertiajs/inertia-react";
import axios from "axios";
import Swal from "sweetalert2";
import ElementLoop from "@/components/molecules/ElementLoop";

export default function Store() {
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
                    // table
                    <div className="relative overflow-x-auto">
                        <div className="w-full flex justify-between items-center mb-3">
                            <div></div>
                            <div>
                                <a
                                    href="/user-management/create"
                                    className="bg-gray-400 py-2 px-3 text-white flex justify-center items-center"
                                >
                                    Tambah Data
                                </a>
                            </div>
                        </div>
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Username
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        #
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <ElementLoop apiFetching={{}}>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-2 text-gray-700">
                                            {state?.name ?? ""}
                                        </td>
                                        <td className="px-6 py-2">
                                            {state?.username ?? ""}
                                        </td>
                                        <td className="px-6 py-2">
                                            {state?.email ?? ""}
                                        </td>
                                        <td className="px-6 py-2">-</td>
                                    </tr>
                                </ElementLoop>
                            </tbody>
                        </table>
                    </div>
                )}
            </ElementState>
        </Layouts>
    );
}
