import Layouts from "@/components/layouts/Layout";
import React from "react";

export default function User() {
    return (
        <Layouts>
            <div className="w-full rounded-sm text-white shadow-md px-3 py-3">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label
                            htmlFor="title"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Judul
                        </label>
                        <input
                            type="text"
                            id="title"
                            className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John"
                        />
                    </div>
                </div>
            </div>
        </Layouts>
    );
}
