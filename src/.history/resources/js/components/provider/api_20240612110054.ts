import axios from "axios";

export const post = async (url: string, data: any) => {
    return await axios.post(url, data);
};
