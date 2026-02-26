import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Shop from './pages/Shop';
import Friends from './pages/Friends';
import Profile from './pages/Profile';
import { motion, AnimatePresence } from 'framer-motion';

function AppContent() {
  const { user, loading, error } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState('home');

  // Заглушка на время загрузки
  if (loading) {
    return (
      <div style={{
        height: '100vh',
        background: '#000',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        fontFamily: 'system-ui'
      }}>
        Загрузка данных...
      </div>
    );
  }

  // Ошибка загрузки пользователя
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
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'system-ui'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>Ошибка</h2>
        <p>{error}</p>
        <p style={{ marginTop: '1rem', fontSize: '1rem', opacity: 0.8 }}>
          Попробуйте перезапустить Mini App или открыть заново через бота
        </p>
      </div>
    );
  }

  // Нет пользователя после загрузки
  if (!user) {
    return (
      <div style={{
        height: '100vh',
        background: '#000',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        textAlign: 'center',
        padding: '20px'
      }}>
        Данные пользователя не загружены. Откройте приложение через Telegram-бота.
      </div>
    );
  }

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

export default function App() {
  return <AppContent />;
}