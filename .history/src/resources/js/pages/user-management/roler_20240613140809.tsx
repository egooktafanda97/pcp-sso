import Layouts from '@/components/layouts/Layout'
import ElementLoop from '@/components/molecules/ElementLoop'
import ElemetState from '@/components/molecules/ElemetState'
import { destroy, post } from '@/components/provider/api'
import React from 'react'
import { FaCriticalRole, FaPlus, FaTrash } from 'react-icons/fa'
import ElementState from '@/components/molecules/ElemetState'

export default function Roler() {
    const [permissionRole, setPermissionRole] = React.useState([])
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
                                    <input
                                        type="text"
                                        className="w-full p-2 text-sm text-gray-900 rounded-lg dark:text-white dark:bg-gray-700"
                                        placeholder="add new role..."
                                        onChange={(e) => {
                                            if (set)
                                                set({
                                                    role: e.target.value,
                                                })
                                        }}
                                    />
                                    <button
                                        className="p-2 ml-1 text-sm font-medium text-white bg-blue-500 rounded-lg"
                                        onClick={() => {
                                            ;(async () => {
                                                await post('/role-management/store', {
                                                    data: {
                                                        name: state.role,
                                                    },
                                                }).then((res) => {
                                                    window.location.reload()
                                                })
                                            })()
                                        }}
                                    >
                                        <FaPlus className="w-5 h-5" />
                                    </button>
                                </div>
                            )}
                        </ElemetState>

                        <hr />
                        <ul className="space-y-2">
                            <ElemetState elemet="li" useState={{ nameAct: null }}>
                                {({ state, set }) => (
                                    <ElementLoop apiFetching={'/role-management/show/json'}>
                                        {({ state: items }) => (
                                            <a
                                                onClick={() => {
                                                    if (set)
                                                        set({
                                                            nameAct: items.name,
                                                        })
                                                }}
                                                className={`flex mb-1 items-center p-2 text-base font-normal cursor-pointer rounded-lg text-white hover:bg-gray-700 ${state.nameAct == items.name ? 'bg-gray-600' : ''}`}
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
                    <div className="h-full w-full bg-white rounded-md shadow-md">
                        {/* card check box permission here. */}

                        <div className="row h-full">
                            <div className="col-4 h-full">
                                <div className="shadow-md h-full">
                                    <div className="p-3 flex justify-center flex-col items-center ">
                                        <div className="w-full flex justify-center">
                                            <span className="text-3xl font-bold">Permission</span>
                                        </div>
                                        <div className="w-full">
                                            <hr className="border-1 border-gray-500 w-1/2 m-auto" />
                                        </div>
                                    </div>
                                    <div>
                                        <ElementState
                                            useState={{
                                                itemPermisiion: permissionRole?.map((x: any) => {
                                                    return {
                                                        name: x.name,
                                                        active: false,
                                                    }
                                                }),
                                            }}
                                        >
                                            {({ state, set }) => {
                                                const permissionList = state
                                                const setList = set ?? ((x) => {})
                                                return (
                                                    <div className="p-3 h-full overflow-auto">
                                                        <div className="p-2 shadow-sm rounded-md mb-2 hover:bg-gray-100 cursor-pointer">
                                                            <div className="flex justify-between">
                                                                <span>All</span>
                                                                <input
                                                                    type="checkbox"
                                                                    name="all"
                                                                    id="all"
                                                                    onChange={(e) => {
                                                                        if (e.target.checked) {
                                                                            if (setList) {
                                                                                setList({
                                                                                    itemPermisiion: permissionList.itemPermisiion?.map((x: any) => {
                                                                                        return {
                                                                                            name: x.name,
                                                                                            active: true,
                                                                                        }
                                                                                    }),
                                                                                })
                                                                            }
                                                                        } else {
                                                                            if (setList) {
                                                                                setList({
                                                                                    itemPermisiion: permissionList.itemPermisiion?.map((x: any) => {
                                                                                        return {
                                                                                            name: x.name,
                                                                                            active: false,
                                                                                        }
                                                                                    }),
                                                                                })
                                                                            }
                                                                        }
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
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
                                                                            <div className="p-2 shadow-sm rounded-md mb-2 hover:bg-gray-100 cursor-pointer">
                                                                                <div className="flex justify-between">
                                                                                    <label htmlFor={items.name} className="text-xl">
                                                                                        {items.name}
                                                                                    </label>
                                                                                    <input
                                                                                        defaultChecked={true}
                                                                                        onChange={(e) => {
                                                                                            if (e.target.checked) {
                                                                                                if (setList)
                                                                                                    setList({
                                                                                                        itemPermisiion: permissionList.itemPermisiion?.map((x: any) => {
                                                                                                            if (x.name == items.name) {
                                                                                                                return {
                                                                                                                    name: x.name,
                                                                                                                    active: true,
                                                                                                                }
                                                                                                            } else {
                                                                                                                return x
                                                                                                            }
                                                                                                        }),
                                                                                                    })
                                                                                            } else {
                                                                                                if (setList)
                                                                                                    setList({
                                                                                                        itemPermisiion: permissionList.itemPermisiion?.map((x: any) => {
                                                                                                            if (x.name == items.name) {
                                                                                                                return {
                                                                                                                    name: x.name,
                                                                                                                    active: false,
                                                                                                                }
                                                                                                            } else {
                                                                                                                return x
                                                                                                            }
                                                                                                        }),
                                                                                                    })
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
