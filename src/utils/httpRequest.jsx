import axios from "axios";

// Lấy token
const tokenLocalStorage = localStorage.getItem("token");
const token =
  tokenLocalStorage != null ? tokenLocalStorage.replaceAll('"', "") : "";

// Tạo instance Axios
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  },
});

// Cập nhật baseURL
axiosInstance.defaults.baseURL = process.env.REACT_APP_API_SERVER;

export const get = async (url, config = {}) => {
  const res = await axiosInstance.get(url, config);
  return res.data;
};

export const post = async (url, data, config = {}) => {
  const res = await axiosInstance.post(url, data, config);
  return res.data;
};

export default axiosInstance;
