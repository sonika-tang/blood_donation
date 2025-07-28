import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
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
  scheduleDonation: (donationData) => api.post('/donations', donationData),
  getDonationHistory: () => api.get('/donations/history'),
  getDonationAppointments: () => api.get('/donations/appointments'),
};

// Donation center services
export const centerServices = {
  getDonationCenters: () => api.get('/donation-centers'),
};

export default api;