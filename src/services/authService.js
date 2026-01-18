import axios from "axios";

const API_BASE = "https://pxmain.onrender.com/api/auth";

// Normal login
export const loginUser = async (email, password) => {
  const res = await axios.post(`${API_BASE}/login`, {
    email,
    password,
  });
  return res.data;
};

// Normal signup
export const signupUser = async (fullName, email, password) => {
  const res = await axios.post(`${API_BASE}/signup`, {
    fullName,
    email,
    password,
  });
  return res.data;
};

// Google login (redirect to backend)
export const googleLogin = () => {
  window.location.href = `${API_BASE}/google`;
};
