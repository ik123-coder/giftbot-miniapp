import { Home, Zap, Gift, Users, User } from 'lucide-react';

const BottomNav = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Главная' },
    { id: 'tasks', icon: Zap, label: 'Задания' },
    { id: 'shop', icon: Gift, label: 'Магазин' },
    { id: 'friends', icon: Users, label: 'Друзья' },
    { id: 'profile', icon: User, label: 'Профиль' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#111] border-t border-gray-800 flex justify-around py-2 z-50">
      {tabs.map(tab => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center py-1 px-4 rounded-xl transition-all ${isActive ? 'text-green-500 bg-green-500/10' : 'text-gray-400'}`}
          >
            <Icon size={24} />
            <span className="text-xs mt-1">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;