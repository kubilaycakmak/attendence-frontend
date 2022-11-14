import axios from "axios";

export const register = (username, full_name, password, email, type) => {
  return axios.post(`${process.env.REACT_APP_URL}/api/auth/signup`, {
    username,
    full_name,
    password,
    email,
    type,
  });
};

export const login = (email, password) => {
  return axios.post(`${process.env.REACT_APP_URL}/api/auth/login`, {
    email,
    password,
  });
};

export const forget = (email) => {
  return axios.post(`${process.env.REACT_APP_URL}/api/auth/forgot-password`, {
    email,
  });
};

export const newPassword = (id, password, token) => {
  return axios.post(`${process.env.REACT_APP_URL}/api/auth/new-password`, {
    id,
    password,
    token
  });
};