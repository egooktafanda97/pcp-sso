import React, { useEffect } from 'react'
import axios from 'axios'
interface ElementLoopProps {
    data?: any[]
    children: (props: { state: any }) => React.ReactNode
    apiFetching?: string | any
    response?: any
    loadings?: (isLoading: boolean) => void
    refresh?: boolean
    useState?: any
}

export default function ElementLoop(props: ElementLoopProps) {
    const [state, setState] = React.useState<any[]>([])
    const [loading, setLoading] = React.useState<boolean>(true)
    const fetchData = async () => {
        let header = {}
        if (props.apiFetching?.header) {
            header = props.apiFetching.header
        }
        ;(async () => {
            props.loadings && props.loadings(true)
            const axs: any = await axios
                .get(props.apiFetching.url ?? props.apiFetching, {
                    headers: {
                        ...header,
                    },
                })
                .catch((err) => {
                    console.log(err)
                })
            if (axs.status === 200) {
                setState(axs.data)
                setLoading(false)
                if (props.response) props.response(axs.data)
                props.loadings && props.loadings(false)
            }
        })()
    }
    useEffect(() => {
        if (props.apiFetching) {
            fetchData()
        }
    }, [props.apiFetching])

    useEffect(() => {
        if (props.data) {
            fetchData()
        }
    }, [props.refresh])

    return (
        <>
            {state.map((x, i) => (
                <React.Fragment key={i}>{props?.children({ state: x })}</React.Fragment>
            ))}
        </>
    )
}
