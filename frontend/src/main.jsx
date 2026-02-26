import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL || 'https://giftbot-miniapp-production.up.railway.app'; // твой backend-домен

  useEffect(() => {
    console.log('[UserContext] useEffect запущен');

    const tg = window.Telegram?.WebApp;
    if (!tg) {
      console.warn('[UserContext] Telegram.WebApp не найден');
      setError('Приложение открыто не в Telegram Mini App');
      setLoading(false);
      return;
    }

    tg.ready();
    tg.expand();

    const initData = tg.initData || '';
    console.log('[UserContext] initData длина:', initData.length);

    if (!initData) {
      console.warn('[UserContext] initData пустая');
      setError('Нет данных авторизации от Telegram');
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        console.log('[UserContext] Запрос на backend:', `${API_URL}/api/user/init`);
        const res = await axios.post(`${API_URL}/api/user/init`, { initData }, {
          timeout: 15000 // таймаут 15 сек
        });
        console.log('[UserContext] Данные пользователя получены:', res.data);
        setUser(res.data);
        setError(null);
      } catch (e) {
        console.error('[UserContext] Ошибка запроса:', e.message);
        if (e.response) console.error('[UserContext] Ответ сервера:', e.response.data);
        setError('Не удалось загрузить данные. Попробуйте перезапустить Mini App');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const updateUser = (newData) => setUser(prev => ({ ...prev, ...newData }));

  return (
    <UserContext.Provider value={{ user, loading, error, updateUser, API_URL }}>
      {children}
    </UserContext.Provider>
  );
};