import Layouts from "@/components/layouts/Layout";
import ElementLoop from "@/components/molecules/ElementLoop";
import ElemetState from "@/components/molecules/ElemetState";
import { post } from "@/components/provider/api";
import React from "react";
import { FaCriticalRole, FaPlus, FaTrash } from "react-icons/fa";

export default function Roler() {
    return (
        <Layouts>
            <div className="flex w-full h-full ">
                <div className="w-72 h-screen" aria-label="Sidebar">
                    <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800 h-full">
                        <ElemetState
                            useState={{
                                role: "",
                            }}
                        >
                            {({ state, set }) => (
                                <div className="flex items-center mb-2">
                                    <input
                                        type="text"
                                        className="w-full p-2 text-sm text-gray-900 rounded-lg dark:text-white dark:bg-gray-700"
                                        placeholder="add new role..."
                                        onChange={(e) => {
                                            if (set)
                                                set({
                                                    role: e.target.value,
                                                });
                                        }}
                                    />
                                    <button
                                        className="p-2 ml-1 text-sm font-medium text-white bg-blue-500 rounded-lg"
                                        onClick={() => {
                                            (async () => {
                                                await post({
                                                    data: {
                                                        name: state.role,
                                                    },
                                                    url: "/role-management/store",
                                                }).then((res) => {
                                                    window.location.reload();
                                                });
                                            })();
                                        }}
                                    >
                                        <FaPlus className="w-5 h-5" />
                                    </button>
                                </div>
                            )}
                        </ElemetState>

                        <hr />
                        <ul className="space-y-2">
                            <ElementLoop
                                apiFetching={"/role-management/show/json"}
                            >
                                {({ state }) => (
                                    <li>
                                        <a
                                            // href="#"
                                            className="text-white flex items-center p-2 text-base font-normal cursor-pointer rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            <FaCriticalRole />
                                            <span className="flex-1 ml-3 whitespace-nowrap">
                                                {state.name ?? ""}
                                            </span>
                                            <button className="text-red-300 hover:text-red-500">
                                                <FaTrash />
                                            </button>
                                        </a>
                                    </li>
                                )}
                            </ElementLoop>
                        </ul>
                    </div>
                </div>
                <div className="w-full ml-2">
                    <div className="h-full w-full bg-white rounded-md shadow-md"></div>
                </div>
            </div>
        </Layouts>
    );
}
