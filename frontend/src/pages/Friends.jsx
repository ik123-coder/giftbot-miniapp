import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Copy, Share2 } from 'lucide-react';

const Friends = () => {
  const { user } = useContext(UserContext);
  const refLink = `https://t.me/crashsatbot?startapp=ref_${user?.telegramId || ''}`;

  const progress = user?.referredUsers?.length || 0;

  const copyLink = () => {
    navigator.clipboard.writeText(refLink);
    alert('Ссылка скопирована!');
  };

  const share = () => {
    window.Telegram.WebApp.openTelegramLink(`https://t.me/share/url?url=${encodeURIComponent(refLink)}`);
  };

  return (
    <div className="p-6 pb-32 overflow-y-auto h-screen">
      <h1 className="text-3xl font-bold text-white mb-2">Рефералы</h1>
      <p className="text-green-400 text-2xl font-bold mb-8">{user?.balance || 0} монет</p>

      <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-green-500/20 shadow-lg mb-8">
        <p className="text-white/80 text-sm mb-3">РЕФЕРАЛЬНАЯ ССЫЛКА</p>
        <div className="bg-black/50 p-4 rounded-2xl font-mono text-sm break-all mb-4 border border-green-500/30">
          {refLink}
        </div>
        <div className="flex gap-3">
          <button onClick={copyLink} className="flex-1 bg-gray-800 hover:bg-gray-700 py-4 rounded-2xl flex items-center justify-center gap-2 text-white">
            <Copy size={20} /> Скопировать
          </button>
          <button onClick={share} className="flex-1 bg-green-600 hover:bg-green-700 py-4 rounded-2xl flex items-center justify-center gap-2 text-white">
            <Share2 size={20} /> Поделиться
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 text-center border border-green-500/20">
          <p className="text-3xl font-bold text-white">{user?.referredUsers?.length || 0}</p>
          <p className="text-xs text-white/60 mt-1">ЛИЧНО ПРИГЛАШЁННЫЕ</p>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 text-center border border-green-500/20">
          <p className="text-3xl font-bold text-white">0</p>
          <p className="text-xs text-white/60 mt-1">ПРИГЛАШЁННЫЕ ДРУЗЬЯМИ</p>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 text-center border border-green-500/20">
          <p className="text-3xl font-bold text-green-400">0</p>
          <p className="text-xs text-white/60 mt-1">ЗАРАБОТАНО</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-green-500/20 shadow-lg mb-8">
        <div className="flex justify-between items-center mb-4">
          <p className="text-white">Пригласи 3 друзей (+1000 за каждого!)</p>
          <p className="text-green-400 font-bold">{progress}/3</p>
        </div>
        <div className="h-2 bg-gray-800 rounded-full mb-6 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(progress / 3 * 100, 100)}%` }}
          />
        </div>
        <button
          disabled={progress < 3}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-700 disabled:from-gray-700 disabled:to-gray-800 font-bold text-lg transition disabled:cursor-not-allowed shadow-lg shadow-green-500/20"
        >
          {progress >= 3 ? 'Забрать 2000 монет' : 'Пригласить друзей'}
        </button>
      </div>

      <p className="text-xl font-bold text-white mb-4">Ваши рефералы</p>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {user?.referredUsers?.length > 0 ? (
          user.referredUsers.map((ref, i) => (
            <div key={i} className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 flex items-center gap-4 border border-green-500/20">
              <img src={ref.photoUrl || 'https://via.placeholder.com/48'} className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-medium text-white">{ref.firstName}</p>
                <p className="text-sm text-white/60">@{ref.username}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-white/60">
            <p className="text-5xl mb-4">👥</p>
            <p className="font-medium">Пока нет рефералов</p>
            <p className="text-sm mt-2">Поделитесь ссылкой с друзьями</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Friends;