import { useUser } from '../context/UserContext';

export default function Profile() {
  const { user, balance, loading } = useUser();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-400">Загрузка...</div>
      </div>
    );
  }

  const firstName = user?.first_name || 'Гость';
  const username = user?.username ? `@${user.username}` : '@username';

  return (
    <div className="p-5 pt-8 pb-24">
      {/* Большой верхний блок */}
      <div className="bg-[#0f1115] border border-[#00ff9d]/30 rounded-3xl p-6 mb-6 shadow-lg shadow-[#00ff9d]/10">
        <div className="flex items-center gap-4">
          {/* Аватар */}
          <div className="relative">
            {user?.photo_url ? (
              <img
                src={user.photo_url}
                alt="avatar"
                className="w-20 h-20 rounded-2xl object-cover border-2 border-[#00ff9d]/50"
              />
            ) : (
              <div className="w-20 h-20 rounded-2xl bg-gray-800 flex items-center justify-center text-4xl border-2 border-[#00ff9d]/30">
                👤
              </div>
            )}
          </div>

          {/* Имя и юзернейм */}
          <div>
            <div className="text-2xl font-bold">{firstName}</div>
            <div className="text-gray-400 text-lg">{username}</div>
          </div>
        </div>
      </div>

      {/* Баланс */}
      <div className="bg-[#0f1115] border border-[#00ff9d]/30 rounded-3xl p-6 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-3xl">💎</div>
          <div>
            <div className="text-sm text-gray-400">Баланс</div>
            <div className="text-4xl font-bold text-[#00ff9d]">{balance.toLocaleString()}</div>
          </div>
        </div>
        <div className="text-[#00ff9d] text-2xl">♢</div>
      </div>

      {/* Рефералы */}
      <div className="bg-[#0f1115] border border-[#00ff9d]/30 rounded-3xl p-6 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-medium">Рефералы</div>
            <div className="text-gray-400 text-xl">Скоро…</div>
          </div>
          <div className="text-4xl opacity-30">👥</div>
        </div>
      </div>

      {/* Дата регистрации */}
      <div className="bg-[#0f1115] border border-[#00ff9d]/30 rounded-3xl p-6">
        <div className="flex items-center gap-3">
          <div className="text-3xl">📅</div>
          <div>
            <div className="text-sm text-gray-400">Дата регистрации</div>
            <div className="text-xl font-medium">
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