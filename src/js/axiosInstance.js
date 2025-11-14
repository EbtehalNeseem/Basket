import axios from "axios";
import { useUserToken } from "../Store/userStore";


const api = axios.create({
  baseURL: "https://e-commarce-website-eight.vercel.app/api/v1",
});


api.interceptors.request.use(
  (config) => {
    const { accessToken } = useUserToken.getState();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
   
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { refreshToken } = useUserToken.getState();
        const refreshResponse = await axios.post(
          "https://e-commarce-website-eight.vercel.app/api/v1/auth/refresh",
          {refreshToken: refreshToken}
        );

        const newAccessToken = refreshResponse.data.AccessToken;

       
        const { setTokens, refreshToken: oldRefresh } = useUserToken.getState();
        setTokens(newAccessToken, oldRefresh);

        
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
      
        useUserToken.getState().clearTokens();
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;