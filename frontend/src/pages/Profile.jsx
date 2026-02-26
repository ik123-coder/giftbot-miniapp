import { Calendar, Gift } from 'lucide-react';

const Profile = ({ user }) => {
  // Защита от null/undefined
  const currentUser = user || {
    firstName: 'Гость',
    username: 'guest',
    photoUrl: 'https://via.placeholder.com/128',
    balance: 0,
    registeredAt: new Date().toISOString() // дефолтная дата, если нет из бэкенда
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Неизвестно';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date) + ' г.';
  };

  return (
    <div className="p-6 pb-32 overflow-y-auto h-screen bg-black">
      {/* Верхняя часть: аватар + имя + @ */}
      <div className="flex flex-col items-center pt-10">
        <div className="relative">
          <img
            src={currentUser.photoUrl}
            alt="Avatar"
            className="w-32 h-32 rounded-full object-cover ring-4 ring-green-500/30 shadow-2xl shadow-green-500/20"
          />
        </div>
        <h1 className="text-4xl font-bold mt-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
          {currentUser.firstName}
        </h1>
        <p className="text-green-400 mt-2 text-xl">@{currentUser.username}</p>
      </div>

      {/* Баланс сверху справа (маленький, как ты просил) */}
      <div className="absolute top-6 right-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl px-4 py-2 flex items-center gap-2 border border-green-500/30 shadow-sm">
        <Coins className="text-green-500" size={22} />
        <span className="text-xl font-bold text-white">{currentUser.balance || 0}</span>
      </div>

      {/* Основные поля */}
      <div className="mt-12 space-y-6">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-green-500/20 shadow-lg">
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

      {/* Промокод внизу */}
      <div className="mt-10 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-green-500/20 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-green-500/20 p-4 rounded-2xl">
            <Gift className="text-green-500" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-white">Промокод</h3>
        </div>
        <div className="bg-black/50 border border-red-500/50 rounded-xl px-5 py-4 text-center text-white/70 text-lg">
          Пока недоступно
        </div>
      </div>
    </div>
  );
};

export default Profile;