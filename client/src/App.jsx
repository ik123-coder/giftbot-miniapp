import { useEffect, useState } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import MainMenu from './components/MainMenu';
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
        // Можно позже подключить реальный fetch баланса
      }
    }
  }, []);

  const firstName = user?.first_name || 'Гость';

  const renderContent = () => {
    if (page === 'main') {
      return <MainMenu setPage={setPage} />;
    }

    if (page === 'profile') {
      return <Profile user={user} balance={balance} />;
    }

    // Все остальные страницы пока заблокированы
    if (['tasks', 'shop', 'giveaways', 'referrals'].includes(page)) {
      return (
        <div className="flex flex-col items-center justify-center h-full mt-20 px-6 text-center">
          <div className="text-6xl mb-6">🔒</div>
          <h2 className="text-3xl font-bold text-red-500 mb-4">
            Пока недоступно!
          </h2>
          <p className="text-gray-400 text-lg">
            Этот раздел находится в разработке.<br />
            Скоро станет доступен.
          </p>
        </div>
      );
    }

    // На всякий случай fallback
    return <MainMenu setPage={setPage} />;
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header firstName={firstName} balance={balance} photoUrl={user?.photo_url} />

      <main className="flex-1 overflow-y-auto pb-24">
        {renderContent()}
      </main>

      <BottomNav currentPage={page} setPage={setPage} />
    </div>
  );
}

export default App;