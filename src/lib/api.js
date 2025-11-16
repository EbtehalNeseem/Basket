// src/lib/api.js
import axios from "axios";
import { useAuthStore } from "../store/authStore";


export const api = axios.create({
  baseURL: "https://e-commarce-website-eight.vercel.app/api/v1",
});
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;  
  // console.log("TOKEN SENT =>", accessToken);
  if (token) {
    if(!config.headers) config.headers = {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});



// config.headers.Authorization = `Bearer ${token}`;