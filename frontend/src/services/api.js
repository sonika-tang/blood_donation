import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Create Axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor: attach token before each request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    console.log('Using token:', token); // Add this
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


// Auth services
export const authServices = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
};

// Inventory services
export const inventoryServices = {
  getInventory: () => api.get('/inventory'),
};

// Request services
export const requestServices = {
  createRequest: (requestData) => api.post('/requests', requestData),
  getUserRequests: () => api.get('/requests/user'),
};

// Donation services
export const donationServices = {
  scheduleDonation: (donationData) => api.post('/appointments', donationData),
  getDonationHistory: () => api.get('/history'),
  getDonationAppointments: () => api.get('/appointments/user'),
};

// Donation center services
export const centerServices = {
  getDonationCenters: () => api.get('/donation-centers'),
};

export default api;
