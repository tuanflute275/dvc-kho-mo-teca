import * as http from '~/utils/httpRequest';

export const baseGetRequest = async (url, params = {}) => {
    try {
        const res = await http.get(url, { params });
         return [res, null];
    } catch (error) {
        console.error('GET request error:', error.response || error);
        return [null, error];
    }
};

export const basePostRequest = async (url, data = {}) => {
    try {
        const res = await http.post(url, data);
         return [res, null];
    } catch (error) {
        console.error('POST request error:', error.response || error);
        return [null, error];
    }
};
