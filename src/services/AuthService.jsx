import { API_URI } from "~/utils/constants";
import * as http from "~/utils/httpCommon";

export const login = async (data) => {
  try {
    const res = await http.post(API_URI.LOGIN, data);
    return [res, null];
  } catch (error) {
    return [null, error];
  }
};

export const register = async (data) => {
  try {
    const res = await http.post(API_URI.REGISTER, data);
    return [res, null];
  } catch (error) {
    return [null, error];
  }
};
