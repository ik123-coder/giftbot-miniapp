import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isTelegram, setIsTelegram] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      setIsTelegram(true);
      tg.ready();
      tg.expand();

      const initData = tg.initData;
      if (initData) {
        fetchUser(initData);
      } else {
        setError('Нет данных авторизации от Telegram');
        setLoading(false);
      }
    } else {
      // Открыто в обычном браузере — пропускаем авторизацию
      setIsTelegram(false);
      setLoading(false);
      // Можно задать демо-юзера, если хочешь
      // setUser({ firstName: 'Гость', balance: 0 });
    }
  }, []);

  const fetchUser = async (initData) => {
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

  const updateUser = (newData) => setUser(prev => ({ ...prev, ...newData }));

  return (
    <UserContext.Provider value={{ user, loading, error, updateUser, API_URL, isTelegram }}>
      {children}
    </UserContext.Provider>
  );
};