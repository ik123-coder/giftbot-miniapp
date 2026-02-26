import { Calendar, Users, Gift } from 'lucide-react';

const Profile = ({ user }) => {
  const currentUser = user || { firstName: 'Гость', username: '', balance: 0, photoUrl: '', registeredAt: new Date() };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(date)) + ' г.';
  };

  return (
    <div className="p-6 pb-32">
      <div className="flex flex-col items-center pt-10">
        <div className="relative">
          <img
            src={currentUser.photoUrl || 'https://via.placeholder.com/128'}
            alt="Avatar"
            className="w-32 h-32 rounded-full object-cover ring-4 ring-green-500/30 shadow-2xl shadow-green-500/20"
          />
        </div>
        <h1 className="text-4xl font-bold mt-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
          {currentUser.firstName}
        </h1>
        <p className="text-green-400 mt-2 text-xl">@{currentUser.username || 'guest'}</p>
      </div>

      <div className="mt-12 space-y-6">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-green-500/20 shadow-lg shadow-black/50">
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

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-green-500/20 shadow-lg shadow-black/50">
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

      {/* Промокод */}
      <div className="mt-10 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-green-500/20 shadow-lg shadow-black/50">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-green-500/20 p-4 rounded-2xl">
            <Gift className="text-green-500" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-white">Промокод</h3>
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Введите промокод"
            className="flex-1 bg-black/50 border border-green-500/30 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 text-lg"
          />
          <button className="bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 px-8 rounded-xl font-bold text-lg transition shadow-lg shadow-green-500/20">
            Применить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;