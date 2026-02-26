import { useContext, useState } from 'react';
import { UserContext } from './context/UserContext';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Shop from './pages/Shop';
import Friends from './pages/Friends';
import Profile from './pages/Profile';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const { user, loading, error, isTelegram } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState('home');

  if (loading) {
    return (
      <div style={{
        height: '100vh',
        background: '#000',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem'
      }}>
        Загрузка...
      </div>
    );
  }

  // Если ошибка и это Telegram — показываем ошибку
  if (error && isTelegram) {
    return (
      <div style={{
        height: '100vh',
        background: '#000',
        color: '#ff6b6b',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        textAlign: 'center',
        fontSize: '1.4rem'
      }}>
        <h2>Ошибка</h2>
        <p style={{ marginTop: '1rem' }}>{error}</p>
        <p style={{ marginTop: '1.5rem', fontSize: '1rem', opacity: 0.8 }}>
          Закройте и откройте Mini App заново через бота
        </p>
      </div>
    );
  }

  // Если нет пользователя и это Telegram — просим открыть через бота
  if (!user && isTelegram) {
    return (
      <div style={{
        height: '100vh',
        background: '#000',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        textAlign: 'center',
        fontSize: '1.6rem'
      }}>
        <h2>Добро пожаловать!</h2>
        <p style={{ marginTop: '1.5rem' }}>
          Откройте приложение через Telegram-бота для полной авторизации
        </p>
      </div>
    );
  }

  // Нормальный режим: либо пользователь есть, либо это браузер (демо)
  const currentUser = user || { firstName: 'Гость', balance: 0 }; // демо-данные для браузера

  const pages = {
    home: <Home setActiveTab={setActiveTab} />,
    tasks: <Tasks />,
    shop: <Shop />,
    friends: <Friends />,
    profile: <Profile />
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {pages[activeTab]}
        </motion.div>
      </AnimatePresence>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;