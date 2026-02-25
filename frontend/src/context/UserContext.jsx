import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchUser = async () => {
    const initData = window.Telegram.WebApp.initData;
    if (!initData) return;

    try {
      const res = await axios.post(`${API_URL}/api/user/init`, { initData });
      setUser(res.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.expand();
    fetchUser();
  }, []);

  const updateUser = (newData) => setUser(prev => ({ ...prev, ...newData }));

  return (
    <UserContext.Provider value={{ user, loading, updateUser, API_URL }}>
      {children}
    </UserContext.Provider>
  );
};