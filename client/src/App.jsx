// client/src/App.jsx
import { useEffect, useState } from 'react';

import Header from './components/Header';
import BottomNav from './components/BottomNav';
import MainMenu from './components/MainMenu';

// Импортируем страницы (все должны существовать!)
import Profile from './pages/Profile';
import Tasks from './pages/Tasks';
import Shop from './pages/Shop';
import Giveaways from './pages/Giveaways';
import Referrals from './pages/Referrals';

function App() {
  const [page, setPage] = useState('main');
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(500);
  const [tasksCompleted, setTasksCompleted] = useState({ telegram: false, chat: false });

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

    // Загружаем баланс и статусы из localStorage
    const storedBalance = localStorage.getItem('balance');
    const storedTasks = localStorage.getItem('tasksCompleted');
    if (storedBalance) setBalance(parseInt(storedBalance));
    if (storedTasks) setTasksCompleted(JSON.parse(storedTasks));
  }, []);

  // Сохраняем баланс и статусы в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('balance', balance.toString());
  }, [balance]);

  useEffect(() => {
    localStorage.setItem('tasksCompleted', JSON.stringify(tasksCompleted));
  }, [tasksCompleted]);

  const firstName = user?.first_name || 'Гость';

  const renderContent = () => {
    switch (page) {
      case 'main':
        return <MainMenu setPage={setPage} />;

      case 'profile':
        return <Profile />;  // ← Это ключевая строка — именно она показывает Профиль

      case 'tasks':
        return <Tasks 
          balance={balance} 
          setBalance={setBalance} 
          tasksCompleted={tasksCompleted} 
          setTasksCompleted={setTasksCompleted} 
        />; // ← Добавлено: передаём tasksCompleted

      // Заглушка для остальных страниц
      case 'shop':
      case 'giveaways':
      case 'referrals':
        return (
          <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
            <div className="text-8xl mb-8">🔒</div>
            <h1 className="text-4xl font-bold text-red-600 mb-6">Пока недоступно!</h1>
            <p className="text-gray-300 text-xl max-w-md">
              Этот раздел ещё в разработке.<br />
              Скоро всё будет готово.
            </p>
          </div>
        );

      default:
        return <MainMenu setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen text-white flex flex-col relative">
      <Header 
        firstName={firstName} 
        balance={balance} 
        photoUrl={user?.photo_url} 
      />

      <main className="flex-1 overflow-y-auto pb-28">
        {renderContent()}
      </main>

      <BottomNav currentPage={page} setPage={setPage} />
    </div>
  );
}

export default App;