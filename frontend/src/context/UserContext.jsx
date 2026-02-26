import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL || 'https://giftbot-miniapp-production.up.railway.app';

  const fetchUser = async () => {
    console.log('[UserContext] Запуск fetchUser');

    const tg = window.Telegram?.WebApp;
    console.log('[UserContext] Telegram.WebApp доступен?', !!tg);

    if (!tg) {
      console.warn('[UserContext] Telegram.WebApp не найден — открыто не в Mini App');
      setError('Приложение открыто не в Telegram. Откройте через бота.');
      setLoading(false);
      return;
    }

    const initData = tg.initData;
    console.log('[UserContext] initData:', initData ? 'есть' : 'пустая строка');

    if (!initData) {
      console.warn('[UserContext] initData пустая');
      setError('Нет данных авторизации от Telegram.');
      setLoading(false);
      return;
    }

    try {
      console.log('[UserContext] Отправка запроса на:', `${API_URL}/api/user/init`);
      const res = await axios.post(`${API_URL}/api/user/init`, { initData });
      console.log('[UserContext] Успешный ответ от backend:', res.data);
      setUser(res.data);
      setError(null);
    } catch (e) {
      console.error('[UserContext] Ошибка при загрузке пользователя:', e.message);
      if (e.response) {
        console.error('[UserContext] Ответ сервера с ошибкой:', e.response.data);
      }
      setError('Не удалось загрузить данные пользователя. Попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('[UserContext] useEffect запущен');
    window.Telegram?.WebApp?.ready();
    window.Telegram?.WebApp?.expand();
    fetchUser();
  }, []);

  const updateUser = (newData) => {
    console.log('[UserContext] updateUser вызван с данными:', newData);
    setUser(prev => ({ ...prev, ...newData }));
  };

  return (
    <UserContext.Provider value={{ user, loading, error, updateUser, API_URL }}>
      {children}
    </UserContext.Provider>
  );
};