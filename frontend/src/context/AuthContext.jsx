import { createContext, useContext, useState, useEffect } from 'react';
import { authServices } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  // Check if there's a token on mount and try to get user info
  useEffect(() => {
    const checkAuth = async () => {
      if (token) {
        try {
          // In a real app, you would verify the token with the server
          // For now we'll just use the stored user data
          const userData = JSON.parse(localStorage.getItem('user'));
          if (userData) {
            setCurrentUser(userData);
          } else {
            // If we have a token but no user data, clear auth state
            logout();
          }
        } catch (error) {
          console.error("Auth error:", error);
          logout();
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, [token]);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await authServices.login({ email, password });
      const { token, user } = response.data;
      
      // Save auth data
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      
      setToken(token);
      setCurrentUser(user);
      setLoading(false);
      return user;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      setLoading(true);
      const response = await authServices.register(userData);
      const { token, user } = response.data;
      
      // Save auth data
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      
      setToken(token);
      setCurrentUser(user);
      setLoading(false);
      return user;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    token,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!currentUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;