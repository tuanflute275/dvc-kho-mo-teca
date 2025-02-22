import { API_URI } from "../utils/constants";
import * as http from "../utils/httpCommon";

export const findAll = async () => {
  try {
    const res = await http.get(API_URI.CATEGORY_VIEW);
    return [res, null];
  } catch (error) {
    return [null, error];
  }
};

export const findById = async (id) => {
  try {
    const res = await http.get(`${API_URI.CATEGORY_DETAIL}/${id}`);
    return [res, null];
  } catch (error) {
    return [null, error];
  }
};

export const save = async (data) => {
  try {
    const res = await http.post(API_URI.CATEGORY_SAVE, data);
    return [res, null];
  } catch (error) {
    return [null, error];
  }
};

