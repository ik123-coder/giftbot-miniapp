// client/src/pages/Profile.jsx
export default function Profile() {
  const { user, balance, loading } = useUser();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[70vh] text-gray-400 text-xl">
        Загрузка профиля...
      </div>
    );
  }

  const firstName = user?.first_name || 'Гость';
  const username = user?.username ? `@${user.username}` : 'нет username';
  const photoUrl = user?.photo_url;

  return (
    <div className="p-6 pt-10 pb-24">
      {/* Верхний блок с приветствием и аватаром */}
      <div className="bg-[#0f1115] border border-[#00ff9d]/40 rounded-3xl p-8 mb-8 shadow-xl shadow-[#00ff9d]/15 backdrop-blur-sm">
        <div className="flex items-center gap-6">
          {/* Аватар слева (большой, как на скрине) */}
          <div className="flex-shrink-0">
            {photoUrl ? (
              <img
                src={photoUrl}
                alt="avatar"
                className="w-28 h-28 rounded-full border-4 border-[#00ff9d]/50 object-cover shadow-2xl shadow-[#00ff9d]/30"
              />
            ) : (
              <div className="w-28 h-28 rounded-full bg-gray-800 flex items-center justify-center text-6xl border-4 border-[#00ff9d]/40 shadow-2xl">
                👤
              </div>
            )}
          </div>

          {/* Текст справа */}
          <div className="flex-1">
            <div className="text-base text-gray-400 mb-1">Добро пожаловать,</div>
            <div className="text-3xl font-extrabold bg-gradient-to-r from-[#00ff9d] via-[#00e68c] to-[#00ff9d] bg-clip-text text-transparent">
              {firstName}
            </div>
            <div className="text-xl text-gray-300 mt-1">{username}</div>
          </div>
        </div>
      </div>

      {/* Баланс (реальный из базы) */}
      <div className="bg-[#0f1115] border border-[#00ff9d]/40 rounded-3xl p-8 mb-6 text-center shadow-lg shadow-[#00ff9d]/10">
        <div className="text-2xl text-gray-300 mb-3">Баланс</div>
        <div className="flex items-center justify-center gap-3">
          <span className="text-5xl font-black text-[#00ff9d]">{balance.toLocaleString()}</span>
          <span className="text-4xl text-[#00ff9d]">♢</span>
        </div>
        <div className="text-lg text-gray-400 mt-2">монет</div>
      </div>

      {/* Рефералы */}
      <div className="bg-[#0f1115] border border-[#00ff9d]/40 rounded-3xl p-6 mb-6 text-center shadow-lg shadow-[#00ff9d]/10">
        <div className="text-2xl font-semibold text-white mb-2">Рефералы</div>
        <div className="text-3xl text-white font-medium">Скоро…</div>
      </div>

      {/* Дата регистрации (текущая дата — потом заменишь на реальную из базы) */}
      <div className="bg-[#0f1115] border border-[#00ff9d]/40 rounded-3xl p-6 text-center shadow-lg shadow-[#00ff9d]/10">
        <div className="text-xl text-gray-300 mb-2">Дата регистрации</div>
        <div className="text-2xl font-medium text-white">
          {new Date().toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </div>
      </div>
    </div>
  );
}