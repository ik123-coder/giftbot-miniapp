import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Calendar, Users } from 'lucide-react';
import PromoCode from '../components/PromoCode';

const Profile = () => {
  const { user } = useContext(UserContext);

  const formatDate = (date) => {
    if (!date) return '';
    return new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(date)) + ' г.';
  };

  return (
    <div className="p-5 pb-24">
      <div className="flex flex-col items-center pt-8">
        <img src={user?.photoUrl} className="w-32 h-32 rounded-full ring-4 ring-green-500" />
        <div className="text-3xl font-bold mt-6">{user?.firstName}</div>
        <div className="text-green-400">@{user?.username}</div>
      </div>

      <div className="mt-12 space-y-6">
        <div className="bg-[#1a1a1a] rounded-3xl p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-green-500/20 p-3 rounded-2xl">
              <Users className="text-green-500" size={32} />
            </div>
            <div>
              <div className="text-3xl font-bold">{user?.referredUsers?.length || 0}</div>
              <div className="text-sm text-gray-400">Рефералов</div>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-3xl p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-green-500/20 p-3 rounded-2xl">
              <Calendar className="text-green-500" size={32} />
            </div>
            <div>
              <div className="font-medium">Дата регистрации</div>
              <div className="text-2xl">{formatDate(user?.registeredAt)}</div>
            </div>
          </div>
        </div>
      </div>

      <PromoCode />
    </div>
  );
};

export default Profile;