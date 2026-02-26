import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Calendar, Users, Gift } from 'lucide-react';

const Profile = () => {
  const { user } = useContext(UserContext);
  const currentUser = user || { firstName: 'Гость', username: '', balance: 0, photoUrl: '', registeredAt: new Date() };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(date)) + ' г.';
  };

  return (
    <div className="p-5 pb-24">
      <div className="flex flex-col items-center pt-8">
        <div className="relative">
          <img 
            src={currentUser.photoUrl || 'https://via.placeholder.com/128'} 
            alt="Avatar" 
            className="w-32 h-32 rounded-full object-cover ring-4 ring-green-500/30"
          />
        </div>
        <h1 className="text-3xl font-bold mt-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
          {currentUser.firstName}
        </h1>
        <p className="text-green-400 mt-1">@{currentUser.username || 'guest'}</p>
      </div>

      <div className="mt-12 space-y-6">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-green-500/20">
          <div className="flex items-center gap-4">
            <div className="bg-green-500/20 p-4 rounded-2xl">
              <Users className="text-green-500" size={32} />
            </div>
            <div>
              <p className="text-white/80 text-sm">Рефералов</p>
              <p className="text-3xl font-bold text-white">{currentUser.referrals || 0}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-green-500/20">
          <div className="flex items-center gap-4">
            <div className="bg-green-500/20 p-4 rounded-2xl">
              <Calendar className="text-green-500" size={32} />
            </div>
            <div>
              <p className="text-white/80 text-sm">Дата регистрации</p>
              <p className="text-2xl font-medium text-white">{formatDate(currentUser.registeredAt)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Промокод только здесь */}
      <div className="mt-8 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-green-500/20">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-green-500/20 p-4 rounded-2xl">
            <Gift className="text-green-500" size={32} />
          </div>
          <h3 className="text-xl font-bold text-white">Промокод</h3>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Введите промокод"
            className="flex-1 bg-black/50 border border-green-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
          />
          <button className="bg-green-600 hover:bg-green-700 px-6 rounded-xl font-medium transition">
            Применить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;