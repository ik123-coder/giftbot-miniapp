import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserProvider } from './context/UserContext';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Shop from './pages/Shop';
import Friends from './pages/Friends';
import Profile from './pages/Profile';

function AppContent() {
  const [activeTab, setActiveTab] = useState('home');

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
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}