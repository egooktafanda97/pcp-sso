import axios from "axios";
import Swal from "sweetalert2";
interface PostProps {
    data: any;
    url: string;
    headers?: any;
    alert?: boolean;
}
export const post = async (url?: string, props: PostProps) => {
    const alert = props.alert === undefined ? true : props.alert;
    try {
        const response = await axios.post(props.url, props.data, {
            headers: {
                ...props.headers,
            },
        });
        if (alert)
            Swal.fire({
                title: "Success!",
                text: response.data.message,
                icon: "success",
                confirmButtonText: "Ok",
            });
        return response.data;
    } catch (error: any) {
        if (alert)
            Swal.fire({
                title: "Error!",
                text: error.response.data.message,
                icon: "error",
                confirmButtonText: "Ok",
            });
        return error.response.data;
    }
};
