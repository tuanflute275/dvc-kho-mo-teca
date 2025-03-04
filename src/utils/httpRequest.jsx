import axios from 'axios';
import { GetValueEnviroment } from './helper';

// Lấy token
const tokenLocalStorage = localStorage.getItem('token');
const token = tokenLocalStorage != null ? tokenLocalStorage.replaceAll('"', '') : '';

// Tạo instance Axios
const axiosInstance = axios.create({
    baseURL: GetValueEnviroment('REACT_APP_API_SERVER'),
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        Authorization: token ? `Bearer ${token}` : '',
    },
});

// Cập nhật baseURL
axiosInstance.defaults.baseURL = GetValueEnviroment('REACT_APP_API_SERVER');

export const get = async (url, config = {}) => {
    const res = await axiosInstance.get(url, config);
    return res.data;
};

export const post = async (url, data, config = {}) => {
    const res = await axiosInstance.post(url, data, config);
    return res.data;
};

export default axiosInstance;

/*

    // 🛑 Interceptor: Xử lý lỗi và refresh token
    axiosInstance.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;
            if (error.response && error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                try {
                    const refreshToken = localStorage.getItem("refreshToken");
                    const res = await axios.post(GetValueEnviroment("REACT_APP_API_SERVER") + "/refresh-token", { refreshToken });

                    if (res.status === 200) {
                        localStorage.setItem("token", res.data.token);
                        axiosInstance.defaults.headers["Authorization"] = `Bearer ${res.data.token}`;
                        originalRequest.headers["Authorization"] = `Bearer ${res.data.token}`;
                        return axiosInstance(originalRequest);
                    }
                } catch (err) {
                    console.error("Refresh token failed", err);
                }
            }
            return Promise.reject(error);
        }
    );

*/

/*
1. Cú pháp (Syntax)
    fetch – Viết dài hơn, cần xử lý thủ công
        Phải kiểm tra response.ok để biết request có thành công hay không.
        Phải gọi response.json() để chuyển đổi dữ liệu.


     ✅axios – Ngắn gọn hơn
        Tự động kiểm tra lỗi, không cần if (!response.ok).
        Tự động parse JSON, không cần response.json().


     ✅axios – Tự động nhận diện lỗi HTTP

    axios.get("https://api.example.com/error")
    .catch(error => {
        console.error("Error:", error.response.status);
    });


     ✅axios dùng CancelToken (dễ dùng hơn)
    const source = axios.CancelToken.source();
    axios.get("https://api.example.com/data", { cancelToken: source.token });
    // Hủy request
    source.cancel("Request canceled!");


    ✅axios có timeout sẵn

    axios.get("https://api.example.com/data", { timeout: 5000 })
    .then(response => console.log(response.data))
    .catch(error => console.error("Timeout error:", error));


    ✅axios tự động parse JSON

    axios.get("https://api.example.com/data")
    .then(response => console.log(response.data));


    ✅Tích hợp interceptors (Chặn request/response)
    ✅ axios có thể chặn request/response trước khi gửi

    axios.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
        return config;
    });


    🎯 Kết luận – Nên dùng cái nào?
    Tiêu chí	            fetch	                            axios
    ✅ Cú pháp	            Phức tạp	                       Dễ đọc, ngắn gọn
    ✅ Xử lý lỗi HTTP	    Phải kiểm tra response.ok	        Tự động bắt lỗi
    ✅ Timeout	            Không có sẵn	                    Hỗ trợ mặc định
    ✅ Interceptors	        Không hỗ trợ	                    Có hỗ trợ
    ✅ Tự động parse JSON	Không có sẵn	                    Có sẵn
    ✅ Hủy request	        Phức tạp với AbortController	    Dễ dàng với CancelToken
*/
