import axios from "axios";

const BASE_URL = "http://localhost:4000/api/v1/user";

export const userRegister = (userData) => {
  return axios.post(`${BASE_URL}/register`, userData);
};
export const userLogin = (userData) => {
  return axios.post(`${BASE_URL}/login`, userData);
};
export const userLogout = () => {
  return axios.get(`${BASE_URL}/logout`);
};
