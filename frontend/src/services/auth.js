// services/auth.js

import {jwtDecode} from 'jwt-decode';

export function getToken() {
  return localStorage.getItem("token");
}

export function setToken(token) {
  localStorage.setItem("token", token);
}

export function logout() {
  localStorage.removeItem("token");
}

export const isAuthenticated = () => {
  const token = getToken();
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    // Optional: check token expiration
    if (decoded.exp * 1000 < Date.now()) {
      return null;
    }
    return { token, user: decoded };
  } catch (err) {
    console.error("Token decode error:", err);
    return null;
  }
};
