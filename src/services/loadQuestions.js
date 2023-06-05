import * as request from "../utils/httpRequest";

export const load = async (q) => {
  try {
    const res = await request.get(`?amount=${q}`, {});
    return res.results;
  } catch (error) {
    console.log(error.message);
  }
};
