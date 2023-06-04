import axios from "axios";

const httpRequest = axios.create({
    baseURL: "https://opentdb.com/api.php?amount=",
})

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;