// container/src/api/axios.ts
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:3001";

const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true, // allow httpOnly refresh cookie
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });
  failedQueue = [];
};

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token && config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;

    if (err.response && err.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          originalRequest.headers["Authorization"] = "Bearer " + token;
          return axios(originalRequest);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const resp = await axios.post(`${API_BASE}/auth/refresh`, {}, { withCredentials: true });
        // const newToken = resp.data.access_token;
        const newToken = (resp.data as { access_token: string }).access_token;
        localStorage.setItem("access_token", newToken);
        api.defaults.headers.common["Authorization"] = "Bearer " + newToken;
        processQueue(null, newToken);
        return api(originalRequest);
      } catch (e) {
        processQueue(e, null);
        throw e;
      } finally {
        isRefreshing = false;
      }
    }

    throw err;
  }
);

export default api;
