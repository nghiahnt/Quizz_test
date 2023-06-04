import * as request from "../utils/httpRequest"

export const load = async (q) => {
    try {
        const res = await request.get('', {
            q
        })
        return res.data
    } catch (error) {
        console.log(error.message);
    }
}