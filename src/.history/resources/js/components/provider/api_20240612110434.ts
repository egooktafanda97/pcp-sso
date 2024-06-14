import axios from "axios";
import Swal from "sweetalert2";
interface PostProps {
    data: any;
    url: string;
    headers?: any;
    alert?: boolean;
}
export const post = async (props: PostProps) => {
    const alert = props.alert === undefined ? true : props.alert;
    try {
        const response = await axios.post(props.url, props.data, {
            headers: {
                ...props.headers,
            },
        });
        return response.data;
    } catch (error: any) {
        Swal.fire({
            title: "Error!",
            text: error.response.data.message,
            icon: "error",
            confirmButtonText: "Ok",
        });
        return error.response.data;
    }
};
