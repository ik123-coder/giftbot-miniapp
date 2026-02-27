export default function Profile({ user, balance }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Профиль</h2>
      <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
        {user?.photo_url ? (
          <img src={user.photo_url} alt="avatar" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-[#00ff9d]/30" />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-4 flex items-center justify-center text-4xl">
            👤
          </div>
        )}
        <div className="text-xl font-bold">{user?.first_name || 'Гость'}</div>
        <div className="text-sm text-gray-400 mb-6">@{user?.username || 'нет юзернейма'}</div>
        
        <div className="bg-black/40 p-4 rounded-lg">
          <div className="text-3xl font-bold text-[#00ff9d]">{balance}</div>
          <div className="text-sm text-gray-400">Монет</div>
        </div>
      </div>
    </div>
  );
}