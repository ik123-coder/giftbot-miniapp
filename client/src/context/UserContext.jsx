import { createContext, useContext, useState, useEffect } from 'react';
import { getProfile } from '../services/api';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(500);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      if (window.Telegram?.WebApp) {
        const tgUser = window.Telegram.WebApp.initDataUnsafe?.user;
        if (tgUser) {
          setUser(tgUser);
          try {
            const { data } = await getProfile();
            setBalance(data.balance || 500);
          } catch (err) {
            console.error('Failed to fetch profile', err);
          }
        }
      }
      setLoading(false);
    };

    init();
  }, []);

  return (
    <UserContext.Provider value={{ user, balance, setBalance, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);