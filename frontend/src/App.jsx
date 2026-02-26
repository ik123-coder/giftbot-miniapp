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
  const { user, loading, error } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState('home');

  console.log('[App] Состояние:', { loading, error: !!error, user: !!user });

  // 1. Загрузка данных
  if (loading) {
    return (
      <div style={{
        height: '100vh',
        background: '#000',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        textAlign: 'center',
        padding: '30px',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <div>Загрузка данных...</div>
        <div style={{ fontSize: '1rem', marginTop: '20px', opacity: 0.7 }}>
          Подождите 5–10 секунд
        </div>
      </div>
    );
  }

  // 2. Ошибка загрузки
  if (error) {
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
        fontFamily: 'system-ui, sans-serif'
      }}>
        <h2 style={{ marginBottom: '1.5rem', fontSize: '2.2rem' }}>Ошибка</h2>
        <p style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>{error}</p>
        <p style={{ fontSize: '1.1rem', opacity: 0.8, maxWidth: '80%' }}>
          Попробуйте закрыть и заново открыть Mini App через бота.<br />
          Если не помогает — перезапустите Telegram.
        </p>
      </div>
    );
  }

  // 3. Нет пользователя после загрузки
  if (!user) {
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
        fontSize: '1.6rem',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Добро пожаловать!</h2>
        <p style={{ marginBottom: '2rem' }}>
          Данные пользователя не загружены.<br />
          Убедитесь, что открыли приложение через Telegram-бота.
        </p>
        <button 
          onClick={() => window.Telegram?.WebApp?.close()}
          style={{
            background: '#22c55e',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            fontSize: '1.2rem',
            borderRadius: '12px',
            cursor: 'pointer'
          }}
        >
          Закрыть и открыть заново
        </button>
      </div>
    );
  }

  // 4. Нормальный рендер приложения (когда всё загрузилось)
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