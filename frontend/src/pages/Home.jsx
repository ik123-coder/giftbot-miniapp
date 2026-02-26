import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Coins } from 'lucide-react';

const Home = ({ setActiveTab }) => {
  const { user } = useContext(UserContext);
  const currentUser = user || { firstName: 'Гость', username: '', balance: 0, photoUrl: '' };

  return (
    <div className="p-5 pb-24">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img 
              src={currentUser.photoUrl || 'https://via.placeholder.com/56'} 
              alt="Avatar" 
              className="w-14 h-14 rounded-full object-cover ring-2 ring-green-500/50"
            />
          </div>
          <div>
            <p className="text-white/80 text-sm">Добро пожаловать,</p>
            <p className="text-white text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              {currentUser.firstName}
            </p>
            <p className="text-white/60 text-sm">@{currentUser.username || 'guest'}</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl px-5 py-3 flex items-center gap-2 border border-green-500/20">
          <Coins className="text-green-500" size={28} />
          <span className="text-2xl font-bold text-white">{currentUser.balance || 0}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <button 
          onClick={() => setActiveTab('tasks')}
          className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 text-center border border-green-500/20 hover:border-green-500/40 transition-all active:scale-95"
        >
          <div className="text-5xl mb-3">✅</div>
          <p className="font-semibold text-lg">Задания</p>
          <p className="text-sm text-white/60">Выполняй и зарабатывай</p>
        </button>

        <button 
          onClick={() => setActiveTab('shop')}
          className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 text-center border border-green-500/20 hover:border-green-500/40 transition-all active:scale-95"
        >
          <div className="text-5xl mb-3">🛒</div>
          <p className="font-semibold text-lg">Магазин</p>
          <p className="text-sm text-white/60">Трать монеты</p>
        </button>

        <button 
          onClick={() => setActiveTab('friends')}
          className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 text-center border border-green-500/20 hover:border-green-500/40 transition-all active:scale-95"
        >
          <div className="text-5xl mb-3">👥</div>
          <p className="font-semibold text-lg">Рефералы</p>
          <p className="text-sm text-white/60">Приглашай друзей</p>
        </button>
      </div>

      {/* Промокод на главной — убрал, теперь только в Профиле */}
    </div>
  );
};

export default Home;