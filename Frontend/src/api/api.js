import axios from "axios";

const BASE_URL = "http://localhost:4000/api/v1/user";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const userRegister = (userData) => {
  return axiosInstance.post("/register", userData);
};
export const userLogin = (userData) => {
  return axiosInstance.post("/login", userData);
};
export const userLogout = () => {
  return axiosInstance.get("/logout");
};
