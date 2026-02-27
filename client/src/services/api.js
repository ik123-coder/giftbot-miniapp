import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080',
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    if (window.Telegram?.WebApp?.initData) {
      config.headers['x-init-data'] = window.Telegram.WebApp.initData;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const getProfile = () => api.get('/api/user/profile');
export const updateBalance = (amount) => api.post('/api/user/balance', { amount });

// Пока заглушки для других
export const getTasks = () => api.get('/api/tasks');
export const applyPromo = (code) => api.post('/api/promos/apply', { code });

export default api;