import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import axiosInstance from "../lib/axios";

const useAxiosAuth = () => {
  const { getToken, isSignedIn } = useAuth();

  useEffect(() => {
    const interceptor = axiosInstance.interceptors.request.use(
      async (config) => {
        if (isSignedIn) {
          const token = await getToken();
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axiosInstance.interceptors.request.eject(interceptor);
    };
  }, [getToken, isSignedIn]); // ← re-runs when auth state changes
};

export default useAxiosAuth;