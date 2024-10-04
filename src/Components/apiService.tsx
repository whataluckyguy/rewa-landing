import axiosInstance from "./axiosInstance";

export const signup = (email: string, pwd: string) => {
  return axiosInstance.post("/signup", { email, pwd });
};

export const login = (email: string, pwd: string) => {
  return axiosInstance.post("/login", { email, pwd });
};
