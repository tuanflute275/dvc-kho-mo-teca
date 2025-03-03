import { API_URI } from '~/utils/constants';
import { baseGetRequest, basePostRequest } from './BaseService';

const buildQueryString = (params) => {
    const queryString = new URLSearchParams(params).toString();
    return queryString ? `?${queryString}` : '';
};

export const search = async (query) => {
    return baseGetRequest(`${API_URI.DEMO_API}${buildQueryString(query)}`);
};

export const add = async (payload) => {
    return basePostRequest(API_URI.DEMO_API, payload);
};
