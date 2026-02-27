import { useUser } from '../context/UserContext';

export default function Profile() {
  const { user, balance, loading } = useUser();

  if (loading) return <div className="text-center py-20">Загрузка...</div>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Профиль</h2>

      <div className="bg-[#0f1115] border border-[#1a1f25] rounded-3xl p-10 text-center">
        {user?.photo_url ? (
          <img
            src={user.photo_url}
            alt="avatar"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-[#00ff9d]/40"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-gray-800 mx-auto mb-6 flex items-center justify-center text-6xl">
            👤
          </div>
        )}

        <div className="text-3xl font-bold mb-2">{user?.first_name || 'Гость'}</div>
        <div className="text-gray-400 mb-10">@{user?.username || 'нет имени'}</div>

        <div className="bg-black/50 rounded-2xl p-8 border border-gray-800">
          <div className="text-6xl font-black text-[#00ff9d] mb-3">
            {balance.toLocaleString()}
          </div>
          <div className="text-xl text-gray-300">монет</div>
        </div>
      </div>
    </div>
  );
}