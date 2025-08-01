import {jwtDecode} from 'jwt-decode';

export function getToken() {
  return localStorage.getItem("token");
}


export function setToken(token) {
    // implement your logic to set the token
    localStorage.setItem("token", token);
}

export function logout() {
    // implement your logic to remove the token
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
    return null;
  }
};

