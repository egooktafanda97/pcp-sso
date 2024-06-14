import Layouts from '@/components/layouts/Layout'
import ElementLoop from '@/components/molecules/ElementLoop'
import ElemetState from '@/components/molecules/ElemetState'
import { destroy, post, get } from '@/components/provider/api'
import React from 'react'
import { FaCriticalRole, FaPlus, FaTrash } from 'react-icons/fa'
import ElementState from '@/components/molecules/ElemetState'

export default function Roler() {
    const [permissionRole, setPermissionRole] = React.useState([])
    const [rolePermissionId, setRolePermissionId] = React.useState<any>(null)
    const [nameAct, setNameAct] = React.useState('')
    const [formShow, setFormShow] = React.useState(false)

    const hndelChangePermission = async (data: any) => {
        // let permission = data.filter((x: any) => x.active == true)
        post(`role-management/role-permission/store`, {
            data: {
                role: nameAct,
                permission: data.filter((x: any) => x.active == true).map((x: any) => x),
            },
        }).then((res) => {
            console.log(res)
        })
    }
    return (
        <Layouts>
            <div className="flex w-full h-full ">
                <div className="w-72 min-h-[700px]" aria-label="Sidebar">
                    <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800 h-full">
                        <ElemetState
                            useState={{
                                role: '',
                            }}
                        >
                            {({ state, set }) => (
                                <div className="flex items-center mb-2">
                                    <button
                                        className="p-2 ml-1 w-full items-center flex justify-center text-sm font-medium text-white bg-blue-500 rounded-lg"
                                        onClick={() => {
                                            setFormShow(true)
                                        }}
                                    >
                                        <FaPlus className="w-5 h-5 mr-2" /> Add New Aplication
                                    </button>
                                </div>
                            )}
                        </ElemetState>
                        <hr />
                        <ul className="space-y-2">
                            <ElemetState elemet="li" useState={{}}>
                                {({ state }) => (
                                    <ElementLoop apiFetching={'/role-management/show/json'}>
                                        {({ state: items }) => (
                                            <a
                                                onClick={() => {
                                                    setNameAct(items.name)
                                                    ;(async () => {
                                                        await get(`/role-management/permission/role/${items.id}/json/`, { alert: false }).then((res) => {
                                                            setRolePermissionId(res)
                                                        })
                                                    })()
                                                }}
                                                className={`flex mb-1 items-center p-2 text-base font-normal cursor-pointer rounded-lg text-white hover:bg-gray-700 ${nameAct == items.name ? 'bg-gray-900' : ''}`}
                                            >
                                                <FaCriticalRole />
                                                <span className="flex-1 ml-3 whitespace-nowrap">{items.name ?? ''}</span>
                                                <button
                                                    className="text-red-300 hover:text-red-500"
                                                    onClick={async (e) => {
                                                        e.stopPropagation() // Prevent the click event from propagating to the parent element
                                                        await destroy(`/role-management/destroy/${items.id}`, {
                                                            data: {
                                                                id: items.id,
                                                            },
                                                        }).then((res) => {
                                                            window.location.reload()
                                                        })
                                                    }}
                                                >
                                                    <FaTrash />
                                                </button>
                                            </a>
                                        )}
                                    </ElementLoop>
                                )}
                            </ElemetState>
                        </ul>
                    </div>
                </div>
                <div className="w-full ml-2">
                    <div className="h-full">
                        {/* card check box permission here. */}

                        <div className="row h-full">
                            <div className="col-4 h-full">
                                <div className="shadow-md h-full bg-white">
                                    <div className="p-3 flex justify-center flex-col items-center ">
                                        <div className="w-full flex justify-center">
                                            <span className="text-3xl font-bold">Entry New Apps</span>
                                        </div>
                                        <div className="w-full">
                                            <hr className="border-1 border-gray-500 w-1/2 m-auto" />
                                        </div>
                                    </div>
                                    <div>
                                        <ElementState useState={{}}>
                                            {({ state, set }) => {
                                                return (
                                                    <div className="p-2">
                                                        <div className="col-12">
                                                            <div className="p-3">
                                                                <label htmlFor="name" className="text-lg">
                                                                    Name
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="name"
                                                                    id="name"
                                                                    className="w-full p-2 border-2 border-gray-300 rounded-lg"
                                                                    placeholder="Name"
                                                                    onChange={(e) => {
                                                                        if (set)
                                                                            set({
                                                                                [e.target.name]: e.target.value,
                                                                            })
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="p-3">
                                                                <label htmlFor="description" className="text-lg">
                                                                    Deskripsi
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="description"
                                                                    id="description"
                                                                    className="w-full p-2 border-2 border-gray-300 rounded-lg"
                                                                    placeholder="Deskripsi"
                                                                    onChange={(e) => {
                                                                        if (set)
                                                                            set({
                                                                                [e.target.name]: e.target.value,
                                                                            })
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="p-3">
                                                                <label htmlFor="appUrl" className="text-lg">
                                                                    Url Aplikasi
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="appUrl"
                                                                    id="appUrl"
                                                                    className="w-full p-2 border-2 border-gray-300 rounded-lg"
                                                                    placeholder="Url Aplikasi"
                                                                    onChange={(e) => {
                                                                        if (set)
                                                                            set({
                                                                                [e.target.name]: e.target.value,
                                                                            })
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="p-3">
                                                                <label htmlFor="ssoUrl" className="text-lg">
                                                                    Url Login SSO
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="ssoUrl"
                                                                    id="ssoUrl"
                                                                    className="w-full p-2 border-2 border-gray-300 rounded-lg"
                                                                    placeholder="Url Login SSO"
                                                                    onChange={(e) => {
                                                                        if (set)
                                                                            set({
                                                                                [e.target.name]: e.target.value,
                                                                            })
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="p-3">
                                                                <label htmlFor="code" className="text-lg">
                                                                    Kode
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="code"
                                                                    id="code"
                                                                    className="w-full p-2 border-2 border-gray-300 rounded-lg"
                                                                    placeholder="Kode"
                                                                    onChange={(e) => {
                                                                        if (set)
                                                                            set({
                                                                                [e.target.name]: e.target.value,
                                                                            })
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="p-3">
                                                                <label htmlFor="permissions" className="text-lg">
                                                                    Permissions
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="permissions"
                                                                    id="permissions"
                                                                    className="w-full p-2 border-2 border-gray-300 rounded-lg"
                                                                    placeholder="Permissions"
                                                                    onChange={(e) => {
                                                                        if (set)
                                                                            set({
                                                                                [e.target.name]: e.target.value,
                                                                            })
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="flex justify-end items-center">
                                                                <button
                                                                    className="btn btn-primary"
                                                                    onClick={() => {
                                                                        console.log(state)
                                                                    }}
                                                                >
                                                                    Simpan
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }}
                                        </ElementState>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 h-full">
                                <div className="shadow-md h-full bg-white">
                                    <div className="p-3 flex justify-center flex-col items-center ">
                                        <div className="w-full flex justify-center">
                                            <span className="text-3xl font-bold">Permission & App Access</span>
                                        </div>
                                        <div className="w-full">
                                            <hr className="border-1 border-gray-500 w-1/2 m-auto" />
                                        </div>
                                    </div>
                                    <div>
                                        <ElementState
                                            useState={{
                                                itemPermisiion: permissionRole?.map((x: any) => {
                                                    // jika x.nama ada pada rolePermissionId maka activce true dan rolePermissionId ada alah object
                                                    // jika tidak ada maka active false
                                                    return {
                                                        id: x.id,
                                                        name: x.name,
                                                        active: rolePermissionId?.permissions?.find((y: any) => y.name == x.name) ? true : false,
                                                    }
                                                }),
                                            }}
                                        >
                                            {({ state, set }) => {
                                                const permissionList = state
                                                const setList = set ?? ((x) => {})
                                                return (
                                                    <div className="p-3 h-full overflow-auto">
                                                        <div className="p-2">
                                                            <div className="flex justify-between">
                                                                <span>All</span>
                                                                <input
                                                                    type="checkbox"
                                                                    name="all"
                                                                    id="all"
                                                                    onChange={(e) => {
                                                                        const newFreshDataPermission = permissionList.itemPermisiion.map((x: any) => {
                                                                            return {
                                                                                ...x,
                                                                                active: e.target.checked,
                                                                            }
                                                                        })
                                                                        if (setList) {
                                                                            setList({
                                                                                itemPermisiion: newFreshDataPermission,
                                                                            })
                                                                            hndelChangePermission(newFreshDataPermission)
                                                                        }
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <ElementLoop
                                                            apiFetching={'/role-management/permission/show/json'}
                                                            response={(res: any) => {
                                                                setPermissionRole(res)
                                                            }}
                                                        >
                                                            {({ state: items }) => (
                                                                <ElementState
                                                                    useState={{
                                                                        itemName: '',
                                                                    }}
                                                                >
                                                                    {({ state, set }) => {
                                                                        return (
                                                                            <div className="p-2 shadow-sm rounded-md felx items-center hover:bg-gray-100 cursor-pointer">
                                                                                <div className="flex justify-between items-center m-0 p-0">
                                                                                    <label htmlFor={items.name} className="text-xl m-0 p-0">
                                                                                        {items.name}
                                                                                    </label>
                                                                                    <input
                                                                                        className="m-0 p-0"
                                                                                        defaultChecked={false}
                                                                                        checked={permissionList.itemPermisiion?.find((x: any) => x.name == items.name)?.active}
                                                                                        disabled={nameAct?.length == 0 ? true : false}
                                                                                        onChange={(e) => {
                                                                                            const newFreshDataPermission = permissionList.itemPermisiion.map((x: any) => {
                                                                                                if (x.name === items.name) {
                                                                                                    return {
                                                                                                        ...x,
                                                                                                        active: e.target.checked,
                                                                                                    }
                                                                                                }
                                                                                                return x
                                                                                            })

                                                                                            if (setList) {
                                                                                                setList({
                                                                                                    itemPermisiion: newFreshDataPermission,
                                                                                                })
                                                                                                hndelChangePermission(newFreshDataPermission)
                                                                                            }
                                                                                        }}
                                                                                        type="checkbox"
                                                                                        name={items.name}
                                                                                        id={items.name}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    }}
                                                                </ElementState>
                                                            )}
                                                        </ElementLoop>
                                                    </div>
                                                )
                                            }}
                                        </ElementState>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layouts>
    )
}
