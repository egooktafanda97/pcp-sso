import Layouts from "@/components/layouts/Layout";
import React from "react";
import { FaPlus } from "react-icons/fa";

export default function Roler() {
    return (
        <Layouts>
            <div className="flex w-full h-full mb-10">
                <div className="w-72 h-screen" aria-label="Sidebar">
                    <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800 h-full">
                        <div className="flex items-center mb-2">
                            <input
                                type="text"
                                className="w-full p-2 text-sm text-gray-900 rounded-lg dark:text-white dark:bg-gray-700"
                                placeholder="add new role..."
                            />
                            <button className="p-2 ml-1 text-sm font-medium text-white bg-blue-500 rounded-lg">
                                <FaPlus className="w-5 h-5" />
                            </button>
                        </div>
                        <hr />
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <svg
                                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">
                                        Kanban
                                    </span>
                                    <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                                        Pro
                                    </span>
                                </a>
                            </li>
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
