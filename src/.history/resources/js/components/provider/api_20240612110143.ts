import axios from "axios";
interface PostProps {
    data: any;
    url: string;
    headers?: any;
}
export const post = async (props) => {
    return await axios.post(url, data);
};
