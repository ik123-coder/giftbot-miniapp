import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { Copy, Share2 } from 'lucide-react';
import ReferralList from '../components/ReferralList';
import axios from 'axios';

const Friends = () => {
  const { user, updateUser, API_URL } = useContext(UserContext);
  const refLink = `https://t.me/MaloyCSerGiftBot?startapp=ref_${user?.telegramId}`;
  const [claimed, setClaimed] = useState(user?.claimedReferralBonus || false);
  const progress = user?.referredUsers?.length || 0;

  const copyLink = () => {
    navigator.clipboard.writeText(refLink);
    window.Telegram.WebApp.showPopup({ message: 'Ссылка скопирована!' });
  };

  const share = () => {
    window.Telegram.WebApp.openTelegramLink(`https://t.me/share/url?url=${encodeURIComponent(refLink)}`);
  };

  const claimBonus = async () => {
    if (progress < 3 || claimed) return;
    // Здесь можно добавить отдельный endpoint для бонуса 2000, но для простоты обновляем локально + отправляем на сервер
    const newBalance = (user.balance || 0) + 2000;
    updateUser({ balance: newBalance, claimedReferralBonus: true });
    setClaimed(true);

    // Можно добавить endpoint /referrals/claim-bonus если хочешь
  };

  return (
    <div className="p-5 pb-24">
      <div className="text-3xl font-bold mb-2">Рефералы</div>
      <div className="text-green-500 text-2xl font-mono mb-8">{user?.balance || 0} монет</div>

      <div className="bg-[#1a1a1a] rounded-3xl p-6 mb-8">
        <div className="text-sm text-gray-400 mb-3">РЕФЕРАЛЬНАЯ ССЫЛКА</div>
        <div className="bg-black/50 p-4 rounded-2xl font-mono text-sm break-all mb-4">{refLink}</div>
        <div className="flex gap-3">
          <button onClick={copyLink} className="flex-1 bg-gray-800 py-4 rounded-2xl flex items-center justify-center gap-2">
            <Copy size={20} /> Скопировать
          </button>
          <button onClick={share} className="flex-1 bg-green-500 py-4 rounded-2xl flex items-center justify-center gap-2">
            <Share2 size={20} /> Поделиться в Telegram
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-[#1a1a1a] rounded-2xl p-5 text-center">
          <div className="text-3xl font-bold">{user?.referredUsers?.length || 0}</div>
          <div className="text-xs text-gray-400 mt-1">ЛИЧНО ПРИГЛАШЁННЫЕ</div>
        </div>
        <div className="bg-[#1a1a1a] rounded-2xl p-5 text-center">
          <div className="text-3xl font-bold">0</div>
          <div className="text-xs text-gray-400 mt-1">ПРИГЛАШЁННЫЕ ДРУЗЬЯМИ</div>
        </div>
        <div className="bg-[#1a1a1a] rounded-2xl p-5 text-center">
          <div className="text-3xl font-bold text-green-500">0</div>
          <div className="text-xs text-gray-400 mt-1">ЗАРАБОТАНО</div>
        </div>
      </div>

      <div className="bg-[#1a1a1a] rounded-3xl p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>Пригласи 3 друзей (+1000 за каждого!)</div>
          <div className="text-green-500 font-bold">{progress}/3</div>
        </div>
        <div className="h-2 bg-gray-800 rounded-full mb-6">
          <div className="h-2 bg-green-500 rounded-full" style={{ width: `${Math.min(progress / 3 * 100, 100)}%` }} />
        </div>
        <button
          onClick={claimBonus}
          disabled={progress < 3 || claimed}
          className="w-full py-4 rounded-2xl bg-green-500 disabled:bg-gray-700 font-medium text-lg"
        >
          {claimed ? '✅ Завершено' : progress >= 3 ? 'Забрать 2000 монет' : 'Пригласить друзей'}
        </button>
      </div>

      <div className="mb-4 text-lg font-semibold">Ваши рефералы</div>
      <ReferralList referredUsers={user?.referredUsers || []} />
    </div>
  );
};

export default Friends;