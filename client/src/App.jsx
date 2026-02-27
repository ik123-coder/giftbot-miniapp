import { useEffect, useState } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import MainMenu from './components/MainMenu';
import Tasks from './pages/Tasks';
import Shop from './pages/Shop';
import Giveaways from './pages/Giveaways';
import Referrals from './pages/Referrals';
import Profile from './pages/Profile';

function App() {
  const [page, setPage] = useState('main');
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(500);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand();

      const initUser = tg.initDataUnsafe?.user;
      if (initUser) {
        setUser(initUser);
        // Здесь можно fetch реального баланса с бэкенда
        // fetchProfile().then(data => setBalance(data.balance));
      }
    }
  }, []);

  const firstName = user?.first_name || 'Гость';

  const renderPage = () => {
    switch (page) {
      case 'tasks':     return <Tasks />;
      case 'shop':      return <Shop />;
      case 'giveaways': return <Giveaways />;
      case 'referrals': return <Referrals />;
      case 'profile':   return <Profile user={user} balance={balance} />;
      default:          return <MainMenu setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header firstName={firstName} balance={balance} photoUrl={user?.photo_url} />
      
      <main className="flex-1 overflow-y-auto pb-20">
        {renderPage()}
      </main>

      <BottomNav currentPage={page} setPage={setPage} />
    </div>
  );
}

export default App;