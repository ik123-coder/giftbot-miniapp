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

    // Заблокированные разделы
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
        <div className="text-7xl mb-6">🔒</div>
        <h2 className="text-4xl font-bold text-red-600 mb-4">
          Пока недоступно!
        </h2>
        <p className="text-gray-400 text-xl leading-relaxed max-w-md">
          Этот раздел ещё в разработке.<br/>
          Вернёмся к нему чуть позже.
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen text-white flex flex-col relative">
      <Header firstName={firstName} balance={balance} photoUrl={user?.photo_url} />

      <main className="flex-1 overflow-y-auto pb-28">
        {renderContent()}
      </main>

      <BottomNav currentPage={page} setPage={setPage} />
    </div>
  );
}

export default App;