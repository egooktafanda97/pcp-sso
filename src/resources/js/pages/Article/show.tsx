import React from "react";
import Layouts from "../../components/layouts/Layout";
import moment from "moment";

export default function Show(props: any) {
    console.log(props);

    return (
        <Layouts>
            <div className="relative overflow-x-auto">
                <div className="w-full flex justify-between items-center mb-3">
                    <div></div>
                    <div>
                        <a
                            href="/article/create"
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
                                Judul
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Lang
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tanggal
                            </th>
                            <th scope="col" className="px-6 py-3">
                                #
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props?.item?.map((x: any) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-2 text-gray-700">
                                    {x?.title ?? ""}
                                </td>
                                <td className="px-6 py-2">{x?.lang ?? ""}</td>
                                <td className="px-6 py-2">
                                    {moment(x?.created_at).format(
                                        "YYYY MM DD",
                                    ) ?? ""}
                                </td>
                                <td className="px-6 py-2">-</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layouts>
    );
}
