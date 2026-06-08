import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import axiosInstance from "../lib/axios";

const useAxiosAuth = () => {
  const { getToken } = useAuth();

  useEffect(() => {
    const interceptor = axiosInstance.interceptors.request.use(
      async (config) => {
        try {
          const token = await getToken();
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        } catch (error) {
          console.error("Failed to get Clerk token:", error);
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axiosInstance.interceptors.request.eject(interceptor);
    };
  }, [getToken]);
};

export default useAxiosAuth;