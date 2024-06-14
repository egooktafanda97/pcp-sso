import axios from "axios";
interface PostProps {
    data: any;
    url: string;
    headers?: any;
}
export const post = async (props: PostProps) => {
    try {
        const response = await axios.post(props.url, props.data, {
            headers: props.headers,
        });
        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
};
