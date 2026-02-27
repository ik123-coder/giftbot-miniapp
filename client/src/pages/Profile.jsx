import { useUser } from '../App.jsx';

export default function Profile() {
  const { user, balance, loading } = useUser();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] text-gray-400">
        Загрузка...
      </div>
    );
  }

  const firstName = user?.first_name || 'Гость';
  const username = user?.username ? `@${user.username}` : 'нет username';

  return (
    <div className="p-6 pt-10">
      {/* Большой блок профиля */}
      <div className="bg-[#0f1115]/80 border border-[#00ff9d]/30 rounded-3xl p-8 shadow-lg shadow-[#00ff9d]/10 backdrop-blur-md">
        <div className="flex flex-col items-center gap-4">
          {/* Аватар */}
          {user?.photo_url ? (
            <img
              src={user.photo_url}
              alt="avatar"
              className="w-28 h-28 rounded-full border-4 border-[#00ff9d]/40 object-cover shadow-xl shadow-[#00ff9d]/20"
            />
          ) : (
            <div className="w-28 h-28 rounded-full bg-gray-800 flex items-center justify-center text-6xl border-4 border-[#00ff9d]/30 shadow-xl">
              👤
            </div>
          )}

          {/* Имя и username */}
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#00ff9d] to-[#00e68c] bg-clip-text text-transparent">
              {firstName}
            </div>
            <div className="text-lg text-gray-400 mt-1">{username}</div>
          </div>

          {/* Баланс */}
          <div className="mt-6 w-full bg-black/40 rounded-2xl p-6 border border-gray-800 text-center">
            <div className="text-5xl font-black text-[#00ff9d] mb-2">
              {balance.toLocaleString()}
            </div>
            <div className="text-xl text-gray-300">монет</div>
          </div>

          {/* Рефералы (заглушка) */}
          <div className="mt-4 w-full bg-black/30 rounded-xl p-4 border border-gray-800 text-center">
            <div className="text-xl font-medium text-white">Рефералы</div>
            <div className="text-lg text-gray-400">Скоро…</div>
          </div>

          {/* Дата регистрации */}
          <div className="mt-4 w-full bg-black/30 rounded-xl p-4 border border-gray-800 text-center">
            <div className="text-sm text-gray-400">Дата регистрации</div>
            <div className="text-lg font-medium text-white">
              {new Date().toLocaleDateString('ru-RU', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}