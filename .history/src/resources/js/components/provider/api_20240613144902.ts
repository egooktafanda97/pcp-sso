import axios from 'axios'
import Swal from 'sweetalert2'
interface PostProps {
    data: any
    url?: string
    headers?: any
    alert?: boolean
}
export const post = async (url: string, props: PostProps) => {
    const alert = props.alert === undefined ? true : props.alert
    try {
        const response = await axios.post(url, props.data, {
            headers: {
                ...props.headers,
            },
        })
        if (alert)
            Swal.fire({
                title: 'Success!',
                text: response.data.message,
                icon: 'success',
                confirmButtonText: 'Ok',
            })
        return response.data
    } catch (error: any) {
        if (alert)
            Swal.fire({
                title: 'Error!',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Ok',
            })
        return error.response.data
    }
}

// destory
interface DestroyProps {
    data: any
    url?: string
    headers?: any
    alert?: boolean
}
export const destroy = async (url: string, props: DestroyProps) => {
    // alert warning
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                const response = await axios.post(url, props.data, {
                    headers: {
                        ...props.headers,
                    },
                })
                Swal.fire({
                    title: 'Deleted!',
                    text: response.data.message,
                    icon: 'success',
                    confirmButtonText: 'Ok',
                })
                return response.data
            } catch (error: any) {
                Swal.fire({
                    title: 'Error!',
                    text: error.response.data.message,
                    icon: 'error',
                    confirmButtonText: 'Ok',
                })
                return error.response.data
            }
        }
    })
}

// get
interface GetProps {
    url?: string
    headers?: any
    alert?: boolean
}

export const get = async (url: string, props?: GetProps) => {
    const alert = props.alert === undefined ? true : props.alert
    try {
        const response = await axios.get(url, {
            headers: {
                ...props.headers,
            },
        })
        if (alert)
            Swal.fire({
                title: 'Success!',
                text: response.data.message,
                icon: 'success',
                confirmButtonText: 'Ok',
            })
        return response.data
    } catch (error: any) {
        if (alert)
            Swal.fire({
                title: 'Error!',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Ok',
            })
        return error.response.data
    }
}
