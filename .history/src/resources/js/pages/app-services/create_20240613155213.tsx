import React, { useEffect, useState } from 'react'
import Layouts from '../../components/layouts/Layout'
import { usePage } from '@inertiajs/inertia-react'
import ElementState from '@/components/molecules/ElemetState'
import { FaPlus } from 'react-icons/fa'
const Home = (props: any) => {
    const { appServiceData } = props
    const [app, setApp] = useState([])
    useEffect(() => {
        setApp(appServiceData)
    }, [])
    return (
        <Layouts>
            <div className="row">
                <div className="col-md-12">
                    <div className="w-full flex justify-between items-center">
                        <h1 className="text-3xl font-semibold text-gray-800">App Services</h1>
                        <div className="flex items-center">
                            <a href="/app-services/create" className="bg-blue-500 text-white px-4 py-2 rounded-sm flex justify-center items-center">
                                <FaPlus /> <span className="ml-2">Add App Service</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layouts>
    )
}

export default Home
