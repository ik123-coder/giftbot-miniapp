import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchUser = async () => {
    const tg = window.Telegram?.WebApp;
    if (!tg) {
      setError('Приложение открыто не в Telegram Mini App');
      setLoading(false);
      return;
    }

    const initData = tg.initData;
    if (!initData) {
      setError('Нет данных авторизации от Telegram');
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/api/user/init`, { initData });
      setUser(res.data);
      setError(null);
    } catch (e) {
      setError('Не удалось загрузить данные пользователя');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.Telegram?.WebApp?.ready();
    window.Telegram?.WebApp?.expand();
    fetchUser();
  }, []);

  const updateUser = (newData) => setUser(prev => ({ ...prev, ...newData }));

  return (
    <UserContext.Provider value={{ user, loading, error, updateUser, API_URL }}>
      {children}
    </UserContext.Provider>
  );
};