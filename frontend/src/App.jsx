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
      <div className="h-screen bg-black flex items-center justify-center text-white text-2xl">
        Загрузка...
      </div>
    );
  }

  if (error && isTelegram) {
    return (
      <div className="h-screen bg-black text-red-500 flex flex-col items-center justify-center p-10 text-center">
        <h2 className="text-3xl mb-6">Ошибка</h2>
        <p className="text-xl mb-4">{error}</p>
        <p className="text-base opacity-80">
          Закройте и откройте Mini App заново через бота
        </p>
      </div>
    );
  }

  const currentUser = user || { firstName: 'Гость', username: '', balance: 0, photoUrl: '' };

  const pages = {
    home: <Home setActiveTab={setActiveTab} user={currentUser} />,
    tasks: <Tasks />,
    shop: <Shop />,
    friends: <Friends />,
    profile: <Profile user={currentUser} />
  };

  return (
    <div className="min-h-screen bg-black text-white pb-24">
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