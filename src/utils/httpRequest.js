import axios from "axios";

const httpRequest = axios.create({
  baseURL: "https://opentdb.com/api.php",
});

export const get = async (path, options = {}) => {
  try {
    const response = await httpRequest.get(path, options);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to make API call");
  }
};

export default httpRequest;