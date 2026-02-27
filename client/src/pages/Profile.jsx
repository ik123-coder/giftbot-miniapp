export default function Profile({ user, balance }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Профиль</h2>

      <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-8 text-center">
        {user?.photo_url ? (
          <img
            src={user.photo_url}
            alt="Аватар"
            className="w-28 h-28 rounded-full mx-auto mb-5 border-4 border-[#00ff9d]/40 object-cover shadow-lg shadow-[#00ff9d]/20"
          />
        ) : (
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 mx-auto mb-5 flex items-center justify-center text-5xl shadow-lg">
            👤
          </div>
        )}

        <div className="text-2xl font-bold mb-1">{user?.first_name || 'Гость'}</div>
        <div className="text-gray-400 mb-8">
          @{user?.username || 'нет username'}
        </div>

        <div className="bg-black/50 rounded-xl p-6 border border-gray-800">
          <div className="text-5xl font-extrabold text-[#00ff9d] mb-2">
            {balance.toLocaleString()}
          </div>
          <div className="text-gray-300 text-lg">монет</div>
        </div>

        <div className="mt-10 text-sm text-gray-500">
          Присоединился: {new Date().toLocaleDateString('ru-RU')}
        </div>
      </div>
    </div>
  );
}