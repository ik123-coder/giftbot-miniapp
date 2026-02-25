import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Coins } from 'lucide-react';
import PromoCode from '../components/PromoCode';

const Home = ({ setActiveTab }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="p-5 pb-24">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <img src={user?.photoUrl} className="w-14 h-14 rounded-full ring-2 ring-green-500" />
          <div>
            <div className="text-xl font-medium">Добро пожаловать,</div>
            <div className="text-2xl font-bold">{user?.firstName}</div>
          </div>
        </div>
        <div className="bg-[#1a1a1a] rounded-2xl px-5 py-3 flex items-center gap-2">
          <Coins className="text-green-500" size={28} />
          <div className="text-2xl font-bold">{user?.balance || 0}</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div onClick={() => setActiveTab('tasks')} className="bg-[#1a1a1a] rounded-3xl p-6 text-center cursor-pointer active:scale-95 transition">
          <div className="text-5xl mb-4">✅</div>
          <div className="font-semibold">Задания</div>
          <div className="text-sm text-gray-400">Выполняй и зарабатывай</div>
        </div>

        <div onClick={() => setActiveTab('shop')} className="bg-[#1a1a1a] rounded-3xl p-6 text-center cursor-pointer active:scale-95 transition">
          <div className="text-5xl mb-4">🛒</div>
          <div className="font-semibold">Магазин</div>
          <div className="text-sm text-gray-400">Трать монеты</div>
        </div>

        <div onClick={() => setActiveTab('friends')} className="bg-[#1a1a1a] rounded-3xl p-6 text-center cursor-pointer active:scale-95 transition">
          <div className="text-5xl mb-4">👥</div>
          <div className="font-semibold">Рефералы</div>
          <div className="text-sm text-gray-400">Приглашай друзей</div>
        </div>
      </div>

      <PromoCode />
    </div>
  );
};

export default Home;